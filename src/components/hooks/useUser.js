import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import jwtDecode from "jwt-decode";

function useUser () {
    const [ currentUser, setCurrentUser ] = useState(null)
    const navigate = useNavigate()

    function mapUserProperties ({ _id, first_name, last_name, email, isAdmin }) {
        return {
            _id, 
            first_name,
            last_name,
            email,
            isAdmin,
        }
    }

    const login = (token) => {
        localStorage.setItem('token', token)

        const userData = mapUserProperties(jwtDecode(token))
        setCurrentUser(userData)
        navigate('/', { replace: true  })
    }

    const logout = () => {
        localStorage.removeItem('token')
        setCurrentUser(null)
        navigate('/', { replace: true })
    }

    return {
            currentUser, 
            setCurrentUser, 
            login,
            logout
        }
}

export default useUser