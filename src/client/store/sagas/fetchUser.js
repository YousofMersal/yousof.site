import { call, put, takeLatest } from 'redux-saga/effects'
import { isloggedin } from '../../api/UserAPI'

function* fetchUser() {
  try {
    const loginYield = yield call(isloggedin)
    yield put({ type: 'CHECK_USER_ASYNC', loginYield })
  } catch (err) {
    yield put({ type: 'CHECK_USER_ERROR', err })
  }
}

export function* watchFetchUser() {
  yield takeLatest('CHECK_USER', fetchUser)
}
