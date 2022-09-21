import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../../style/stylesheet.css';

const EndofService = () => {
  return (
    <View>
      <View style={styles.endofSerivce_container}>
        <Text style={styles.endofService_font}>운행종료</Text>
      </View>
    </View>
  );
};

export default EndofService;
