import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addToPosts(action) {
console.log(action.payload);
const newTitle = action.payload.title
const newDescription = action.payload.description
const response = yield axios({
    method: 'POST',
    url: '/api/posts',
    data: {
        title: newTitle,
        description: newDescription
    }
})
yield put({
    type: 'FETCH_POSTS',
    // payload: response.data
})

}
function* addToPostsSaga(){
    yield takeLatest('SAGA/ADD_TO_POSTS',addToPosts)
}




export default addToPostsSaga;