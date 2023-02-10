
import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* updatePosts(action) {
    const editedPosts = action.payload;
    yield axios({
      method: 'PUT',
      url: `/api/posts/`,
      data: editedPosts // 👈 will look something like:
              // {
              //   id: 3,
              //   github_name: 'matthew-dangerzone-black'
              // }
    })
    // We've successfully updated a row in the students
    // table! Now we need to run our fetchStudents Saga
    // function to bring the studentList reducer back
    // in sync with our students table:
    yield put({
      type: 'FETCH_POSTS'
    })
  
  }
  function* updatePostsSaga(){
    yield takeLatest('SAGA/POST_TO_EDIT',updatePosts)
}

export default updatePostsSaga;