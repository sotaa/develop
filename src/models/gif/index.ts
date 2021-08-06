export interface IGif {
  type: string;
  id: string;
  url: string;
  title: string;
  images: {
    original: {
      height: string;
      width: string;
      size: string;
      url: string;
      mp4_size: string;
      mp4: string;
    };
    downsized_small: {
      height: string;
      width: string;
      mp4_size: string;
      mp4: string;
    };
  };
}

export interface IGifsResponse {
  data: IGif[];
  pagination: {
    offset: number;
    count: number;
    total_count: number;
  };
  meta: {
    status: number;
    msg: string;
    response_id: string;
  };
}
