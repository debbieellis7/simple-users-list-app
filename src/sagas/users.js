import { takeEvery, takeLatest, call, take, put } from 'redux-saga/effects';
import {
  GET_USERS_REQUEST,
  CREATE_USER_REQUEST,
  DELETE_USER_REQUEST,
  getUsersSuccess,
  usersError
} from '../actions/usersActions';
import * as api from '../api/users';

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    yield put(getUsersSuccess(result.data.data));
  } catch(e) {
    yield put(usersError({
      errors: 'An error occurred when trying to get the users'
    }));
  }
}

function* createUser(action) {
  try {
    yield call(api.createUser, { firstName: action.payload.firstName, lastName: action.payload.lastName });
    yield call(getUsers);
  } catch(e) {
    yield put(usersError({
      errors: 'An error occurred when trying to create the user'
    }));
  }
}

export function* watchGetUsersRequest() {
  yield takeEvery(GET_USERS_REQUEST, getUsers);
}

export function* watchCreateUserRequest() {
  yield takeLatest(CREATE_USER_REQUEST, createUser);
}

function* deleteUser({userId}) {
  try {
    yield call(api.deleteUser, userId);
    yield call(getUsers);
  } catch(e) {
    yield put(usersError({
      errors: 'An error occurred when trying to delete the user'
    }));
  }
}

export function* watchDeleteUserRequest() {
  while(true) {
    const action = yield take(DELETE_USER_REQUEST);
    yield call(deleteUser, { userId: action.payload })
  }
}