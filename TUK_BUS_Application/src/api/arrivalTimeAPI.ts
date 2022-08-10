import axios, {AxiosResponse} from 'axios';
import moment from 'moment';
import {futureArrivalTime} from '../../types/api/kakaoapiType';
import {auth} from './auth';

export function getArrivalTime(
  time: string,
  direction: string,
): Promise<AxiosResponse<futureArrivalTime>> {
  const currentDate =
    moment().format('YYYYMMDD') + time.slice(0, 2) + time.slice(3, 5);

  const params_goUniversity = {
    origin: '126.74163070227455,37.351855271129445',
    destination: '126.7325489990025,37.33957210855494',
    departure_time: currentDate,
  };

  const params_goHome = {
    origin: '126.7325489990025,37.33957210855494',
    destination: '126.74190162742117,37.35101790800419',
    departure_time: currentDate,
  };

  const params = direction === '등교' ? params_goUniversity : params_goHome;

  const baseurl = `https://apis-navi.kakaomobility.com/v1/future/directions?origin=${params.origin}&destination=${params.destination}&departure_time=${currentDate}`;

  return axios.get(baseurl, {headers: {Authorization: `KakaoAK ${auth.rest}`}});
}
