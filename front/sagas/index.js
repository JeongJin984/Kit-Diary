import { combineReducers } from 'redux';
import userSaga  from './user';
import postSaga  from './post';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([userSaga(),postSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootSaga;