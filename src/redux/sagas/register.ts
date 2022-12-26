import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { registerUser } from '../../services/user';
import { registerActions } from '../actions/user/user';
import {
  RegisterActionTypes,
  RegisterResponseType,
  // eslint-disable-next-line no-unused-vars
  RegisterErrorType,
} from '../actions/user/types';

export function* watchRegisterStart(): SagaIterator {
  yield takeEvery(RegisterActionTypes.REGISTER_REQUEST, registerRequest);
}

export function* registerRequest(
  action: ReturnType<typeof registerActions.request>
): SagaIterator {
  try {
    const response: RegisterResponseType = yield call(registerUser, {
      ...action,
    });

    yield put(registerActions.success(response));
  } catch (error: RegisterResponseType) {
    yield put(
      registerActions.failure({
        error: { message: 'OOPS something went wrong' },
      })
    );
    const {
      payload: { setErrors, setStatus },
    } = action;
    yield call(setErrors, error?.errors || {});
    yield call(setStatus, 'error');
  }
}
