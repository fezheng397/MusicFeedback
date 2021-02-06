import { useSelector } from 'react-redux';
import { GlobalState } from 'redux/types/store';
import { State as AuthState } from 'redux/types/auth';
import { STATE_KEY as AUTH_STATE_KEY } from 'redux/types/auth';
import { User } from 'types/16bars/User';

export function useUser(): { user: User; loading: boolean } {
  const auth = useSelector<GlobalState, AuthState>(
    (state) => state[AUTH_STATE_KEY]
  );

  return { user: auth.user, loading: auth.loading };
}
