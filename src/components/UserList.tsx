import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import type {} from 'redux-thunk/extend-redux';
import useTypedSelector from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/users';

export default function UserList() {
    const {users, loading, error} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUsers())
    }, [])
    
    return (
        <div>
            {loading ? <h1>Loading...</h1> : <ul>{users.map(user=><li key={user.id}>{user.name}</li>)}</ul>}
        </div>
    )
}
