import {
  PLAYER_PLAY,
  PLAYER_UPDATE_PLAY,
  PLAYER_UPDATE_SONG,
  PLAYER_UPDATE_VOLUME,
  PLAYER_UPDATE_PLAYBACK_STATE,
  PLAYER_UPDATE_PROGRESS,
} from 'redux/types/player';
import { Action } from 'redux/actions/types';
import { SongObject } from 'redux/types/player';

export type PlayAction = Action<typeof PLAYER_PLAY, {}>;

export type UpdatePlayAction = Action<
  typeof PLAYER_UPDATE_PLAY,
  { isPlaying: boolean }
>;

export type UpdateProgressAction = Action<
  typeof PLAYER_UPDATE_PROGRESS,
  { progress: number }
>;

export type UpdateSongAction = Action<
  typeof PLAYER_UPDATE_SONG,
  { song: SongObject }
>;

export type UpdateVolumeAction = Action<
  typeof PLAYER_UPDATE_VOLUME,
  { volume: number }
>;

export type UpdatePlaybackStateAction = Action<
  typeof PLAYER_UPDATE_PLAYBACK_STATE,
  {
    deviceId: string;
    isPlaying: boolean;
    progress: number;
    song: SongObject;
    volume: number;
  }
>;

export type Actions =
  | PlayAction
  | UpdatePlayAction
  | UpdateSongAction
  | UpdateVolumeAction
  | UpdatePlaybackStateAction
  | UpdateProgressAction;

export function play(): PlayAction {
  return {
    type: PLAYER_PLAY,
  };
}

export function updatePlay(isPlaying: boolean): UpdatePlayAction {
  return {
    type: PLAYER_UPDATE_PLAY,
    isPlaying,
  };
}

export function updateProgress(progress: number): UpdateProgressAction {
  return {
    type: PLAYER_UPDATE_PROGRESS,
    progress,
  };
}

export function updateSong(song: SongObject): UpdateSongAction {
  return {
    type: PLAYER_UPDATE_SONG,
    song,
  };
}

export function updateVolume(volume: number): UpdateVolumeAction {
  return {
    type: PLAYER_UPDATE_VOLUME,
    volume,
  };
}

export function updatePlaybackState(
  deviceId: string,
  isPlaying: boolean,
  song: SongObject,
  progress: number,
  volume: number
): UpdatePlaybackStateAction {
  return {
    type: PLAYER_UPDATE_PLAYBACK_STATE,
    deviceId,
    isPlaying,
    song,
    progress,
    volume,
  };
}
