import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* fetchProfile () {
    try {
       const response = yield axios.get('/api/profile');
    yield put ({
        type: "FETCH_PROFILE", 
        payload: response.data});
    } catch (error) {
        console.log('couldnot fetchprofile');
    }
}
function* setProfile () {
    try {
       const response = yield axios.post('/api/profile');
    yield put ({
        type: "SET_PROFILE", 
        payload: response.data});
    } catch (error) {
        console.log('couldnot fetchprofile');
    }
}
function* profileSaga(){
    yield takeLatest('FETCH_PROFILE',fetchProfile )
    yield takeLatest('SET_PROFILE',setProfile )
}



export default profileSaga;