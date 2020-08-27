import {
  CO_SAVE_REQUEST,
  CO_SAVE_SUCCESS,
  CO_SAVE_FAILRUE,

  CO_REMOVE_REQUEST,
  CO_REMOVE_SUCCESS,
  CO_REMOVE_FAILRUE,


  CO_LIST_REQUEST,
  CO_LIST_SUCCESS,
  CO_LIST_FAILRUE,

  CO_REVISION_REQUEST,
  CO_REVISION_SUCCESS,
  CO_REVISION_FAILRUE,
} from '../reducers/comment'

import { all, fork, call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'


function Co_listAPi() {
	return axios.get(`/api/post/:${body.postid}`) 
}

function Add_coAPi() {
	return axios.post('/api/post/add', body) 
}
function Del_coAPi() {
	return axios.delete(`/api/post/:${body.id}`); 
}
function Revision_coApi(){
	return axios.put(`/api/post/:${body.id}`, body)
}



function* saveCo(action) {
  console.log('Cosave_saga')
  console.log('action.data in saveSaga: ', action.data) //{Co object}

	try {
		//const result = yield call(Add_coAPi,action.data)
		yield put({
			type: CO_SAVE_SUCCESS,	//
      data: null,
		})	
	} catch (error) {
		yield put({
			type: CO_SAVE_FAILRUE,
			error: error.response.data
		})
	}
}

function* listCo(action) {
	console.log('Colist_saga')
	console.log('postid : ' + action.data);
	try {
		//const result = yield call(Co_listAPi)
		yield put({
			type: CO_LIST_SUCCESS,	//
      data: //result.data
      [
        {
          id:0,
          userid:0,
          postid:0,
          
          contents:'좋은 리뷰입니다.',
          like:2,
          dislike:1,
        },
        {
          id:1,
          userid:2,
          postid:0,
          
          contents:'좋은 리뷰아닙니다.',
          like:2,
          dislike:1,
        },
      ]
		})	
	} catch (error) {
		yield put({
			type: CO_LIST_FAILRUE,
			error: error.response.data
		})
	}
}

function* delCo(action) {
	console.log('delco_saga')
	console.log('action.data in deletesaga: ', action.data)
	try {
		//const result = yield call(Del_coAPi, action.data) //ex {id:3, postid:2}
		yield put({
			type: CO_REMOVE_SUCCESS,	
			data: null
		})	
	} catch (error) {
		yield put({
			type: CO_REMOVE_FAILRUE,
			error: error.response.data
		})
	}
}


function* revisionCo(action) {
	console.log('revisionCo_saga')
	console.log('action.data in revision saga ', action.data)
	try {
	//	const result = yield call(Revision_coApi, action.data) //{post object};
		yield put({
			type: CO_REVISION_SUCCESS,
			data: null,
		})	
	} catch (error) {
		yield put({
			type: CO_REVISION_FAILRUE,
			error: error.response.data
		})
	}
}




function* watchAdd() {
	yield takeLatest(CO_SAVE_REQUEST, saveCo)
}

function* watchDel(){
	yield takeLatest(POST_REMOVE_REQUEST, delCo)
}

function* watchList(){
  yield takeLatest(CO_LIST_REQUEST, listCo)
}

function* watchrevision(){
	yield takeLatest(CO_REVISION_REQUEST, revisionCo)
}




export default function* commentSaga() {
	yield all([
		fork(watchAdd),
    fork(watchDel),
		fork(watchList),
		fork(watchrevision),
	])
}