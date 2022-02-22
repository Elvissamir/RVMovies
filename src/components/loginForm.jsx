import Joi from 'joi-browser'
import { useState } from "react"

function LoginForm () {
    const dataInit = {
        username: '',
        password: ''
    }

    const [ formData, setFormData ] = useState(dataInit)
    const [ formErrors, setFormErrors ] = useState({})

    const dataSchema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }

    const validate = () => {
        const options = { abortEarly: false }
        const { error } = Joi.validate(formData, dataSchema, options)

        if (!error) return null
        
        const errors = {}
        error.details.forEach( item => errors[item.path[0]] = item.message)
        return errors
    }

    const validateProperty = ({id, value}) => {
        const obj = { [id]: value }
        const schema = { [id]: dataSchema[id] }
        const { error } = Joi.validate(obj, schema)

        return (!error) ? null:error.details[0].message
    }

    const handleChange = ({ target: input }) => {
        const errors = { ...formErrors }
        const errorMessage = validateProperty(input)

        if (errorMessage) errors[input.id] = errorMessage
        else delete errors[input.id]
        
        const data = { ...formData }
        data[input.id] = input.value
        setFormErrors(errors)
        setFormData(data)
    }
    
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
                    <input onChange={ handleChange } value={ formData.username } autoFocus className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="username" type="text" placeholder="Username" />
                    { formErrors.username && <p className="text-red-500 text-xs italic">{ formErrors.username }</p> }
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input onChange={ handleChange } value={ formData.password } className="shadow appearance-none borde rounded w-full py-2 px-3 text-gray-700 mb-3" id="password" type="password" placeholder="******************" />
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