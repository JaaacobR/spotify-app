import axios, { AxiosInstance } from 'axios';
import {
  ArtistObject,
  GetUserTopTracksResponse,
  GetUserTopArtistsResponse,
  TrackObject,
} from './types';

class ApiService {
  accessToken?: string;

  private axios: AxiosInstance;

  private restUrl: string;

  private baseUrl = 'https://api.spotify.com/v1/';

  constructor() {
    this.restUrl = '';
    this.axios = axios.create({
      baseURL: this.baseUrl,
    });
  }

  setAccesToken(accessToken: string) {
    this.accessToken = accessToken;
    this.axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${accessToken}`;
  }

  async getAlbum(albumId: string): Promise<void> {
    try {
      console.log(this.axios.getUri());
      const res = await this.axios.get(this.buildUrl(`albums/${albumId}`));
      console.log(JSON.stringify(res.data.tracks.items[0].name));
    } catch (ex) {
      console.log(ex);
    }
  }

  async getUserTop(): Promise<TrackObject[] | undefined> {
    try {
      const res = await this.axios.get<GetUserTopTracksResponse>(
        this.buildUrl(`me/top/tracks?limit=6`),
      );
      return res.data.items;
    } catch (ex) {
      throw new Error('err: ' + ex);
    }
  }

  async getUserTopArtist(): Promise<ArtistObject[] | undefined> {
    try {
      const res = await this.axios.get<GetUserTopArtistsResponse>(
        this.buildUrl(`me/top/artists?limit=8`),
      );
      return res.data.items;
    } catch (ex) {
      throw new Error('err: ' + ex);
    }
  }

  private buildUrl(path: string): string {
    return `/${path}`;
  }
}

export default ApiService;
