import path from "path";
import { City, Reader } from "@maxmind/geoip2-node";

const getDB = () =>
  Reader.open(path.normalize(`${__dirname}../../../GeoLiteDB.mmdb`));

export const getCityInfo = async (ipAddress: string): Promise<City> => {
  const reader = await getDB();
  return reader.city(ipAddress);
};
