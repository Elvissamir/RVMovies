import PropTypes from 'prop-types'
import Likes from './common/like.jsx'
import TableHeader from './common/tableHeader.jsx'
import TableBody from './common/tableBody.jsx'

function MoviesTable ({ movies, sortColumn, onLike, onDelete, onSort }) {
    const columns = [
        {label: 'Title', value: 'title'}, 
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
        <table className="table-fixed w-full">
          <TableHeader 
            sortColumn={ sortColumn }
            onSort={ onSort }
            columns={ columns } />
          <TableBody 
            columns={ columns }
            data={ movies } />
        </table>
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