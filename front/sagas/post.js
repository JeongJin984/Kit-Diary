import { all, fork, call, put, takeLatest } from 'redux-saga/effects'
import {
  POST_SAVE_REQUEST,
  POST_SAVE_SUCCESS,
  POST_SAVE_FAILRUE,

  POST_REMOVE_REQUEST,
  POST_REMOVE_SUCCESS,
  POST_REMOVE_FAILRUE,
  
  POST_LIST_REQUEST,
  POST_LIST_FAILRUE,
	POST_LIST_SUCCESS,
	
	POST_SEARCH_REQUEST,
	POST_SEARCH_SUCCESS,
	POST_SEARCH_FAILRUE,

} from '../reducers/post'

import axios from 'axios'

axios.defaults.baseURL="http://localhost:3000"


function Post_listAPi() {
	return axios.get('/api/post') 
}

function Add_postAPi() {
	return axios.post('/api/post/add',body) 
}
function Del_postAPi() {
	return axios.post('/api/post/del',body) 
}

function Search_postAPi() {
	return axios.post('/api/post/search',body) 
}




function* postlist(action) {
	console.log('postlist_saga')
	console.log('action.data not json: ', action.data)
	try {
		//const result = yield call(Post_listAPi)
		yield put({
			type: POST_LIST_SUCCESS,	//
			data: action.data
		})	
	} catch (error) {
		yield put({
			type: POST_LIST_FAILRUE,
			error: error.response.data
		})
	}
}

function* addpost(action) {
	console.log('addpost_saga')
	console.log('action.data not json: ', action.data)
	try {
		//const result = yield call(Add_postAPi, action.data)
		yield put({
			type: POST_SAVE_SUCCESS,	//
			data: null
		})	
	} catch (error) {
		yield put({
			type: POST_SAVE_FAILRUE,
			error: error.response.data
		})
	}
}

function* delpost(action) {
	console.log('delpost_saga')
	console.log('action.data not json: ', action.data)
	try {
		//const result = yield call(Del_postAPi, action.data)
		yield put({
			type: POST_REMOVE_SUCCESS,	//
			data: null
		})	
	} catch (error) {
		yield put({
			type: POST_REMOVE_FAILRUE,
			error: error.response.data
		})
	}
}

function* searchpost(action) {
	console.log('serch_saga')
	console.log('action.data not json: ', action.data)
	try {
		//const result = yield call(Search_postAPi, action.data)
		yield put({
			type: POST_SEARCH_SUCCESS,
			data: result.data
		})	
	} catch (error) {
		yield put({
			type: POST_SEARCH_FAILRUE,
			error: error.response.data
		})
	}
}


function* watchAdd() {
	yield takeLatest(POST_SAVE_REQUEST, addpost)
}

function* watchDel(){
	yield takeLatest(POST_REMOVE_REQUEST, delpost)
}

function* watchList(){
  yield takeLatest(POST_LIST_REQUEST, postlist)
}
function* watchsearch(){
	yield takeLatest(POST_SEARCH_REQUEST, searchpost)
}


export default function* postSaga() {
	yield all([
		fork(watchAdd),
    fork(watchDel),
		fork(watchList),
		fork(watchsearch)
	])
}