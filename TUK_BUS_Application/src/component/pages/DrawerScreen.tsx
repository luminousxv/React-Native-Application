import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {ReactElement} from 'react';
import {DrawerParamList} from '../../../types/navigation/types';
import TabScreen from './TabScreen';
import {ShuttleLocation} from '../UI/molecule/Shuttle_Location';

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerScreen(): ReactElement {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="홈"
        component={TabScreen}
        options={{title: '실시간 시간표'}}
      />
      <Drawer.Screen name="타는위치" component={ShuttleLocation} />
    </Drawer.Navigator>
  );
}
