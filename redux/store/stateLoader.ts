import { GlobalState } from 'redux/types/store';

export class StateLoader {
  loadState() {
    console.log('Loading state from local storage', localStorage);
    try {
      let serializedState = localStorage.getItem('headlineState');

      if (serializedState === null) {
        return this.initializeState();
      }
      let deserializedState: GlobalState = JSON.parse(serializedState);
      deserializedState.player.isPlaying = false;

      return deserializedState;
    } catch (err) {
      return this.initializeState();
    }
  }

  saveState(state: GlobalState) {
    try {
      let serializedState = JSON.stringify(state);
      localStorage.setItem('headlineState', serializedState);
    } catch (err) {}
  }

  initializeState() {
    return {
      //state object
    };
  }
}
