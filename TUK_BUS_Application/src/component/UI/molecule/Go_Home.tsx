import React, {ReactElement} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function GoHome(): ReactElement {
  return (
    <View style={styles.text}>
      <Text style={styles.text}>하교 페이지</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
