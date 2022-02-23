import Joi from 'joi-browser'
import { useForm } from './hooks/useForm'

function LoginForm () {
    const dataInit = {
        username: '',
        password: ''
    }

    const dataSchema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }

    const { 
        formData, 
        formErrors, 
        validate, 
        handleChange
    } = useForm(dataInit, dataSchema)   
    
    const handleSubmit = () => {
        // Call the server
        console.log('Submitted')
    }

    return (
        <div className="w-8/12 mt-8 mx-auto">
            <h1 className="text-2xl font-black">Login</h1>
            <form onSubmit={ handleSubmit } className="form">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input onChange={ handleChange } className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" value={ formData.username } id="username" type='text' />
                    { formErrors.username && <p className="text-red-500 text-xs italic">{ formErrors.username }</p> }
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input onChange={ handleChange } value={ formData.password } className="shadow appearance-none borde rounded w-full py-2 px-3 text-gray-700 mb-3" id="password" type="password" />
                    { formErrors.password && <p className="text-red-500 text-xs italic">{ formErrors.password }</p> }
                </div>
                <div className="flex items-center justify-between">
                    <button disabled={ validate() } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Sign In
                    </button>
                    <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="/">
                        Forgot Password?
                    </a>
                </div>
            </form>
        </div>
    )
}

export default LoginForm