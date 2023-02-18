import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* fetchPosts () {
    try {
       const response = yield axios.get(`/api/posts`);
       console.log('response.data is', response.data)
    yield put ({
        type: "SET_POSTS", 
        payload: response.data});
    } catch (error) {
        console.log('couldnot fetch posts', error);
    }
}
function* fetchPostsSaga(){
    yield takeLatest('FETCH_POSTS',fetchPosts )
}

export default fetchPostsSaga;