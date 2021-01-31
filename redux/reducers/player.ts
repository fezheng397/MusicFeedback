import { Actions } from 'redux/actions/player';
import {
  PLAYER_PLAY,
  PLAYER_UPDATE_PLAY,
  PLAYER_UPDATE_PROGRESS,
  PLAYER_UPDATE_SONG,
  PLAYER_UPDATE_VOLUME,
  PLAYER_UPDATE_PLAYBACK_STATE,
  State,
} from 'redux/types/player';

const initialState: State = {
  currentlyPlaying: null,
  isPlaying: false,
  progress: 0,
  volume: 0,
};

export default function reducer(
  state: State = initialState,
  action: Actions | null | undefined
) {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case PLAYER_PLAY:
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };

    case PLAYER_UPDATE_PLAY:
      return {
        ...state,
        isPlaying: action.isPlaying,
      };
    case PLAYER_UPDATE_PROGRESS:
      return {
        ...state,
        progress: action.progress,
      };
    case PLAYER_UPDATE_SONG:
      return {
        ...state,
        currentlyPlaying: action.song,
      };
    case PLAYER_UPDATE_VOLUME:
      return {
        ...state,
        volume: action.volume,
      };
    case PLAYER_UPDATE_PLAYBACK_STATE:
      return {
        ...state,
        currentlyPlaying: action.song,
        isPlaying: action.isPlaying,
        progress: action.progress,
        volume: action.volume,
      };
    default:
      return state;
  }
}
