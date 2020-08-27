import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects'
import userSaga  from './user';
import postSaga  from './post';
import commentSaga from './comment';


export function* rootSaga() {
  yield all([fork(userSaga), fork(commentSaga), fork(postSaga)]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootSaga;