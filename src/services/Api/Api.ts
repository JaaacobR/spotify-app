import axios, { AxiosInstance } from 'axios';
import {
  ArtistObject,
  GetUserTopTracksResponse,
  GetUserTopArtistsResponse,
  TrackObject,
  AlbumObject,
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

  async getAlbum(albumId: string): Promise<AlbumObject | undefined> {
    try {
      console.log(this.axios.getUri());
      const res = await this.axios.get<AlbumObject>(
        this.buildUrl(`albums/${albumId}`),
      );
      return res.data;
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
