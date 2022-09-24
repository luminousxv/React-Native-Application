import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {AllScheduleTabParamList} from '../../../types/navigation/types';
import TimeTable from '../UI/molecule/TimeTable';

const Tab = createMaterialTopTabNavigator<AllScheduleTabParamList>();

const AllSchedule = () => {
  return (
    <Tab.Navigator initialRouteName="평일">
      <Tab.Screen
        name="평일"
        component={TimeTable}
        initialParams={{day: 'weekday'}}
      />
      <Tab.Screen
        name="토요일"
        component={TimeTable}
        initialParams={{day: 'saturday'}}
      />
      <Tab.Screen
        name="일요일"
        component={TimeTable}
        initialParams={{day: 'sunday'}}
      />
    </Tab.Navigator>
  );
};

export default AllSchedule;
