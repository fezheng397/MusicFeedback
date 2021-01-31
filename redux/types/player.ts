export type SongObject = {};

export type State = {
  currentlyPlaying?: SongObject;
  isPlaying?: boolean;
  progress?: number;
  volume?: number;
};

export const STATE_KEY = 'player';

export const PLAYER_PLAY = 'player/play';

export const PLAYER_UPDATE_PLAY = 'player/update_play';

export const PLAYER_UPDATE_PROGRESS = 'player/update_progress';

export const PLAYER_UPDATE_SONG = 'player/update_song';

export const PLAYER_UPDATE_VOLUME = 'player/update_volume';

export const PLAYER_UPDATE_PLAYBACK_STATE = 'player/update_playback_state';
