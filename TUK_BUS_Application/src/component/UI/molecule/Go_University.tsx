/* eslint-disable react-hooks/exhaustive-deps */
import React, {ReactElement, useEffect, useState} from 'react';
import {FlatList, RefreshControl, StatusBar, Text, View} from 'react-native';
import {TimeInfo} from '../../../../types/navigation/types';
import {styles} from '../atom/stylesheet';
import {CalcArrivalTime, CalcRemainTime} from '../atom/calctime';
import {getArrivalTime} from '../../../api/arrivalTimeAPI';

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

  const onRefresh = () => {
    setTimeInfo([]);
    setUniv_Bustime([]);
    setLoading(false);
    getKakaoFutureRouteSearch();
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    setLoading(true);
  };

  const setupData = (duration: number[]) => {
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
          renderItem={({item}) => (
            <>
              <View style={styles.arrival_container}>
                <Text style={styles.text}>
                  {item.time}
                  {'\n'}
                  남은시간: {item.remain}분{'\n'}
                  도착예정시간: {item.arrival}
                </Text>
              </View>
              <View style={styles.info_container}>
                <Text style={styles.sub_text}>
                  지하철 도착 정보(4호선, 수인분당선)
                </Text>
                <View style={styles.sub_container}>
                  <Text style={styles.sub_text}>당고개행: 10분전</Text>
                  <Text style={styles.sub_text}>오이도행: 7분전</Text>
                </View>
                <View style={styles.sub_container}>
                  <Text style={styles.sub_text}>왕십리행 : 5분전</Text>
                  <Text style={styles.sub_text}> 인천행 : 20분전</Text>
                </View>
              </View>
            </>
          )}
        />
      </View>
    );
  }
}
