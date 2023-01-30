import * as ActionType from '../Constants/RegionConstant'

const INIT_STATE = {
    users:[],
    user:[]
}

const UserReduce =(state = INIT_STATE,action) => {
    switch (action.type) {
        case ActionType.GET_USER_REQUEST:
            return {...state}
        case ActionType.GET_USER_SUCCESS:
            return GetRegionSuccessed(state,action)
        case ActionType.GETONE_USER_REQUEST:
            return {...state}
        case ActionType.GETONE_USER_SUCCESS:
            return GetOneRegionSuccessed(state,action)
        case ActionType.ADD_USER_REQUEST:
            return {...state}
        case ActionType.ADD_USER_SUCCESS:
            return AddRegionSuccessed(state,action)
        case ActionType.DEL_USER_REQUEST:
            return {...state}
        case ActionType.DEL_USER_SUCCESS:
            return DelRegionSuccessed(state,action)
        case ActionType.EDIT_USER_REQUEST:
            return {...state}
        case ActionType.EDIT_USER_SUCCESS:
            return EditRegionSuccessed(state,action)
        default:
            return state
    }
}

const GetRegionSuccessed = (state,action) => {
    return {
        ...state,
        users: action.payload
    }
}

const GetOneRegionSuccessed = (state,action) =>{
    return {
        ...state,
        user:action.payload
    }
}

const DelRegionSuccessed = (state,action) => {
    const {payload} = action
    const filterUser = state.users.filter(el=>el.id !== payload)
    return {
        ...state,
        users:[...filterUser]
    }
}

const AddRegionSuccessed = (state,action)=>{
    const {payload} = action
    return{
        ...state,
        users:[...state.users, payload]
    }
}

const EditRegionSuccessed = (state,action) =>{
    const {payload}=action
    const filterUser = state.users.filter(el=>el.id !== payload.id)
    return {
        ...state,
        users: [...filterUser,payload]
    }
}

export default UserReduce