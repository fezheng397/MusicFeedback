import { User } from 'types/16bars';

export type State = {
  loading: boolean;
  user: User;
};

export const STATE_KEY = 'auth';

export const AUTH_SET_USER = 'auth/set_user';

export const AUTH_SET_LOADING = 'auth/set_loading';
