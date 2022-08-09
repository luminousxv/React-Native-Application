import React, {ReactElement, useState} from 'react';
import {
  FlatList,
  RefreshControl,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import moment from 'moment';

const CalcRemainTime = (time: string): number => {
  const realTime: string = moment().format('HH:mm');
  const remainHour: number =
    parseInt(time.slice(0, 2), 10) - parseInt(realTime.slice(0, 2), 10);
  let remainMinutes: number =
    parseInt(time.slice(3, 5), 10) - parseInt(realTime.slice(3, 5), 10);
  const remain = remainHour * 60 + remainMinutes;
  return remain;
};

const CalcArrivalTime = (time: string): string => {
  let arrivalTime_minute = parseInt(time.slice(3, 5), 10) + 20;
  let arrivalTime_Hour = parseInt(time.slice(0, 2), 10);
  if (arrivalTime_minute > 59) {
    arrivalTime_Hour += 1;
    arrivalTime_minute = arrivalTime_minute - 60;
    if (arrivalTime_minute === 0) {
      return (
        arrivalTime_Hour.toString() + ':' + arrivalTime_minute.toString() + '0'
      );
    }
  }
  return arrivalTime_Hour.toString() + ':' + arrivalTime_minute.toString();
};

const wait = (timeout: number) => {
  return new Promise<void>(resolve => {
    setTimeout(resolve, timeout);
  });
};

const Data = [
  {
    time: '19:00',
    remain: CalcRemainTime('19:00'),
    arrival: CalcArrivalTime('19:00'),
  },
  {
    time: '19:20',
    remain: CalcRemainTime('19:20'),
    arrival: CalcArrivalTime('19:20'),
  },
  {
    time: '19:40',
    remain: CalcRemainTime('19:40'),
    arrival: CalcArrivalTime('19:40'),
  },
  {
    time: '20:00',
    remain: CalcRemainTime('20:00'),
    arrival: CalcArrivalTime('20:00'),
  },
];

export function GoUniversity(): ReactElement {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = () => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  };

  useState(() => {
    onRefresh;
  });

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <FlatList
        data={Data}
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
                지하철 정보(4호선, 수인분당선)
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
  },
  arrival_container: {
    borderRadius: 15,
    borderWidth: 8,
    backgroundColor: '#ffffff',
    borderColor: '#ADD8E6',
  },
  text: {
    padding: 10,
    fontSize: 30,
    textAlign: 'left',
  },
  sub_text: {
    padding: 10,
    fontSize: 20,
  },
  sub_container: {
    flexDirection: 'row',
  },
  info_container: {
    backgroundColor: '#ffffff',
    borderWidth: 8,
    borderColor: '#ADD8E6',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
