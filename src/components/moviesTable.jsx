import React from 'react';
import PropTypes from 'prop-types'
import Likes from './common/like.jsx'
import Table from './common/table.jsx'
import { Link } from 'react-router-dom';

function MoviesTable ({ movies, sortColumn, onLike, onDelete, onSort }) {
    const columns = [
        {label: 
            'Title', 
            value: 'title', 
            content: movie => 
                <Link className='text-blue-800 underline' to={`/movies/${movie.id}`}>
                    { movie.title }
                </Link>
        }, 
        {label: 'Genre', value: 'genre'}, 
        {label: 'Stock', value: 'numberInStock'}, 
        {label: 'Rate', value: 'dailyRentalRate'}, 
        {
            key: 'like', 
            content: movie => <Likes liked={ movie.liked } onLiked ={ () => onLike(movie) } />
        },
        {
            key: 'delete', 
            content: movie => 
                <button onClick={ () => onDelete(movie) } className="bg-red-700 px-2 py-1 font-black text-white">
                    Delete
                </button>
        }
    ]

    return (
        <Table 
            data={ movies }
            onSort={ onSort }
            columns={ columns } 
            sortColumn={ sortColumn } />
    );
}

MoviesTable.propTypes = {
    movies: PropTypes.array.isRequired,
    sortColumn: PropTypes.object.isRequired,
    onLike: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired
}

export default MoviesTable