import Joi from 'joi'
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
        <div className="w-6/12 form-wrapper">
            <h1 className="form-title">Login</h1>
            <form onSubmit={ handleSubmit } className="form">
                <div className="form-field">
                    <label className="form-label" htmlFor="username">
                        Username
                    </label>
                    <input onChange={ handleChange } className="form-input" value={ formData.username } id="username" type='text' />
                    { formErrors.username && <p className="form-error">{ formErrors.username }</p> }
                </div>
                <div className="form-field">
                    <label className="form-label" htmlFor="password">
                        Password
                    </label>
                    <input onChange={ handleChange } value={ formData.password } className="form-input" id="password" type="password" />
                    { formErrors.password && <p className="form-error">{ formErrors.password }</p> }
                </div>
                <div className="form-footer">
                    <button disabled={ validate() } className="form-button">
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