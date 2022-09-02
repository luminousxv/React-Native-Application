import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  DrawerScreen: undefined;
  TabScreen: undefined;
  TimeTable: {
    status: string;
  };
  ShuttleLocation: undefined;
};

export type TabParamList = {
  등교: undefined;
  하교: undefined;
  전체시간표: undefined;
};

export type DrawerParamList = {
  홈: undefined;
  타는위치: undefined;
};

type TimeTable_Props = NativeStackScreenProps<RootStackParamList, 'TimeTable'>;

export type TimeTableNavigationProp = TimeTable_Props['navigation'];

export type TimeTableRouteProp = TimeTable_Props['route'];

export type Time_Table_Props = {
  navigation: TimeTableNavigationProp;
  route: TimeTableRouteProp;
};

export type TimeInfo = {
  time: string;
  remain: number;
  arrival: string;
};

export type flatlistParams = {
  item: TimeInfo;
};
