import { Reducer } from "redux"
import { ActionsType, IState, actionType } from "./types/todosTypes"

const initialState = {
    todos: [{title: "Test", id: 0},{title: "Test1", id: 1}],
    loading: false,
    error: null
}

const todosReducer:Reducer<IState> = (state = initialState, action:actionType) => {
    switch(action.type){
        case ActionsType.FETCH_TODOS: 
            return {
                ...state,
                todos: [],
                loading: true,
                error: null
            }
        case ActionsType.FETCH_TODOS_SUCCESS: 
            return {
                ...state,
                todos: action.payload,
                loading: false,
                error: null
            }
        case ActionsType.FETCH_TODOS_ERROR: 
            return {
                ...state,
                todos: [],
                loading: false,
                error: action.payload
            }
        case ActionsType.ADD_TODOS:
            return {
                ...state,
                todos: [...state.todos, ...action.payload],
                loading: false,
                error: null
            }
        default: return state
    }
}

export default todosReducer