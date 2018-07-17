import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {
    Provider
} from 'react-redux';
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';
import {
    takeEvery,
    call,
    put
} from 'redux-saga/effects';
import axios from 'axios';



//----------SAGAS------------
const sagaMiddleware = createSagaMiddleWare();


//runs first before 
function* rootSaga() {
    console.log('rootSaga loaded');
    yield takeEvery('GET_REFLECTIONS', getReflectionsSaga);
    yield takeEvery('ADD_REFLECTION', addReflectionSaga);
    yield takeEvery('DELETE_REFLECTION', deleteReflectionSaga);
    yield takeEvery('BOOKMARK', bookmarkReflectionSaga);
    yield takeEvery('GET_BOOKMARKED', getBookmarkedSaga)
    
}



// GET reflections saga, requests data from SQL DB
function* getReflectionsSaga(action) {
    try {
        const reflections = yield call(axios.get, '/api/reflections');
        yield put({
            type: 'SET_REFLECTIONS',
            payload: reflections.data
        })
    } catch (error) {
        console.log('error in GET Saga', error);
    }
} //end GET saga


//ADD reflection to DB
function* addReflectionSaga(action) {
    try {
        yield call(axios.post, '/api/reflections', action.payload)
    } catch (error) {
        console.log('error ADD', error);
    }
}

// DELETE reflection from DB
function* deleteReflectionSaga(action) {
    try {
        yield call(axios.delete, '/api/reflections/' + action.payload.id)
    } catch (error) {
        console.log('error DELETE');
    }
    yield put({
        type: 'GET_REFLECTIONS'
    })
}

// BOOKMARK reflection in DB
function* bookmarkReflectionSaga(action) {
    try {
        yield call(axios.put, '/api/reflections/' + action.payload.id)
    } catch (error) {
        console.log('error bookmark');
    }
    yield put({
        type: 'GET_REFLECTIONS'
    })
}

function* getBookmarkedSaga(action) {
    try {
        const bookmarks = yield call(axios.get, '/api/reflections/bookmarks');
        yield put({
            type: 'SET_BOOKMARKS',
            payload: bookmarks.data
        })
     } catch(error){
        console.log('error GET bookmarks', error)
    }
} //end GET BOOKMARKS saga



//----------REDUCERS---------

const reflectionReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_REFLECTIONS':
            return action.payload;
        default:
            return state;
    }
}

const bookmarkReducer = (state=[], action)=>{
    switch (action.type){
        case 'SET_BOOKMARKS':
            return action.payload;
        default:
                return state;
    }
}

// const addReflectionReducer = (state=[], action) => {
//     switch (action.type) {
//         case 'ADD_REFLECTION':
//             return [...state, action.payload]
//         default:
//             return state;
//     }
// }




// redux Store
const store = createStore(
    combineReducers({
        reflectionReducer,
        bookmarkReducer
    }),
    applyMiddleware(sagaMiddleware, logger),
)


sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </ Provider>, document.getElementById('root'));
registerServiceWorker();