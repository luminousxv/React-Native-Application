import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {styles} from '../atom/stylesheet.css';

export function ShuttleLocation(): ReactElement {
  return (
    <View style={styles.location_container}>
      <View style={styles.location_title_container}>
        <Text style={styles.location_title_text}>등교 (17:30 이전)</Text>
      </View>
      <WebView
        originWhitelist={['*']}
        style={styles.map_conatiner}
        javaScriptEnabled={true}
        source={{
          uri: 'http://tuk-bus.epizy.com/goUniv.html',
        }}
      />
      <View style={styles.map_info_container}>
        <Text style={styles.map_info_text}>
          정왕역 1번출구 나와서 우측으로 100m (정왕역 A주차장)
        </Text>
      </View>
      <View style={styles.location_title_container}>
        <Text style={styles.location_title_text}>등교 (17:30 이후)</Text>
      </View>
      <WebView
        originWhitelist={['*']}
        javaScriptEnabled={true}
        style={styles.map_conatiner}
        source={{
          uri: 'http://tuk-bus.epizy.com/goUniv_night.html',
        }}
      />
      <View style={styles.map_info_container}>
        <Text style={styles.map_info_text}>파리바게트 건너편</Text>
      </View>
      <View style={styles.location_title_container}>
        <Text style={styles.location_title_text}>하교</Text>
      </View>
      <WebView
        originWhitelist={['*']}
        nestedScrollEnabled
        style={styles.map_conatiner}
        source={{
          uri: 'http://tuk-bus.epizy.com/goHome.html',
        }}
      />
      <View style={styles.last_map_info_container}>
        <Text style={styles.map_info_text}>시흥비즈니스센터 앞</Text>
      </View>
    </View>
  );
}
