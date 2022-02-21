import PropTypes from 'prop-types'
import Likes from './common/like.jsx'

function MoviesTable ({ movies, sortColumn, onLike, onDelete, onSort }) {

    const properties = [
        {id: 'Title', value: 'title'}, 
        {id: 'Genre', value: 'genre'}, 
        {id: 'Stock', value: 'numberInStock'}, 
        {id: 'Rate', value: 'dailyRentalRate'}, 
        {id: ' ', value: ''}]

    const raiseSort = (path) => {
        let order = 'asc'
        if (path === sortColumn.path && sortColumn.order === 'asc')
          order = 'desc'
    
        onSort({ path, order })
    }

    return (
        <table className="table-fixed w-full">
          <thead>
            <tr className="">
              { properties.map(p => (
                <th 
                    key={ p.id } 
                    onClick={ () => raiseSort(p.value) } 
                    className="text-left">
                        { p.id }
                </th> ) 
              )}
              <th></th>
            </tr>
          </thead>
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