import { useEffect } from 'react';

import * as WebBrowser from 'expo-web-browser';

import type { UseSpotifyOAuth2 } from './types';

import {
  ResponseType,
  makeRedirectUri,
  useAuthRequest,
} from 'expo-auth-session';
import { OAUTH_CLIENT_ID } from '@env';

import useApi from './useApi';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

const useSpotifyOAuth2: UseSpotifyOAuth2 = () => {
  const api = useApi();
  const [_request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: OAUTH_CLIENT_ID,
      scopes: ['user-read-email', 'playlist-modify-public'],
      usePKCE: false,
      redirectUri: makeRedirectUri({
        scheme: 'spotify-app',
      }),
    },
    discovery,
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params;
      api.setAccesToken(access_token);
    }
  }, [response]);

  return promptAsync;
};
export default useSpotifyOAuth2;
