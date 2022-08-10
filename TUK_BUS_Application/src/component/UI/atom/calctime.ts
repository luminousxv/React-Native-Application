import moment from 'moment';

export const CalcRemainTime = (time: string): number => {
  const realTime: string = moment().format('HH:mm');
  const remainHour: number =
    parseInt(time.slice(0, 2), 10) - parseInt(realTime.slice(0, 2), 10);
  let remainMinutes: number =
    parseInt(time.slice(3, 5), 10) - parseInt(realTime.slice(3, 5), 10);
  const remain = remainHour * 60 + remainMinutes;
  return remain;
};

export const CalcArrivalTime = (time: string, remain: number): string => {
  const remain_minutes = remain / 60;
  let arrivalTime_minute =
    parseInt(time.slice(3, 5), 10) + Math.round(remain_minutes);
  let arrivalTime_Hour = parseInt(time.slice(0, 2), 10);
  if (arrivalTime_minute > 59) {
    arrivalTime_Hour += 1;
    arrivalTime_minute -= 60;
    if (arrivalTime_minute === 0) {
      return (
        arrivalTime_Hour.toString() + ':' + arrivalTime_minute.toString() + '0'
      );
    }
  }
  if (arrivalTime_minute < 10) {
    return (
      arrivalTime_Hour.toString() + ':' + '0' + arrivalTime_minute.toString()
    );
  }
  return arrivalTime_Hour.toString() + ':' + arrivalTime_minute.toString();
};
