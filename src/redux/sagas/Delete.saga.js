import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';



function* deletePost(action) {
    const deletePost = action.payload;
    yield axios({
      method: 'DELETE',
      url: `/api/posts/${deletePost}`
    });
    yield put({
      type: 'DELETE_POST',
      payload: { id: deletePost }
    });
  }
    function* deletePostsSaga(){
      yield takeLatest('SAGA/DELETE_POST',deletePost)
      
  }

  export default deletePostsSaga;