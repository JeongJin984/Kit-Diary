import { all, fork, call, put, takeLatest } from 'redux-saga/effects'
import commentSaga from './comment';
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
	
	POST_REVISION_REQUEST,
	POST_REVISION_SUCCESS,
	POST_REVISION_FAILRUE,


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
	return axios.delete(`/api/post/:${body.id}`); 
}

function Search_postAPi() {
	return axios.post('/api/post/search',body) 
}

function Revision_postApi(){
	return axios.put(`/api/post/:${body.id}`, body)
}


function* postlist(action) {
	console.log('postlist_saga')
	console.log('action.data not json: ', action.data)
	try {
		//const result = yield call(Post_listAPi)
		yield put({
			type: POST_LIST_SUCCESS,	//
			data: //result.data
				[  
					{
						id: 0, //primery key
						userid: 0, //foreigin key
			
						star : 5,
						date: 0,
			
						classification : 'Major',
						professor: '고재필',
						class: '기초프로그래밍',
						title: '좋아용',
						contents:'너무 fasdfsd좋아용afsdfasdfdssfsafsfdsffsdafsdfdsfsdfadfasdfafsadfdafsa',
			
						like: 3,
						dislike: 1,
					},
					{
						id: 1, //primery key
						userid: 3, //foreigin key
			
						star : 4,
						date: 0,
			
						classification : 'Major',
						professor: 'gsdfdasfgg',
						class: '기초프로그래밍',
						title: '좋아용',
						contents:'너무 dsfasf좋아용afsdfsfsafsfdsffsdafsdfdsfsdfadfasdfafsadfdafsa',
			
						like: 3,
						dislike: 1,
					},
					{
						id: 2, //primery key
						userid: 0, //foreigin key
			
						star : 2,
						date: 0,
			
						classification : 'General',
						professor: '나나나',
						class: '기초프로sdfasd그래밍',
						title: '좋아asfs용',
						contents:'너무 좋아sfasdf용afsdfsfsafsfdsffsdafsdfdsfsdfadfasdfafsadfdafsa',
			
						like: 3,
						dislike: 1,
					},
					{
						id: 3, //primery key
						userid: 0, //foreigin key
			
						star : 5,
						date: 0,
			
						classification : '전공',
						professor: 'ggg',
						class: '기초프로그래밍',
						title: '좋아용',
						contents:'너무 좋아용',
			
						like: 3,
						dislike: 1,
					},
					{
						id: 4, //primery key
						userid: 0, //foreigin key
			
						star : 4,
						date: 0,
			
						classification : '전공',
						professor: 'ggg',
						class: '기초프로그래밍',
						title: '좋아용',
						contents:'너무 좋아용afsdfsfsafsfdsffsdafsdfdsfsdfadfasdfafsadfdafsa',
			
						like: 3,
						dislike: 1,
					},
					{
						id: 5, //primery key
						userid: 0, //foreigin key
			
						star : 5,
						date: 0,
			
						classification : '전공',
						professor: 'ggg',
						class: '기초프로그래밍',
						title: '좋아용',
						contents:'너무 좋아용afsdfsfsafsfdsffsdafsdfdsfsdfadfasdfafsadfdafsa',
			
						like: 3,
						dislike: 1,
					},
					{
						id: 6, //primery key
						userid: 0, //foreigin key
			
						star : 2,
						date: 0,
			
						classification : '전공',
						professor: 'ggg',
						class: '기초프로그래밍',
						title: '좋아용',
						contents:'너무 좋아용afsdfsfsafsfdsffsdafsdfdsfsdfadfasdfafsadfdafsa',
			
						like: 3,
						dislike: 1,
					},
					{
						id: 7, //primery key
						userid: 0, //foreigin key
			
						star : 1,
						date: 0,
			
						classification : '전공',
						professor: 'ggg',
						class: '기초프로그래밍',
						title: '좋아용',
						contents:'너무 좋아용afsdfsfasdfafsadfdafsa',
			
						like: 3,
						dislike: 1,
					},
					{
						id: 8, //primery key
						userid: 0, //foreigin key
			
						star : 4,
		
						date: 0,
			
						classification : '전공',
						professor: 'ggg',
						class: '기초프로그래밍',
						title: '좋아용',
						contents:'너무 좋아용afsdfsfsafsfdsffsdafsdfdsfsdfadfasdfafsadfdafsa',
			
						like: 3,
						dislike: 1,
					},
					{
						id: 9, //primery key
						userid: 0, //foreigin key
			
						star : 0,
						date: 0,
			
						classification : '전공',
						professor: 'ggg',
						class: '기초프로그래밍',
						title: '좋아용',
						contents:'너무 좋아용afsdfsfsafsfdsffsdafsdfdsfsdfadfasdfafsadfdafsa',
			
						like: 3,
						dislike: 1,
					},
				]
		})	
	} catch (error) {
		yield put({
			type: POST_LIST_FAILRUE,
			error: error.response.data
		})
	}
}

function* savepost(action) {
	console.log('addpost_saga')
	console.log('action.data not json: ', action.data) //{post object}
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
		//const result = yield call(Del_postAPi, action.data) //ex {id:3}
		yield put({
			type: POST_REMOVE_SUCCESS,	
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
		//const result = yield call(Search_postAPi, action.data) //{classification: "MSC"}
		yield put({
			type: POST_SEARCH_SUCCESS,
			data: //result.data
			[{
				id: 9, //primery key
				userid: 0, //foreigin key
	
				star : 5,
				date: 0,
	
				classification : '전공',
				professor: 'ggg',
				class: '기초프로그래밍',
				title: '좋아용',
				contents:'너무 좋아용afsdfsfsafsfdsffsdafsdfdsfsdfadfasdfafsadfdafsa',
	
				like: 3,
				dislike: 1,
			},
			{
				id: 9, //primery key
				userid: 0, //foreigin key
	
				star : 5,
				date: 0,
	
				classification : '전공',
				professor: 'ggg',
				class: '기초프로그래밍',
				title: '좋아용',
				contents:'너무 좋아용afsdfsfsafsfdsffsdafsdfdsfsdfadfasdfafsadfdafsa',
	
				like: 3,
				dislike: 1,
			},{
				id: 9, //primery key
				userid: 0, //foreigin key
	
				star : 5,
				date: 0,
	
				classification : '전공',
				professor: 'ggg',
				class: '기초프로그래밍',
				title: '좋아용',
				contents:'너무 좋아용afsdfsfsafsfdsffsdafsdfdsfsdfadfasdfafsadfdafsa',
	
				like: 3,
				dislike: 1,
			},
		],
		})	
	} catch (error) {
		yield put({
			type: POST_SEARCH_FAILRUE,
			error: error.response.data
		})
	}
}

function* revisionpost(action) {
	console.log('revision_saga')
	console.log('action.data not json: ', action.data)
	try {
	//	const result = yield call(Revision_postApi, action.data) //{post object};
		yield put({
			type: POST_REVISION_SUCCESS,
			data: null,
		})	
	} catch (error) {
		yield put({
			type: POST_REVISION_FAILRUE,
			error: error.response.data
		})
	}
}


function* watchAdd() {
	yield takeLatest(POST_SAVE_REQUEST, savepost)
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

function* watchrevision(){
	yield takeLatest(POST_REVISION_REQUEST, revisionpost)
}


export default function* postSaga() {
	yield all([
		fork(watchAdd),
    fork(watchDel),
		fork(watchList),
		fork(watchsearch),
		fork(watchrevision),
	])
}