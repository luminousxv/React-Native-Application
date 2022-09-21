import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {styles} from '../../../style/stylesheet.css';
import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  'Sending `onAnimatedValueUpdate` with no listeners registered.',
]);

export function ShuttleLocation_Univ(): ReactElement {
  return (
    <View style={styles.location_container}>
      <View style={styles.map_conatiner}>
        <WebView
          originWhitelist={['*']}
          source={{
            uri: 'http://tuk-bus.epizy.com/goUniv.html',
          }}
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
        <WebView
          originWhitelist={['*']}
          style={styles.map_conatiner}
          source={{
            uri: 'http://tuk-bus.epizy.com/goUniv_night.html',
          }}
        />
      </View>
      <View style={styles.map_info_container}>
        <Text style={styles.map_info_text}>파리바게트 건너편</Text>
      </View>
    </View>
  );
}

export function ShuttleLocation_Home(): ReactElement {
  return (
    <View style={styles.location_container}>
      <View style={styles.map_conatiner}>
        <WebView
          originWhitelist={['*']}
          style={styles.map_conatiner}
          source={{
            uri: 'http://tuk-bus.epizy.com/goHome.html',
          }}
        />
      </View>
      <View style={styles.map_info_container}>
        <Text style={styles.map_info_text}>시흥비즈니스센터 앞</Text>
      </View>
    </View>
  );
}
