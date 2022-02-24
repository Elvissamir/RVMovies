import { useForm } from "./hooks/useForm"
import Joi from 'joi';


function MovieForm () {
    const dataSchema = {
        title: Joi.string().max(255).required().label('Title'),
        genreId: Joi.string().required().label('Genre'),
        numberInStock: Joi.number().min(0).max(255).required().label('In Stock'),
        dailyRentalRate: Joi.number().min(0).max(10).required().label('Rate')
    }

    const dataInit = {
        title: '',
        genreId: 'abc2',
        numberInStock: '',
        dailyRentalRate: ''
    }

    const genreOptions = [
        { name: 'Romance', id: 'abc1'},
        { name: 'Action', id: 'abc2'},
        { name: 'Adventure', id: 'abc3'}
    ]

    const {
        formData,
        formErrors,
        validate,
        handleChange
    } = useForm(dataInit, dataSchema) 

    const handleSubmit = () => {

    }

    const mapToViewModel = movie => {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        }
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
                    <select onChange={ handleChange } className="form-select" value={ formData.genreId } name="genre" id="genreId">
                        { genreOptions.map(genre => <option key={genre.id} value={ genre.id }>{ genre.name }</option>) }
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