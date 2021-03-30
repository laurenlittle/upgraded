import { combineReducers } from 'redux';
import jobsReducer from './jobs';

const rootReducer = combineReducers({
  jobsState: jobsReducer,
});

export default rootReducer;