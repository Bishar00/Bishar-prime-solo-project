import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { DELETE_POST, deletePostSuccess, deletePostFail } from './actions';

function* deletePostSaga(action) {
    try {
        yield call(axios.delete, `/api/posts/${action.payload}`);
        yield put(deletePostSuccess());
    } catch (error) {
        yield put(deletePostFail(error));
    }
}

export default function* deletePostsSaga() {
    yield takeEvery(DELETE_POST, deletePostSaga);
}

