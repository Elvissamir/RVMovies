import React from "react";
import Likes from './common/like'
import FilterList from "./filterList";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { filterList } from '../utils/filterList';
import { useState } from "react";

function Movies() {
  const moviesArray = [
    { id: 0, title: "Movie 1", genre: "Action", numberInStock: 6, rate: 2.5, liked: false },
    { id: 1, title: "Movie 2", genre: "Romance", numberInStock: 4, rate: 2.5, liked: false},
    { id: 2, title: "Movie 3", genre: "Adventure", numberInStock: 5, rate: 2.5, liked: false},
    { id: 3, title: "Movie 4", genre: "Comedy", numberInStock: 10, rate: 1, liked: false},
    { id: 4, title: "Movie 5", genre: "Action", numberInStock: 100, rate: 3, liked: false },
  ];

  const availableGenreFilters = ['All', 'Action', 'Comedy', 'Romance', 'Adventure']
  const [ movies, setMovies ] = useState(moviesArray);
  const [ pageSize, setPageSize ] = useState(4)
  const [ currentPage, setCurrentPage ] = useState(1)
  const [ currentFilter, setCurrentFilter ] = useState('All')

  const filteredList = filterList(movies, currentFilter)
  const movieList = paginate(filteredList, currentPage, pageSize)

  const handleDelete = (movie) => {
    const m = movies.filter((item) => movie.id != item.id)
    setMovies(m) 
  }

  const handleLike = (movie) => {
    const index = movies.indexOf(movie)
    const m = [...movies] 
    m[index].liked = !m[index].liked
    setMovies(m)
  }

  const handlePageChange = page => {
    setCurrentPage(page)
  }   

  const handleChangeGenreFilter = option => {
    setCurrentFilter(option)
    setCurrentPage(1)
  }

  const renderMoviesCount = () => {
    const noMoviesMessage = "There are no movies to show";
    const countMessage = `Showing ${movieList.length} movies in the database`;
    const content = movieList.length === 0 ? noMoviesMessage : countMessage;

    return <p>{ content }</p>;
  };

  const renderMoviesList = () => {
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
            { movieList.map((movie, index) => (
                <tr className="text-left" key={ index }>
                    <td>{ movie.title }</td>
                    <td>{ movie.genre }</td>
                    <td>{ movie.numberInStock }</td>
                    <td>{ movie.rate }</td>
                    <td className="flex justify-center h-full">
                      <div className="flex p-2">
                        <Likes liked={ movie.liked } onLiked ={ () => handleLike(movie) } />
                      </div>
                    </td>
                    <td className="text-center">
                      <button onClick={ () => handleDelete(movie) } className="bg-red-700 px-2 py-1 font-black text-white">
                        Delete
                      </button>
                    </td>
                </tr>
            )) }
        </tbody>
      </table>
    );
  };

  if (movies.length === 0)
    return  (<div className="mt-8">
              <div>{ renderMoviesCount() }</div>
            </div>)

  return (
    <div className="flex justify-between mt-8 w-full">
      <div className="flex mt-1">
        <FilterList 
          onSelectFilter={ handleChangeGenreFilter }
          filters={ availableGenreFilters } 
          activeFilter={ currentFilter } />
      </div>
      <div className="flex flex-col w-9/12">
        <div className="text-left">{ renderMoviesCount() }</div>
        <div className="mt-4">{renderMoviesList()}</div>
        <div className="flex justify-center mt-4">
          <Pagination 
            itemsCount={ filteredList.length } 
            pageSize={ pageSize } 
            currentPage={ currentPage }
            onPageChange={ handlePageChange } />
        </div>
      </div>
    </div>
  );
}

export default Movies;
