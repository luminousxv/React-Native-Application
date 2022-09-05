export type RootStackParamList = {
  TabScreen: undefined;
};

export type TabParamList = {
  등교: undefined;
  하교: undefined;
  전체시간표: undefined;
  타는위치: undefined;
};

export type TimeInfo = {
  time: string;
  remain: number;
  arrival: string;
};

export type flatlistParams = {
  item: TimeInfo;
};
