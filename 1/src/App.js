import React from 'react'
import Login from './component/Login'
import Logout from './component/Logout'
import "./App.css"
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'


const App = () => {
    const user = useSelector(selectUser);
    return (
        <div>
           {user ? <Logout /> : <Login />}
        </div>
    )
}

export default App
