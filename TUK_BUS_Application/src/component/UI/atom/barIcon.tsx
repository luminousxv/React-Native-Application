import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

export const TabBarIcon = (focused: boolean, name: string): JSX.Element => {
  let iconName: string, iconSize: number;

  iconName = name === '등교' ? 'school' : 'house';

  iconSize = focused ? 35 : 25;
  return <Icon name={iconName} size={iconSize} />;
};
