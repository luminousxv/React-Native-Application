import axios, {AxiosResponse} from 'axios';
import {
  futureArrivalTime,
  futureRouteSearch,
} from '../../types/api/kakaoapiType';
import {auth} from '../../.env/auth';
import {FutureRouteSearchURL, setFutureRouteSearchParams} from './url';

export function getArrivalTime(
  time: string,
  direction: string,
): Promise<AxiosResponse<futureArrivalTime>> {
  const params: futureRouteSearch = setFutureRouteSearchParams(time, direction);

  const baseurl: string = FutureRouteSearchURL(params);

  return axios.get(baseurl, {headers: {Authorization: `KakaoAK ${auth.rest}`}});
}
