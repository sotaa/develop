import axios from "axios";
import { IGifsResponse } from "../models";

import { IApiService, IApiUrls } from "./api-service.interface";
import { apiUrls } from "./urls";

export class ApiService implements IApiService {
  constructor(private urls: IApiUrls) {}

  // Fetch trending gifs
  fetchGifs(limit: number, offset: number): Promise<IGifsResponse> {
    return axios
      .get<IGifsResponse>(
        this.urls.trending + `&limit=${limit}&offset=${offset}`
      )
      .then((res) => res.data);
  }

  // Search Gifs by string statement
  searchGifs(q: string, limit: number, offset: number): Promise<IGifsResponse> {
    return axios
      .get<IGifsResponse>(
        this.urls.search + `&q=${q}&limit=${limit}&offset=${offset}`
      )
      .then((res) => res.data);
  }
}

export const getApiService = () => new ApiService(apiUrls);

// export const getAbsoluteUrl = (name: string, code: string) => {
//   return `${IMAGE_SOURCE}/${code}/256/${name}`;
// };
