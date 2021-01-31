import { combineReducers } from 'redux';
import player from 'redux/reducers/player';

const getReducers = () => {
  return combineReducers({
    player,
  });
};

export default getReducers;
