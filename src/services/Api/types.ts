interface PagingObject<T> {
  href: string;
  items: T[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

interface ExternalUrlObject {
  spotify: string;
}

interface ImageObject {
  height: number | null;
  url: string;
  width: number | null;
}

interface ArtistObject {
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  name: string;
  type: 'artist';
  uri: string;
}

interface AlbumObject {
  album_group?: string;
  album_type: string;
  artists: ArtistObject[];
  available_markets: string[];
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  images: ImageObject[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: 'album';
  uri: string;
}

export interface TrackObject {
  album: AlbumObject;
  artists: ArtistObject[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: any;
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: 'track';
  uri: string;
}

export interface GetUserTopArtistsResponse {
  items: ArtistObject[];
  total: number;
  limit: number;
  offset: number;
  previous: string | null;
  next: string | null;
}

export interface GetUserTopTracksResponse {
  items: TrackObject[];
  total: number;
  limit: number;
  offset: number;
  previous: string | null;
  next: string | null;
}
