import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUser from '../Constants/UserConstant'
import { handleAddRegion, handleDelRegion, handleEditRegion, handleGetOneRegion, handleGetRegion } from "./RegionMidle";
import * as ActionTypeUsr from '../Constants/UsrConstant'
import { handleUsrSignin,handleUsrSignout,handleUsrSignup } from "./UsrMidle";
function* watchAll(){
    yield all([
        
        takeEvery(ActionTypeUsr.GET_SIGNIN_REQUEST,handleUsrSignin),
        takeEvery(ActionTypeUsr.POST_SIGNOUT_REQUEST,handleUsrSignout),
        takeEvery(ActionTypeUsr.ADD_SIGNUP_REQUEST,handleUsrSignup),
        takeEvery(ActionTypeUser.GET_USER_REQUEST,handleGetRegion),
        takeEvery(ActionTypeUser.GETONE_USER_REQUEST,handleGetOneRegion),
        takeEvery(ActionTypeUser.ADD_USER_REQUEST,handleAddRegion),
        takeEvery(ActionTypeUser.DEL_USER_REQUEST,handleDelRegion),
        takeEvery(ActionTypeUser.EDIT_USER_REQUEST,handleEditRegion),
    ])
}

export default watchAll