import { useNavigate, useParams } from "react-router-dom"

function MovieForm () {
    const { id } = useParams()
    const navigate = useNavigate()
    
    return (
        <div>
            <h1>Movie Form { id }</h1>
            <button 
                onClick={ () => navigate('/movies', { replace: true }) }
                className="p-2 bg-blue-500 text-white font-black rounded-lg">
                    Save
            </button>
        </div>
    )
    
}

export default MovieForm