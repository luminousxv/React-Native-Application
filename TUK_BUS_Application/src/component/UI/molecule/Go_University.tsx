/* eslint-disable react-hooks/exhaustive-deps */
import React, {ReactElement, useEffect, useState} from 'react';
import {
  FlatList,
  RefreshControl,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TimeInfo} from '../../../../types/navigation/types';
import {styles} from '../atom/stylesheet.css';
import {CalcArrivalTime, CalcRemainTime} from '../atom/calctime';
import {getArrivalTime} from '../../../api/arrivalTimeAPI';
import {InfoContainer, SubwayContainer} from '../atom/info_subway_container';

const wait = (timeout: number) => {
  return new Promise<void>(resolve => {
    setTimeout(resolve, timeout);
  });
};
const time = ['23:00', '23:20', '23:40', '23:50'];

export function GoUniversity(): ReactElement {
  const [timeinfo, setTimeInfo] = useState<TimeInfo[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [univ_bustime, setUniv_Bustime] = useState<string[]>([]);
  const [isVisible, setVisible] = useState<boolean>(false);

  const onRefresh = () => {
    setTimeInfo([]);
    setUniv_Bustime([]);
    setLoading(false);
    getKakaoFutureRouteSearch();
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
    setLoading(true);
  };

  const setupData = (duration: number[]) => {
    setTimeInfo([]);
    for (let i = 0; i < univ_bustime.length; i++) {
      setTimeInfo(prev => [
        ...prev,
        {
          time: univ_bustime[i],
          remain: CalcRemainTime(univ_bustime[i]),
          arrival: CalcArrivalTime(univ_bustime[i], duration[i]),
        },
      ]);
    }
    setLoading(true);
  };

  const getKakaoFutureRouteSearch = async () => {
    let duration: number[] = [];
    setUniv_Bustime([]);
    for (let i = 0; i < time.length; i++) {
      univ_bustime.push(time[i]);
      const {data} = await getArrivalTime(time[i], '등교');
      duration.push(data.routes[0].sections[0].duration);
    }

    return new Promise((resolve, reject) => {
      if (resolve) {
        resolve(setupData(duration));
      } else {
        reject(console.error('error'));
      }
    });
  };

  useEffect(() => {
    getKakaoFutureRouteSearch();
  }, []);

  if (loading === false) {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <StatusBar
          animated={true}
          barStyle={'dark-content'}
          translucent={true}
          backgroundColor={'transparent'}
        />
        <FlatList
          data={timeinfo}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={'black'}
            />
          }
          renderItem={({item, index}) => {
            if (index === 0) {
              return (
                <View>
                  <TouchableOpacity
                    style={styles.arrival_container}
                    onPress={() => setVisible(!isVisible)}>
                    <InfoContainer item={item} />
                  </TouchableOpacity>
                  {!isVisible && <SubwayContainer />}
                </View>
              );
            }
            return (
              <View style={styles.arrival_container}>
                <InfoContainer item={item} />
              </View>
            );
          }}
        />
      </View>
    );
  }
}
