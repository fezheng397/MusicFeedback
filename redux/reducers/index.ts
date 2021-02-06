import { combineReducers } from 'redux';
import player from 'redux/reducers/player';
import auth from 'redux/reducers/auth';

const getReducers = () => {
  return combineReducers({
    auth,
    player,
  });
};

export default getReducers;
