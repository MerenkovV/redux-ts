import { combineReducers } from 'redux';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
    todos: todosReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer