import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../style/stylesheet.css';

const Loading = () => {
  return (
    <View style={styles.loading}>
      <Text>Loading...</Text>
    </View>
  );
};

export default Loading;
