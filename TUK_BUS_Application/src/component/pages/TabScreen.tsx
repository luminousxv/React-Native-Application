import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {ReactElement} from 'react';
import {TabParamList} from '../../../types/navigation/types';
import {GoHome} from '../UI/molecule/Go_Home';
import {GoUniversity} from '../UI/molecule/Go_University';
import TimeTable from '../UI/molecule/TimeTable';

const Tab = createMaterialTopTabNavigator<TabParamList>();

export default function TabScreen(): ReactElement {
  return (
    <Tab.Navigator
      initialRouteName="등교"
      screenOptions={({route}) => ({
        tabBarLabel: route.name,
      })}>
      <Tab.Screen name="등교" component={GoUniversity} />
      <Tab.Screen name="하교" component={GoHome} />
      <Tab.Screen name="전체시간표" component={TimeTable} />
    </Tab.Navigator>
  );
}
