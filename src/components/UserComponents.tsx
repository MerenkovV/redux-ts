import { useTypedSelector } from "../hooks/reduxUsers"
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import { ActionsType } from "../store/reducers/types/todosTypes"

export default function UserComponents() {
    const {todos, loading, error} = useTypedSelector(state=>state.todos)
    const dispatch = useDispatch()
    const [inputText, setInputText] = useState('')
    
  return (
    <div>
        <input type="text" value={inputText} onChange={e=>setInputText(e.target.value)}></input>
        <button onClick={()=>{inputText !== '' && dispatch({
          type: ActionsType.ADD_TODOS, 
          payload: [{
            title: inputText, 
            id: Date.now()
          }]
        })
          setInputText('')
        }}>Send</button>
        <ul>
            {todos.map(todo=><li key={todo.id}>{todo.title}</li>)}
        </ul>
        
    </div>
  )
}
