import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {styles} from '../atom/stylesheet.css';

export function ShuttleLocation(): ReactElement {
  return (
    <View style={styles.location_container}>
      <View style={styles.location_title_container}>
        <Text style={styles.location_title_text}>등교</Text>
      </View>
      <WebView
        originWhitelist={['*']}
        javaScriptEnabled={true}
        source={{
          uri: 'http://127.0.0.1:5500/TUK_BUS_Application/src/component/UI/atom/goUniv.html',
        }}
      />
      <View style={styles.location_title_container}>
        <Text style={styles.location_title_text}>하교</Text>
      </View>
      <WebView
        originWhitelist={['*']}
        javaScriptEnabled={true}
        source={{
          uri: 'http://127.0.0.1:5500/TUK_BUS_Application/src/component/UI/atom/goHome.html',
        }}
      />
    </View>
  );
}
