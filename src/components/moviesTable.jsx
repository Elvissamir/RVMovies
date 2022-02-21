import PropTypes from 'prop-types'
import Likes from './common/like.jsx'
import TableHeader from './common/tableHeader.jsx';

function MoviesTable ({ movies, sortColumn, onLike, onDelete, onSort }) {

    const columns = [
        {label: 'Title', value: 'title'}, 
        {label: 'Genre', value: 'genre'}, 
        {label: 'Stock', value: 'numberInStock'}, 
        {label: 'Rate', value: 'dailyRentalRate'}, 
        {label: ' ', value: ''}]

    return (
        <table className="table-fixed w-full">
          <TableHeader 
            sortColumn={ sortColumn }
            onSort={ onSort }
            columns={ columns } />
          <tbody>
              { movies.map((movie, index) => (
                  <tr className="text-left" key={ index }>
                      <td>{ movie.title }</td>
                      <td>{ movie.genre }</td>
                      <td>{ movie.numberInStock }</td>
                      <td>{ movie.dailyRentalRate }</td>
                      <td className="flex justify-center h-full">
                        <div className="flex p-2">
                          <Likes liked={ movie.liked } onLiked ={ () => onLike(movie) } />
                        </div>
                      </td>
                      <td className="text-center">
                        <button onClick={ () => onDelete(movie) } className="bg-red-700 px-2 py-1 font-black text-white">
                          Delete
                        </button>
                      </td>
                  </tr>
              )) }
          </tbody>
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