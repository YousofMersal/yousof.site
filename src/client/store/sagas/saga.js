import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { loginCheck } from '../../api/UserAPI'

function* fetchUser(action) {
  try {
    const user = yield call(loginCheck, action)
  } catch (err) {}
}
