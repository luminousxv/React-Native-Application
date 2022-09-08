import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';
import {flatlistParams, subwayParams} from '../../../../types/navigation/types';
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

export function SubwayContainer({toggle}: subwayParams): ReactElement {
  if (toggle) {
    return (
      <View style={styles.info_container}>
        <Text style={styles.sub_title_text}>
          지하철 실시간 위치 정보 (정왕역)
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.sub_container}>
            <Text style={styles.sub_direction_text}>왕십리행</Text>
            <Text style={styles.sub_direction_text}>인천행</Text>
          </View>
          <View style={styles.sub_container}>
            <Text style={styles.sub_location_text}>사리포구(4전역)</Text>
            <Text style={styles.sub_location_text}>중앙(5전역)</Text>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.info_container}>
      <Text style={styles.sub_title_text}>
        지하철 실시간 위치 정보 (정왕역)
      </Text>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.sub_container}>
          <Text style={styles.sub_direction_text}>당고개행</Text>
          <Text style={styles.sub_direction_text}>오이도행</Text>
        </View>
        <View style={styles.sub_container}>
          <Text style={styles.sub_location_text}>정보없음</Text>
          <Text style={styles.sub_location_text}>안산(전전역)</Text>
        </View>
      </View>
    </View>
  );
}
