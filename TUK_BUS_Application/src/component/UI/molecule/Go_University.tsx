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
  const [bustime, setBustime] = useState<string[]>([]);

  const onRefresh = () => {
    setTimeInfo([]);
    setBustime([]);
    setLoading(false);
    funcA();
    setRefreshing(true);
    setLoading(true);
    wait(2000).then(() => setRefreshing(false));
  };

  const setupData = (duration: number[]) => {
    console.log('duration', duration);

    bustime.map((item, index) => {
      setTimeInfo(prev => [
        ...prev,
        {
          time: item,
          remain: CalcRemainTime(item),
          arrival: CalcArrivalTime(item, duration[index]),
        },
      ]);
    });
  };

  const funcA = async () => {
    setBustime(time);
    let duration: number[] = [];

    for (let i = 0; i < time.length; i++) {
      const {data} = await getArrivalTime(time[i], '등교');
      duration.push(data.routes[0].sections[0].duration);
    }

    return new Promise((resolve, reject) => {
      if (resolve) {
        resolve(setupData(duration));
        setLoading(true);
      } else {
        reject(console.error('error'));
      }
    });
  };

  useEffect(() => {
    funcA();
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
