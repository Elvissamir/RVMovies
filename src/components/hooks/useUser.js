import { useState } from "react"
import jwtDecode from "jwt-decode";

function useUser () {
    const [ currentUser, setCurrentUser ] = useState(null)

    function mapUserProperties ({ _id, first_name, last_name, email, isAdmin }) {
        return {
            _id, 
            first_name,
            last_name,
            email,
            isAdmin,
        }
    }

    const setCurrentUserFromToken = () => {
        const jwt = localStorage.getItem('token')

        if (jwt) {
          const user = jwtDecode(jwt)
          setCurrentUser(user)
        }
    }

    const login = (token) => {
        localStorage.setItem('token', token)

        const userData = mapUserProperties(jwtDecode(token))
        setCurrentUser(userData)
    }

    const logout = () => {
        localStorage.removeItem('token')
        setCurrentUser(null)
    }

    return {
            currentUser, 
            setCurrentUser, 
            setCurrentUserFromToken,
            login,
            logout
        }
}

export default useUser