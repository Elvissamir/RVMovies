import React from "react";
import MoviesTable from "./moviesTable";
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
        <div className="mt-4">
          <MoviesTable 
            movies={ movieList } 
            onDelete={ handleDelete }
            onLike={ handleLike} />
        </div>
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
