import { combineReducers, Reducer } from 'redux';
import { StateType } from 'typesafe-actions';
import { UserReducerState } from '../actions/user/types';

import user from './user';

export interface IRootState {
  user: UserReducerState;
}

const appReducer = combineReducers({
  user,
});

const rootReducer: Reducer<any, any> = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;

export type AppState = StateType<typeof rootReducer>;
