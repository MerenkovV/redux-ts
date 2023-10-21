import { useEffect } from 'react';
import type {} from 'redux-thunk/extend-redux';
import useTypedSelector from '../hooks/useTypedSelector';
import useActions from '../hooks/useActions';

export default function UserList() {
    const {users, loading, error} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(()=>{
        fetchUsers()
    }, [])
    
    return (
        <div>
            {loading ? <h1>Loading...</h1> : error ? <h1>{error}</h1> : <ul>{users.map(user=><li key={user.id}>{user.name}</li>)}</ul>}
        </div>
    )
}
