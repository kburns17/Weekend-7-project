import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';
import { takeEvery, call, put} from 'redux-saga/effects';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';



//----------SAGAS------------
const sagaMiddleware = createSagaMiddleWare();



function* rootSaga() {
    console.log('rootSaga loaded');
    yield takeEvery('GET_REFLECTIONS', getReflectionsSaga);
}

// GET reflections saga, requests data from SQL DB
function* getReflectionsSaga(action){
    try { console.log('in getReflectionsSaga');
        const reflections = yield call(axios.get, '/api/reflections');
        yield put({
            type: 'REFLECTIONS_LIST',
            payload: reflections.data
        })    
    } catch(error) {
        console.log('error in GET Saga', error);
    }
} //end GET saga


//----------REDUCERS---------

const reflectionReducer = (state=[], action) => {
    switch (action.type) {
        case 'REFLECTIONS_LIST':
            return action.payload;
        default:
            return state;
    }
} 




// redux Store
const store = createStore(
    combineReducers({
        reflectionReducer
    }),
    applyMiddleware(sagaMiddleware),
    applyMiddleware(logger)
)


sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store ={store}>< App /></Provider>, document.getElementById('root'));
registerServiceWorker();
