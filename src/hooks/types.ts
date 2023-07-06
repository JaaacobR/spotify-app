import type {
  AuthRequestPromptOptions,
  AuthSessionResult,
} from 'expo-auth-session';

export type UseSpotifyOAuth2 = () => (
  options?: AuthRequestPromptOptions | undefined,
) => Promise<AuthSessionResult>;
