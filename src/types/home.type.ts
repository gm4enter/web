export interface ArtistType {
  birthday: string;
  created_at: string;
  debut_date: string;
  description1: string;
  description2: string;
  description3: string;
  full_name: string;
  groups: {id: string, name: string}[];
  id: string;
  image: string;
  index: number;
  nickname: string;
  thumbnail: string;
  updated_at: string;
  url: string[];
}

export interface HomeType {
  _id: string;
  current_page: number;
  limit: number;
  data: ArtistType[];
  next_page: string;
  prev_page: string;
  success: boolean;
  total: number;
  total_page: number;
}

