import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';
import {Time_Table_Props} from '../../../../types/navigation/types';

export default function TimeTable({route}: Time_Table_Props): ReactElement {
  const {status} = route.params;

  if (status === '등교') {
    return (
      <View>
        <Text> 등교 전체 시간표</Text>
      </View>
    );
  }
  return (
    <View>
      <Text> 하교 전체 시간표</Text>
    </View>
  );
}
