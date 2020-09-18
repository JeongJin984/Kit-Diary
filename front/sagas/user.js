import { all, fork, call, put, takeLatest } from 'redux-saga/effects'
import {LOG_IN_FAILRUE, LOG_IN_SUCCESS, LOG_IN_REQUEST, SIGNUP_REQUEST,SIGNUP_FAILRUE, SIGNUP_SUCCESSUSER_REQUEST
	,USER_SUCCESS
	,USER_FAILRUE
	,USER_REQUEST
	} from '../reducers/user'

import axios from 'axios'

axios.defaults.baseURL="http://localhost:4000"

function logInAPI() {
	return axios.post('/api/user/login', body) //다른 리소스 간에 자원공유, course orgin
}

function signupAPI(){
	return axios.post('/api/user/join', body)
}

function userAPI(){
	return axios.get(`/api/user/:${body}`);
}


function* userinfo(action) {
	console.log('user_saga')
	console.log('action.data not json: ', action.data.userid)
	try {
		//const result = yield call(userAPI, action.data.userid)
		yield put({
			type: USER_SUCCESS,	//
			data: //result.data
				{
					id: '2', //primary key
					email: 'asdf@asdf',
					password: 'asdf',
					stdnum: 123123,
					major:  'asdf',
					nickname: 'asdfasdf',
			}
		})	
	} catch (error) {
		yield put({
			type: USER_FAILRUE,
			error: error.response.data
		})
	}
}



function* logIn(action) {
	console.log('login_saga')
	console.log('action.data not json: ', action.data)
	try {
		const result = yield call(logInAPI, action.data)
		yield put({
			type: LOG_IN_SUCCESS,	//
			data: //result.data
				{
					id: '2', //primary key
					email: 'asdf@asdf',
					password: 'asdf',
					stdnum: 123123,
					major:  'asdf',
					nickname: 'asdfasdf',
			}
		})	
	} catch (error) {
		yield put({
			type: LOG_IN_FAILRUE,
			error: error.response.data
		})
	}
}

function* signup(action) {
	console.log('signup_saga')
	console.log('action.data not json: ', action.data)
	try {
		// const result = yield call(signupAPI, action.data)
		yield put({
			type: SIGNUP_SUCCESS,
			data: null
		})	
	} catch (error) {
		yield put({
			type: SIGNUP_FAILRUE,
			error: error.response.data
		})
	}
}

function* watchLogIn() {
	yield takeLatest(LOG_IN_REQUEST, logIn)
}

function* watchSignup(){
	yield takeLatest(SIGNUP_REQUEST, signup)
}

function* watchUser(){
	yield takeLatest(USER_REQUEST, userinfo)
}

export default function* userSaga() {
	yield all([
		fork(watchLogIn),
		fork(watchSignup),
		fork(watchUser),
	])
}