import {push} from 'connected-react-router'
import { all,call,fork, put, takeEvery } from 'redux-saga/effects'
import {loginSuccess, loginFail} from './actions'
import axios from "axios";

function fetchData(data) {
    return axios({
      method: "POST",
      url: "http://localhost:4000/auth/login/",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data:JSON.stringify({
          email: data.email,
          password: data.password
      })
    }).then(res => console.log(res.message));
  }
 



const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* handleFetch(payload) {
    try{
        yield delay(1000)
        const res = yield call(fetchData, payload.data)

        if (res.error) {
            yield put(loginFail(res.error))
        } else {
            yield put(loginSuccess(res))
            yield put(push('/login'))
        }
    } catch (err) {
        yield put(loginFail(err))
    }
}

function* watchFetchRequest () {
    yield takeEvery("CALL_LOGIN", handleFetch)
}

function* loginSaga() {
    yield all([fork(watchFetchRequest)])
  }
  
  export default loginSaga
  