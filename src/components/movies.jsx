import React from "react";
import MoviesTable from "./moviesTable";
import FilterList from "./filterList";
import Pagination from "./common/pagination";
import _ from 'lodash'
import { paginate } from "../utils/paginate";
import { filterList } from '../utils/filterList';
import { useState } from "react";
import { Link } from 'react-router-dom';
import SearchBox from './common/searchBox';

function Movies(props) {
  const moviesArray = [
    { id: 0, title: "Troy", genre: "Action", numberInStock: 6, dailyRentalRate: 2.5, liked: false },
    { id: 1, title: "Kingdom of Heaven", genre: "Romance", numberInStock: 4, dailyRentalRate: 2.5, liked: false},
    { id: 2, title: "Gladiator", genre: "Adventure", numberInStock: 5, dailyRentalRate: 2.5, liked: false},
    { id: 3, title: "Outlaw King", genre: "Comedy", numberInStock: 10, dailyRentalRate: 1, liked: false},
    { id: 4, title: "King Arthur", genre: "Action", numberInStock: 100, dailyRentalRate: 3, liked: false },
  ];

  const availableGenreFilters = ['All', 'Action', 'Comedy', 'Romance', 'Adventure']
  const [ movies, setMovies ] = useState(moviesArray);
  const [ pageSize, setPageSize ] = useState(4)
  const [ currentPage, setCurrentPage ] = useState(1)
  const [ currentFilter, setCurrentFilter ] = useState('All')
  const [ sortColumn, setSortColumn ] = useState({ path: 'title', order: 'asc' }) 
  const [ searchQuery, setSearchQuery ] = useState('')

  const search = (query, array) => {
    return array.filter(item => item.title.toLowerCase().startsWith(query.toLowerCase()))
  }

  const getPagedData = () => {
    let list = []

    if (currentFilter !== 'none')
      list = filterList(movies, currentFilter)
    else {
      list = search(searchQuery, movies)
    }

    const sortedList = _.orderBy(list, [sortColumn.path], [sortColumn.order])
    const movieList = paginate(sortedList, currentPage, pageSize)  

    return { totalCount: list.length, data: movieList }
  }
 
  const { data, totalCount } = getPagedData()

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

  const handleSort = sortColumn => {
    setSortColumn(sortColumn)
  }

  const handleSearch = ({target}) => {
    setCurrentFilter('none')
    setCurrentPage(1)
    setSearchQuery(target.value)
  }

  const moviesCountMessage = () => {
    const countMessage = `Showing ${totalCount} movies in the database`;
    return <p>{ countMessage }</p>;
  };

  if (movies.length === 0)
    return  (<div className="mt-8">
              <div>There are no movies to show</div>
            </div>)

  return (
    <div className="flex justify-between mt-8 w-full">
      <div className="flex">
        <FilterList 
          onSelectFilter={ handleChangeGenreFilter }
          filters={ availableGenreFilters } 
          activeFilter={ currentFilter } />
      </div>
      <div className="flex flex-col w-9/12">
        <div className="flex">
          <Link className="button" to='/movies/new'>New Movie</Link>
        </div>
        <div className="flex mt-4">
          <SearchBox query={ searchQuery } onChange={ handleSearch } />
        </div>
        <div className="mt-4 text-left">{ moviesCountMessage() }</div>
        <div className="mt-4">
          <MoviesTable 
            movies={ data } 
            sortColumn={ sortColumn }
            onSort={ handleSort }
            onDelete={ handleDelete }
            onLike={ handleLike} />
        </div>
        <div className="flex justify-center mt-4">
          <Pagination 
            itemsCount={ totalCount } 
            pageSize={ pageSize } 
            currentPage={ currentPage }
            onPageChange={ handlePageChange } />
        </div>
      </div>
    </div>
  );
}

export default Movies;
