import { ActionType } from 'typesafe-actions';
import * as userActions from './user';

export type User = {
  email: string;
  name: string;
  id: number;
};

export type RegisterErrorType = any;
export type UserReducerState = {
  loading: boolean;
  userData?: User;
  error?: RegisterErrorType; // TODO specify error type with backend
};

// TODO check with beckend
export type RegisterResponseType = any;

export enum RegisterActionTypes {
  REGISTER_REQUEST = '@@user/REGISTER_REQUEST',
  REGISTER_SUCCESS = '@@user/REGISTER_SUCCESS',
  REGISTER_FAILURE = '@@user/REGISTER_FAILURE',
}

export type UserActions = ActionType<typeof userActions>;
