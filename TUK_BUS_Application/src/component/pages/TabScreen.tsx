import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {ReactElement} from 'react';
import {
  TimeTableNavigationProp,
  TabParamList,
} from '../../../types/navigation/types';
import {Button} from 'react-native';
import {GoHome} from '../UI/molecule/Go_Home';
import {GoUniversity} from '../UI/molecule/Go_University';
import {TabBarIcon} from '../UI/atom/barIcon';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabScreen(): ReactElement {
  const navigation = useNavigation<TimeTableNavigationProp>();
  return (
    <Tab.Navigator
      initialRouteName="등교"
      screenOptions={({route}) => ({
        tabBarLabel: route.name,
        tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
        tabBarLabelPosition: 'below-icon',
      })}>
      <Tab.Screen
        name="등교"
        component={GoUniversity}
        options={{
          title: '실시간 등교',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('TimeTable', {status: '등교'})}
              title="전체시간표"
            />
          ),
        }}
      />
      <Tab.Screen
        name="하교"
        component={GoHome}
        options={{
          title: '실시간 하교',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('TimeTable', {status: '하교'})}
              title="전체시간표"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
