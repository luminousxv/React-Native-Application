import React, {ReactElement} from 'react';
import {View} from 'react-native';
import {DataTable} from 'react-native-paper';
import {styles} from '../atom/stylesheet.css';

export default function TimeTable(): ReactElement {
  return (
    <View style={styles.timetable_container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>시간</DataTable.Title>
          <DataTable.Title>시간</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>23:00</DataTable.Cell>
          <DataTable.Cell>23:20</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
}
