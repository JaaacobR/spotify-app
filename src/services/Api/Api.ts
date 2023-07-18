import axios, { AxiosInstance } from 'axios';
import {
  SimplifiedArtistObject,
  GetUserTopTracksResponse,
  GetUserTopArtistsResponse,
  TrackObject,
  AlbumObject,
  ArtistObject,
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

  async getUserTopArtist(): Promise<SimplifiedArtistObject[] | undefined> {
    try {
      const res = await this.axios.get<GetUserTopArtistsResponse>(
        this.buildUrl(`me/top/artists?limit=8`),
      );
      return res.data.items;
    } catch (ex) {
      throw new Error('err: ' + ex);
    }
  }

  async startPlayback(uri: string, track_number: number): Promise<void> {
    try {
      const device = await this.axios.get(this.buildUrl('me/player/devices'));
      console.log(device.data);
      await this.axios.put(
        this.buildUrl(
          'me/player/play?device_id=e84c3af7990ad526f31dfabdda45938b2f32902a',
        ),
        {
          context_uri: uri,
          offset: {
            position: track_number - 1,
          },
        },
      );
    } catch (ex) {
      console.log('err: ' + ex);
    }
  }

  async getArtist(id: string): Promise<ArtistObject | undefined> {
    try {
      const res = await this.axios.get<ArtistObject>(
        this.buildUrl(`artists/${id}`),
      );
      return res.data;
    } catch (ex) {}
  }

  private buildUrl(path: string): string {
    return `/${path}`;
  }
}

export default ApiService;
