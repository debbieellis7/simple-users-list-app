import { all } from 'redux-saga/effects'
import { watchGetUsersRequest, watchCreateUserRequest, watchDeleteUserRequest } from './users';

export default function* rootSaga() {
  yield all([
    watchGetUsersRequest(),
    watchCreateUserRequest(),
    watchDeleteUserRequest()
  ]);
}