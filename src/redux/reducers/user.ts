import { Reducer } from 'redux';
import {
  RegisterActionTypes,
  UserActions,
  UserReducerState,
} from '../actions/user/types';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from './index';

export const initialState: UserReducerState = {
  loading: false,
  userData: undefined,
  error: undefined,
};

export const userReducer: Reducer<
  UserReducerState,
  UserActions | { type: typeof HYDRATE; payload: AppState }
> = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case RegisterActionTypes.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case RegisterActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        test: 2,
        loading: false,
      };

    case RegisterActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload?.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
