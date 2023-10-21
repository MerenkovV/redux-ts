export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

export interface IState {
    users: Array<any>
    loading: boolean
    error: null | string
}

interface IFetchUser {
    type: UserActionTypes.FETCH_USERS
}
interface IFetchUserSuccess {
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: Array<any>
}
interface IFetchUserError {
    type: UserActionTypes.FETCH_USERS_ERROR,
    payload: string
}

export type actionType = IFetchUser | IFetchUserSuccess | IFetchUserError