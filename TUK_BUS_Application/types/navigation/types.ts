import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

export type RootStackParamList = {
  TabScreen: undefined;
};

export type TabParamList = {
  등교: undefined;
  하교: undefined;
  전체시간표: undefined;
  타는위치: undefined;
};

export type MaterialTabParamList = {
  등교: undefined;
  '등교(17:30~)': undefined;
  하교: undefined;
};

export type AllScheduleTabParamList = {
  평일: {day: string};
  토요일: {day: string};
  일요일: {day: string};
};

export type Props = MaterialTopTabScreenProps<AllScheduleTabParamList>;

export type TimeInfo = {
  time: string;
  remain: number;
  arrival: string;
};

export type flatlistParams = {
  item: TimeInfo;
};

export type subwayParams = {
  data: SubwayInfo[];
};

export type SubwayInfo = {
  bstatnNm: string;
  arvlMsg2: string;
  arvlMsg3: string;
};

export type all_schedule = {
  station: string;
  university: string;
};

export type timedata = {
  hour: string;
  min: string;
};
