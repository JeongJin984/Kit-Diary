import { all, fork, call, put, takeLatest } from 'redux-saga/effects'
import {LOG_IN_FAILRUE, LOG_, LOG_IN_REQUEST} from '../reducers/user'

import axios from 'axios'

axios.defaults.baseURL="http://localhost:3000"

function logInAPI() {
	return axios.post('/api/user/login', body) //다른 리소스 간에 자원공유, course orgin
}
//get 바디 x
//post  body 가능
function* logIn(action) {
	console.log('saga')
	console.log('action.data : ', action.data)
	try {
		// const result = yield call(logInAPI, action.data)
		// // 궁금한게 로그인을 하면은 로그인 확인 db에서 이거는 백에서?
		// // id, password 백
		yield put({
			type: 'LOG_IN_SUCCESS',
			data: {email:'asdf@asdf', password: 'asdf'}
		})	
	} catch (error) {
		yield put({
			type: 'LOG_IN_FAILURE',
			error: error.response.data
		})
	}
}

function* watchLogIn() {
	yield takeLatest(LOG_IN_REQUEST, logIn)
}

export default function* rootSaga() {
	yield all([
		fork(watchLogIn)
	])
}