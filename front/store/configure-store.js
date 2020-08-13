import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'
import { createStore, compose, applyMiddleware } from 'redux'
import reducer from '../reducers/index'
import rootSaga from '../sagas/index'
import { composeWithDevTools } from 'redux-devtools-extension'

const configureStore = () => {
const sagaMiddleware = createSagaMiddleware();

	const middlewares = [sagaMiddleware]
	const enhancer = composeWithDevTools(applyMiddleware(...middlewares))
	const store = createStore(reducer, enhancer)
	store.sagaTask = sagaMiddleware.run(rootSaga)
	return store
}
const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development'}) 

export default wrapper