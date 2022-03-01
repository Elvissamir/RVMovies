import { useState } from "react"
import { useNavigate } from 'react-router-dom';

function useUser () {
    const [ currentUser, setCurrentUser ] = useState(null)
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token')
        setCurrentUser(null)
        navigate('/')
    }

    return {
            currentUser, 
            setCurrentUser, 
            logout
        }
}

export default useUser