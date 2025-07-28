export interface ICharacterLocation {
  name: string;
  url: string;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ICharacterLocation;
  location: ICharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ICharactersResponseInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface ICharactersResponse {
  info: ICharactersResponseInfo;
  results: ICharacter[];
}
