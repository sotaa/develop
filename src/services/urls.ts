import { ENV } from "../env";
import { IApiUrls } from "./api-service.interface";

export const HOST = ENV.API_URL;
export const APIKEY = ENV.API_KEY;

export const apiUrls: IApiUrls = {
  trending: HOST.concat(`/trending?api_key=${APIKEY}`),
  search: HOST.concat(`/search?api_key=${APIKEY}`),
};
