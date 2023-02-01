import { call, put } from 'redux-saga/effects';
import UserApi from '../../api/UserApi';
import {
  doAddSignupFailed,
  doAddSignupSuccess,
  doGetSigninSuccess,
  doMessageNotification,
  doPushSignoutFailed,
  doPushSignoutSuccess,
} from '../Action/UsrAction';

function* handleUsrSignin(action) {
  const { payload } = action;
  try {
    const result = yield call(UserApi.signin, payload);
    if (Object.keys(result).length === 0) {
      yield put(
        doMessageNotification({
          message: 'user or password not match, try again',
        })
      );
    } else {
      localStorage.setItem('token', result.data.token);
      // const profile = yield call(UserApi.profile);
      // localStorage.setItem('token', JSON.stringify(profile.data));
      yield put(doGetSigninSuccess(result.data.token));
    }
  } catch (error) {
    yield put(
      doMessageNotification({
        message: 'user or password not match, try again',
      })
    );
  }
}

function* handleUsrSignout(action) {
  const { payload } = action;
  try {
    sessionStorage.clear();
    yield put(doPushSignoutSuccess(payload));
  } catch (error) {
    yield put(doPushSignoutFailed(error));
  }
}

function* handleUsrSignup(action) {
  const { payload } = action;
  try {
    const result = yield call(UserApi.signup, payload);
    yield put(doAddSignupSuccess(result.data));
  } catch (error) {
    yield put(doAddSignupFailed(error));
  }
}

export { handleUsrSignin, handleUsrSignout, handleUsrSignup };
