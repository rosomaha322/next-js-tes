import { all, fork } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { watchRegisterStart } from './register';

export default function* rootSaga(): SagaIterator {
  yield all([fork(watchRegisterStart)]);
}
