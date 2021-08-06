import { IGifsResponse } from "../models";

export interface IApiService {
  fetchGifs(limit: number, offset: number): Promise<IGifsResponse>;
  searchGifs(q: string, limit: number, offset: number): Promise<IGifsResponse>;
}

export interface IApiUrls {
  trending: string;
  search: string;
}
