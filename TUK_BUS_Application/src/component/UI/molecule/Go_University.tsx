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
                    <View style={styles.time_container}>
                      <Text style={styles.time_text}>{item.time}</Text>
                    </View>
                    <View style={styles.infoText_container}>
                      <View style={styles.calctime_container}>
                        <Text style={styles.left_time_text}>
                          {item.remain}분
                        </Text>
                        <Text style={styles.arrival_time_text}>
                          {item.arrival}
                        </Text>
                      </View>
                      <View style={styles.time_container}>
                        <Text style={styles.remain_text}>남은시간</Text>
                        <Text style={styles.arrival_text}>도착예정시간</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View>
                    {isVisible && (
                      <View style={styles.info_container}>
                        <Text style={styles.sub_text}>
                          지하철 실시간 위치 정보
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
                    )}
                  </View>
                </View>
              );
            }
            return (
              <View style={styles.arrival_container}>
                <View style={styles.time_container}>
                  <Text style={styles.time_text}>{item.time}</Text>
                </View>
                <View style={styles.infoText_container}>
                  <View style={styles.calctime_container}>
                    <Text style={styles.left_time_text}>{item.remain}분</Text>
                    <Text style={styles.arrival_time_text}>{item.arrival}</Text>
                  </View>
                  <View style={styles.time_container}>
                    <Text style={styles.remain_text}>남은시간</Text>
                    <Text style={styles.arrival_text}>도착예정시간</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}
