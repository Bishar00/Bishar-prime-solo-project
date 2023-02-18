// import axios from 'axios';
// import {put, takeLatest} from 'redux-saga/effects';

// function* fetchContent () {
//     try {
//        const response = yield axios.get(`/api/content`);
//     yield put ({
//         type: "SET_CONTENT", 
//         payload: response.data});
//     } catch (error) {
//         console.log('couldnot fetch conent', error);
//     }
// }
// function* fetchContentSaga(){
//     yield takeLatest('FETCH_CONTENT',fetchContent )
// }

// export default fetchContentSaga;