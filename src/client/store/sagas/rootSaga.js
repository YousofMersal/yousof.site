import { all } from 'redux-saga/effects'
import { watchFetchUser } from './fetchUser'

export default function* rootSaga() {
  yield all([watchFetchUser()])
}
