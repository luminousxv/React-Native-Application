import React, {ReactElement} from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../../../style/stylesheet.css';
import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  'Sending `onAnimatedValueUpdate` with no listeners registered.',
]);

export function ShuttleLocation_Univ(): ReactElement {
  return (
    <View style={styles.location_container}>
      <View style={styles.map_conatiner}>
        <Image
          source={require('../../../assets/image/goUniv.png')}
          resizeMode="stretch"
          style={styles.image}
        />
      </View>
      <View style={styles.map_info_container}>
        <Text style={styles.map_info_text}>
          정왕역 1번출구 나와서 우측으로 100m (정왕역 A주차장)
        </Text>
      </View>
    </View>
  );
}

export function ShuttleLocation_Univ_Night(): ReactElement {
  return (
    <View style={styles.location_container}>
      <View style={styles.map_conatiner}>
        <Image
          source={require('../../../assets/image/goUniv_night.png')}
          resizeMode="stretch"
          style={styles.image}
        />
      </View>
      <View style={styles.map_info_container}>
        <Text style={styles.map_info_text}>
          파리바게트 건너편(하교 도착 장소)
        </Text>
      </View>
    </View>
  );
}

export function ShuttleLocation_Home(): ReactElement {
  return (
    <View style={styles.location_container}>
      <View style={styles.map_conatiner}>
        <Image
          source={require('../../../assets/image/goHome.png')}
          resizeMode="stretch"
          style={styles.image}
        />
      </View>
      <View style={styles.map_info_container}>
        <Text style={styles.map_info_text}>시흥비즈니스센터 앞</Text>
      </View>
    </View>
  );
}
