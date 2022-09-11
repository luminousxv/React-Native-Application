export type liveSchedule = {
  message: bus_schedule[];
  Subway_schedule: subway_schedule[];
};

export type liveSchedule2 = {
  Bus_schedule: bus_schedule[];
  Subway_schedule: subway_schedule[];
};

type bus_schedule = {
  seq: string;
  hour: number;
  min: number;
  destination: string;
};

type subway_schedule = {
  statnNm: string;
  barv1Dt: string;
  bstatnNm: string;
  arvlMsg2: string;
  arvlMsg3: string;
};

export type allSchedule = {
  success: boolean;
  message: schedule[];
};

export type schedule = {
  seq: string;
  hour: number;
  min: number;
  destination: string;
};
