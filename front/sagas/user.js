import { all, fork, call, put, takeLatest } from 'redux-saga/effects'
import {LOG_IN_FAILRUE, LOG_IN_SUCCESS, LOG_IN_REQUEST, SIGNUP_REQUEST,SIGNUP_FAILRUE, SIGNUP_SUCCESS} from '../reducers/user'

import axios from 'axios'

axios.defaults.baseURL="http://localhost:3000"

function logInAPI() {
	return axios.post('/api/user/login', body) //다른 리소스 간에 자원공유, course orgin
}

function signupAPI(){
	return axios.post('/api/user/join', body)
}


//get 바디 x
//post  body 가능
function* logIn(action) {
	console.log('login_saga')
	console.log('action.data not json: ', action.data)
	try {
		//const result = yield call(logInAPI, action.data)
		yield put({
			type: LOG_IN_SUCCESS,	//
			data: action.data
		})	
	} catch (error) {
		yield put({
			type: LOG_IN_FAILRUE,
			error: error.response.data
		})
	}
}

function* signup(action) {
	console.log('login_saga')
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



export default function* userSaga() {
	yield all([
		fork(watchLogIn),
		fork(watchSignup)
	])
}