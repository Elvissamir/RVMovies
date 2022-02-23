import Joi from 'joi-browser'
import { useState } from "react"

function useForm (dataInit, dataSchema) {
    const [ formData, setFormData ] = useState(dataInit)
    const [ formErrors, setFormErrors ] = useState({})

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

    return { validate, handleChange, formData, formErrors }
}

export {
    useForm
}