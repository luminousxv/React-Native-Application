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
import {SubwayInfo, TimeInfo} from '../../../../types/navigation/types';
import {styles} from '../atom/stylesheet.css';
import {CalcArrivalTime, CalcRemainTime} from '../atom/calctime';
import {getArrivalTime} from '../../../api/arrivalTimeAPI';
import {InfoContainer, SubwayContainer} from '../atom/info_subway_container';
import {getHomeSchedule} from '../../../api/serverAPI';
import {liveSchedule} from '../../../../types/api/awsapiType';

const wait = (timeout: number) => {
  return new Promise<void>(resolve => {
    setTimeout(resolve, timeout);
  });
};

export function GoHome(): ReactElement {
  const [timeinfo, setTimeInfo] = useState<TimeInfo[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [home_bustime, setHome_Bustime] = useState<string[]>([]);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [subwayinfo, setSubwayInfo] = useState<SubwayInfo[]>([]);
  const [endofService, setEndofService] = useState<boolean>(false);

  const onRefresh = () => {
    setTimeInfo([]);
    setHome_Bustime([]);
    setSubwayInfo([]);
    setLoading(false);
    getLiveBusSchedule();
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
    setLoading(true);
  };

  const setupData = (duration: number[]) => {
    setTimeInfo([]);
    for (let i = 0; i < home_bustime.length; i++) {
      setTimeInfo(prev => [
        ...prev,
        {
          time: home_bustime[i],
          remain: CalcRemainTime(home_bustime[i]),
          arrival: CalcArrivalTime(home_bustime[i], duration[i]),
        },
      ]);
    }
    setLoading(true);
  };

  const getKakaoFutureRouteSearch = async (schedule: liveSchedule) => {
    let duration: number[] = [];
    setHome_Bustime([]);
    if (schedule.Bus_schedule.length === 0) {
      setEndofService(true);
      setLoading(true);
      return;
    }
    for (let i = 0; i < schedule.Bus_schedule.length; i++) {
      if (schedule.Bus_schedule[i].min === 0) {
        home_bustime.push(
          schedule.Bus_schedule[i].hour +
            ':' +
            schedule.Bus_schedule[i].min +
            '0',
        );
      } else {
        home_bustime.push(
          schedule.Bus_schedule[i].hour + ':' + schedule.Bus_schedule[i].min,
        );
      }
      const {data} = await getArrivalTime(home_bustime[i], '하교');
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

  const setupSubwayInfo = (data: liveSchedule) => {
    for (let i = 0; i < data.Subway_schedule.length; i++) {
      setSubwayInfo(prev => [
        ...prev,
        {
          bstatnNm: data.Subway_schedule[i].bstatnNm,
          arvlMsg2: data.Subway_schedule[i].arvlMsg2,
          arvlMsg3: data.Subway_schedule[i].arvlMsg3,
        },
      ]);
    }
  };

  const getLiveBusSchedule = async () => {
    const {data} = await getHomeSchedule();
    return new Promise((resolve, reject) => {
      if (resolve) {
        resolve(getKakaoFutureRouteSearch(data));
        resolve(setupSubwayInfo(data));
      } else {
        reject(console.error('error'));
      }
    });
  };

  useEffect(() => {
    getLiveBusSchedule();
  }, []);

  if (loading === false) {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    );
  } else if (endofService === true) {
    return (
      <View>
        <View style={styles.endofSerivce_container}>
          <Text style={styles.endofService_font}>운행종료</Text>
        </View>
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
                  {!isVisible && <SubwayContainer data={subwayinfo} />}
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
