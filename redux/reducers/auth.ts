import { Actions } from 'redux/actions/auth';
import { AUTH_SET_USER, AUTH_SET_LOADING, State } from 'redux/types/auth';

const initialState: State = {
  loading: false,
  user: null,
};

export default function reducer(
  state: State = initialState,
  action: Actions | null | undefined
) {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case AUTH_SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case AUTH_SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
}
