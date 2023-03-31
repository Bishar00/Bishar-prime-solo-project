import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchProfile() {
  try {
    const response = yield axios.get('/api/profile');
    yield put({
      type: 'FETCH_PROFILE',
      payload: response.data,
    });
  } catch (error) {
    console.log('could not fetch profile');
  }
}

function* setProfile(action) {
  try {
    const response = yield axios.post('/api/profile', action.payload);
    yield put({
      type: 'SET_PROFILE',
      payload: response.data,
    });
  } catch (error) {
    console.log('could not set profile');
  }
}

function* uploadProfileImage(action) {
  try {
    const formData = new FormData();
    formData.append('file', action.payload.imageFile);
    formData.append('brand_name', action.payload.brand_name);
    formData.append('logo_upload', action.payload.logo_upload);
    formData.append('entity_vision', action.payload.entity_vision);

    const response = yield axios.post('/api/profile/upload', formData);
    yield put({
      type: 'UPLOAD_PROFILE_IMAGE_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    console.log('could not upload profile image');
  }
}

function* profileSaga() {
  yield takeLatest('FETCH_PROFILE', fetchProfile);
  yield takeLatest('SET_PROFILE', setProfile);
  yield takeLatest('UPLOAD_PROFILE_IMAGE', uploadProfileImage);
}

export default profileSaga;