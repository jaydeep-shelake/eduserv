import {call, put,takeLatest} from "redux-saga/effects"
import { signOut, signinError, signinRequst, singinSucess } from "../slices/authSlice"
import { signup,signin, signout } from "@/services/auth"
import { SIGNIN_SUCESS, SIGNUP_SUCESS, SIGN_OUT } from "./types"

function* signupWithEmail(action){
    try{
        yield put(signinRequst())
        const user = yield call(signup,action.email,action.password)
        yield put(singinSucess(user))
    }
    catch(e){
      yield put(signinError(e?.code))
    }

}

function* signinWithEmail(action){
   try{
    yield put(signinRequst())
    const user = yield call(signin,action.email,action.password)
    yield put(singinSucess(user))
   }
   catch(e){
    yield put(signinError(e?.code))
   }
}

function * signOutSaga(){
  try{
    yield call(signout)
    yield put(signOut())
  }
  catch(e){
    yield console.log("ERROR",e)
    yield put(signinError(e?.code))
  }
}

export function* watchAuthSaga(){
 yield takeLatest(SIGNUP_SUCESS,signupWithEmail)
 yield takeLatest(SIGNIN_SUCESS,signinWithEmail)
 yield takeLatest(SIGN_OUT,signOutSaga)
}