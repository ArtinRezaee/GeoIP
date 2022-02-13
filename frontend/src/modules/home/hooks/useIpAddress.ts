import axios, { AxiosResponse } from 'axios';
import { apiPaths } from './../../../apiPaths';
import { environment } from './../../../environment';

type UseIpAddressResults = {
  getLocationInfo: (ipAddress: string) => Promise<AxiosResponse<any>>;
};

export const useIpAddress = (type: 'web' | 'db'): UseIpAddressResults => {
  const getLocationInfo = (ipAddress: string): Promise<AxiosResponse<any>> => {
    const endpoint =
      type === 'web' ? apiPaths.getUserInfoWeb : apiPaths.getUserInfoDB;
    return axios.get(`${environment.SERVER_BASE_URL}${endpoint}`, {
      params: { ipAddress: ipAddress },
    });
  };

  return {
    getLocationInfo: getLocationInfo,
  };
};
