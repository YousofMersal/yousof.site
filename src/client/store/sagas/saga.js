import { call, put, takeEvery } from 'redux-saga/effects'
import { isloggedin } from '../../api/UserAPI'

export function* fetchUser() {
  try {
    const loginyield = yield call(isloggedin)
    yield put({ type: 'USER_LOGIN_ASYNC', loginyield })
  } catch (err) {
    yield put({ type: 'USER_LOG_ERROR', err })
  }
}

export function* watchFetchUser() {
  yield takeEvery('USER_LOGIN', fetchUser)
}
