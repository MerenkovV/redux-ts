import { IState, UserActionTypes, actionType } from "../types/types"

const initialState: IState = {
    users: [],
    loading: false,
    error: null
}

const userReducer = (state = initialState, action: actionType): IState => {
    switch(action.type){
        case UserActionTypes.FETCH_USERS:
            return {
                ...state,
                loading: true,
                users: [],
                error: null
            }
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: null
            }
        case UserActionTypes.FETCH_USERS_ERROR:
            return {
                ...state,
                loading: false,
                users: [...state.users],
                error: action.payload
            }
        default: return state
    }
}

export default userReducer