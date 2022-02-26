import React from "react";
import { useForm } from "./hooks/useForm"
import Joi from 'joi';
import { useState, useEffect } from 'react';
import { getGenres } from "../services/genresService";
import { getMovieById } from '../services/moviesService'
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

const dataSchema = {
    title: Joi.string().max(255).required().label('Title'),
    genreId: Joi.string().required().label('Genre'),
    numberInStock: Joi.number().min(0).max(255).required().label('In Stock'),
    dailyRentalRate: Joi.number().min(0).max(10).required().label('Rate')
}

const dataInit = {
    title: '',
    genreIds: [],
    numberInStock: 0,
    dailyRentalRate: 0
}

function MovieForm () {
    const params = useParams()
    const [ genreOptions, setGenreOptions ] = useState([])

    const {
        formData,
        setFormData,
        formErrors,
        validate,
        handleChange
    } = useForm(dataInit, dataSchema)

    useEffect(() => {
        if (params.id) {
            const fetchMovie = async () => {
                try {
                    const { data } = await getMovieById(params.id)
                    const movieData = mapToViewModel(data)
                    setFormData(movieData)
                }
                catch (ex) {
                    toast.error(`${ex.response.status} ${ex.response.data}`)
                    // REDIRECT TO NOT FOUND
                }
            }

            fetchMovie()
        }

        const fetchGenres = async () => {
            const { data: genres } = await getGenres()
            setGenreOptions(genres)
        }

        fetchGenres()
    }, [])

    const handleSubmit = () => {

    }

    const mapToViewModel = movie => {
        return {
            _id: movie._id,
            title: movie.title,
            genresIds: movie.genres.map(genre => genre._id),
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
                    <div className="form-label">Genres</div>
                    <div className="flex flex-row justify-between flex-wrap w-full">
                        { genreOptions.map(genre => 
                            <div className="w-5/12" key={ genre._id }>
                                <input 
                                    type="checkbox" 
                                    id={ genre._id } 
                                    value="first_checkbox" />
                                <label 
                                    className="form-label ml-2" 
                                    htmlFor={ genre._id }>{ genre.name }</label>
                            </div>
                        )}
                    </div>
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