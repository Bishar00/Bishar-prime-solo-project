
import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* fetchPostsToEdit(action) {
  const idOfPostToEdit = action.payload;
  
  const response = yield axios({
    method: 'GET',
    url: `/api/posts/${idOfPostToEdit}`
  })
  yield put({
    type: 'SET_POST_TO_EDIT',
    payload: response.data
  })
}





function* updatePosts(action) {
  const editedPost = action.payload;
  yield axios({
    method: 'PUT',
    url: `/api/posts/${editedPost.id}`,
    data: {
      title: editedPost.title,
      description: editedPost.description
    }
  });
  yield put({
    type: 'FETCH_POSTS'
  });
}
  function* updatePostsSaga(){
    yield takeLatest('SAGA/FETCH_POST_TO_EDIT',fetchPostsToEdit)
    yield takeLatest('SAGA/UPDATE_POST',updatePosts)
}

export default updatePostsSaga;