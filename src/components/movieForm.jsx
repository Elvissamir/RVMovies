import { useForm } from "./hooks/useForm"
import Joi from 'joi';


function MovieForm () {
    
    const dataSchema = {
        title: Joi.string().max(255).required().label('Title'),
        genre: Joi.string().required().label('Genre'),
        numberInStock: Joi.number().min(0).max(255).required().label('In Stock'),
        dailyRentalRate: Joi.number().min(0).max(10).required().label('Rate')
    }

    const dataInit = {
        title: '',
        genre: '',
        numberInStock: '',
        dailyRentalRate: ''
    }

    const genreOptions = ['Romance', 'Action', 'Adventure']

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
            <h1 className="form-title">Movie Form</h1>
            <form onSubmit={ handleSubmit } className="form">
                <div className="form-field">
                    <label className="form-label" htmlFor="title">
                        Title
                    </label>
                    <input onChange={ handleChange } className="form-input" value={ formData.title } id="title" type='text' />
                    { formErrors.title && <p className="form-error">{ formErrors.title }</p> }
                </div>
                <div className="form-field">
                    <label className="form-label" htmlFor="genre">
                        Genre
                    </label>
                    <select className="w-full border bg-white py-3 px-4 pr-8 rounded" name="genre" id="genre">
                        { genreOptions.map(genre => <option key={genre} value={ genre }>{genre}</option>) }
                    </select>
                    { formErrors.genre && <p className="form-error">{ formErrors.genre }</p> }
                </div>
                <div className="form-field">
                    <label className="form-label" htmlFor="numberInStock">
                        In Stock
                    </label>
                    <input onChange={ handleChange } value={ formData.numberInStock } className="form-input" id="numberInStock" type="number" min="0" max="255" />
                    { formErrors.numberInStock && <p className="form-error">{ formErrors.numberInStock }</p> }
                </div>
                <div className="form-field">
                    <label className="form-label" htmlFor="dailyRentalRate">
                        Rate
                    </label>
                    <input onChange={ handleChange } value={ formData.dailyRentalRate } className="form-input" id="dailyRentalRate" type="number" min="0" max="10" />
                    { formErrors.dailyRentalRate && <p className="form-error">{ formErrors.dailyRentalRate }</p> }
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

export default MovieForm