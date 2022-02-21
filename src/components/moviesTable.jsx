import PropTypes from 'prop-types'
import Likes from './common/like.jsx'

function MoviesTable ({ movies, onLike, onDelete }) {

    const headers = ["Title", "Genre", "Stock", "Rate", " "];
    return (
        <table className="table-fixed w-full">
          <thead>
            <tr className="">
              { headers.map(header => (
                  <th key={ header } className="text-left">{header}</th> ) 
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
                      <td>{ movie.rate }</td>
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
    onLike: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default MoviesTable