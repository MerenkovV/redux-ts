export enum ActionsType {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    ADD_TODOS = 'ADD_TODOS'
}

interface IFetchTodos {
    type: ActionsType.FETCH_TODOS,
}
interface IFetchSuccessTodos {
    type: ActionsType.FETCH_TODOS_SUCCESS,
    payload: any[]
}
interface IFetchErrorTodos {
    type: ActionsType.FETCH_TODOS_ERROR,
    payload: string
}
interface IAddTodos {
    type: ActionsType.ADD_TODOS,
    payload: any[]
}

export type actionType = IFetchTodos | IFetchSuccessTodos | IFetchErrorTodos | IAddTodos

export interface IState {
    todos: any[]
    loading: boolean
    error: null | string
}