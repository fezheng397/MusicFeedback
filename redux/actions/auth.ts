import { AUTH_SET_USER, AUTH_SET_LOADING } from 'redux/types/auth';
import { Action } from 'redux/actions/types';
import { User } from 'types/16bars';

export type SetUserAction = Action<typeof AUTH_SET_USER, { user: User }>;

export type SetLoadingAction = Action<
  typeof AUTH_SET_LOADING,
  { loading: boolean }
>;

export type Actions = SetUserAction | SetLoadingAction;

export function setLoading(loading: boolean): SetLoadingAction {
  return {
    type: AUTH_SET_LOADING,
    loading,
  };
}

export function setUser(user: User): SetUserAction {
  return {
    type: AUTH_SET_USER,
    user,
  };
}
