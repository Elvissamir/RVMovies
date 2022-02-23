import Joi from 'joi-browser'
import { useForm } from "./hooks/useForm"

function RegistrationForm () {
    const dataInit = {
        username: '',
        name: '',
        password: '',
    }

    const dataSchema = {
        username: Joi.string().required().label('Username'),
        name: Joi.string().required().label('Name'),
        password: Joi.string().required().label('Password')
    }

    const {
        formData,
        formErrors,
        validate,
        handleChange
    } = useForm(dataInit, dataSchema)

    const handleSubmit = () => {

    }

    return (
        <div className="form-wrapper w-6/12">
            <h1 className="form-title">Register</h1>
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
                    <button disabled={ validate() } className="form-button w-full">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm