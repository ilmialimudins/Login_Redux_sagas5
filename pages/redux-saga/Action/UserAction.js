import * as ActionType from '../Constants/UserConstant'

export const GetUserRequest = () => ({
    type: ActionType.GET_USER_REQUEST

})

export const GetUserSuccess = (payload) =>({
    type: ActionType.GET_USER_SUCCESS,
    payload
})

export const GetUserFailed = (payload) => ({
    type:ActionType.GET_USER_FAILED,
    payload
})

export const DelUserRequest = (payload) =>({
    type:ActionType.DEL_USER_REQUEST,
    payload
})

export const DelUserSuccess = (payload) => ({
    type:ActionType.DEL_USER_SUCCESS,
    payload
})

export const DelUserFailed =(payload)=>({
    type:ActionType.DEL_USER_FAILED,
    payload
})

export const GetOneUserRequest = (payload) => ({
    type: ActionType.GETONE_USER_REQUEST,
    payload

})

export const GetOneUserSuccess = (payload) =>({
    type: ActionType.GETONE_USER_SUCCESS,
    payload
})

export const GetOneUserFailed = (payload) => ({
    type:ActionType.GETONE_USER_FAILED,
    payload
})

export const AddUserRequest = (payload) =>({
    type:ActionType.ADD_USER_REQUEST,
    payload
})

export const AddUserSuccess = (payload) => ({
    type:ActionType.ADD_USER_SUCCESS,
    payload
})

export const AddUserFailed =(payload)=>({
    type:ActionType.ADD_USER_FAILED,
    payload
})

export const EditUserRequest = (payload) =>({
    type:ActionType.EDIT_USER_REQUEST,
    payload
})

export const EditUserSuccess = (payload) => ({
    type:ActionType.EDIT_USER_SUCCESS,
    payload
})

export const EditUserFailed =(payload)=>({
    type:ActionType.EDIT_USER_FAILED,
    payload
})