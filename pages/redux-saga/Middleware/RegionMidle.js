import { call, put } from 'redux-saga/effects'
import RegionApi from '../../api/RegionApi'
import {
    AddUserFailed,
    AddUserSuccess,
    DelUserFailed,
    DelUserSuccess,
    EditUserFailed,
    EditUserSuccess,
    GetOneUserFailed,
    GetOneUserSuccess,
    GetUserFailed,
    GetUserSuccess,
} from '../Action/UserAction'

function* handleGetRegion() {
    try {
        const result = yield call(RegionApi.List)
        yield put(GetUserSuccess(result))
    } catch (error) {
        yield put(GetUserFailed(error))
    }
}

function* handleGetOneRegion(action) {
    const { payload } = action
    try {
        const result = yield call(RegionApi.FindOne, payload)
        yield put(GetOneUserSuccess(result))
    } catch (error) {
        yield put(GetOneUserFailed(error))
    }
}

function* handleDelRegion(action) {
    const { payload } = action
    try {
        const result = yield call(RegionApi.Delete, payload)
        yield put(DelUserSuccess(payload))
    } catch (error) {
        yield put(DelUserFailed(error))
    }
}

function* handleAddRegion(action) {
    const { payload } = action
    try {
        const result = yield call(RegionApi.Create, payload)
        yield put(AddUserSuccess(result.data))
    } catch (error) {
        yield put(AddUserFailed(error))
    }
}

function* handleEditRegion(action) {
    const { payload } = action
    try {
        const result = yield call(RegionApi.UpdateFile, payload)
        yield put(EditUserSuccess(result.data))
    } catch (error) {
        yield put(EditUserFailed(error))
    }
}

export {
    handleAddRegion,
    handleDelRegion,
    handleEditRegion,
    handleGetOneRegion,
    handleGetRegion
}