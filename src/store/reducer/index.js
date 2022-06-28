import {combineReducers} from 'redux';

import movie from './movie';
import transaction from './transaction';
import user from './user';
import booking from './booking';
export default combineReducers({
  movie,
  transaction,
  user,
  booking,
});
