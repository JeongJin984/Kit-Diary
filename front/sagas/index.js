import { all, fork, call, put, takeLatest } from 'redux-saga/effects'

import axios from 'axios'

axios.defaults.baseURL="http://localhost:355"

function logInAPI() {
	return axios.post('/api/user/login')
}

function* logIn() {
	console.log('link')
	try {
		const result = yield call(logInAPI)
		yield put({
			type: 'LOG_IN_SUCCESS',
			data: result.data
		})	
	} catch (error) {
		yield put({
			type: 'LOG_IN_FAILURE',
			error: error.response.data
		})
	}
	
}

function* watchLogIn() {
	yield takeLatest('LOG_IN_REQUEST', logIn)
}

export default function* rootSaga() {
	yield all([
		fork(watchLogIn)
	])
}