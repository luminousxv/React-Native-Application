import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  TabScreen: undefined;
  TimeTable: {
    status: string;
  };
};

export type TabParamList = {
  등교: undefined;
  하교: undefined;
};

type Tab_Props = NativeStackScreenProps<RootStackParamList, 'TabScreen'>;
type TimeTable_Props = NativeStackScreenProps<RootStackParamList, 'TimeTable'>;

type TabNavigationProp = Tab_Props['navigation'];
export type TimeTableNavigationProp = TimeTable_Props['navigation'];

export type TimeTableRouteProp = TimeTable_Props['route'];

export type Tab_Screen_Props = {
  navigation: TabNavigationProp;
};

export type Time_Table_Props = {
  navigation: TimeTableNavigationProp;
  route: TimeTableRouteProp;
};

export type TimeInfo = {
  time: string;
  remain: number;
  arrival: string;
};
