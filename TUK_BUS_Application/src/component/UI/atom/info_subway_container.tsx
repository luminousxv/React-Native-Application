import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';
import {flatlistParams} from '../../../../types/navigation/types';
import {styles} from './stylesheet.css';

export function InfoContainer({item}: flatlistParams): ReactElement {
  return (
    <>
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
    </>
  );
}

export function SubwayContainer(): ReactElement {
  return (
    <View style={styles.info_container}>
      <Text style={styles.sub_text}>지하철 실시간 위치 정보</Text>
      <View style={styles.sub_container}>
        <Text style={styles.sub_text}>당고개행: 10분전</Text>
        <Text style={styles.sub_text}>오이도행: 7분전</Text>
      </View>
      <View style={styles.sub_container}>
        <Text style={styles.sub_text}>왕십리행 : 5분전</Text>
        <Text style={styles.sub_text}> 인천행 : 20분전</Text>
      </View>
    </View>
  );
}
