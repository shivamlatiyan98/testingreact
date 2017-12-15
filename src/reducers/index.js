import { combineReducers } from 'redux';

import savereducer from '../reducers/savecomment_reducer'


const rootReducer = combineReducers({
  comments: savereducer



});

export default rootReducer;
