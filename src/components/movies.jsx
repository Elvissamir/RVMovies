import React from "react";
import { useState } from "react";

function Movies() {
  const moviesArray = [
    { id: 0, title: "Movie 1", genre: "Action", numberInStock: 6, rate: 2.5 },
    { id: 1, title: "Movie 2", genre: "Romance", numberInStock: 4, rate: 2.5 },
    { id: 2, title: "Movie 3", genre: "Adventure", numberInStock: 5, rate: 2.5,},
    { id: 3, title: "Movie 4", genre: "Comedy", numberInStock: 10, rate: 1 },
    { id: 4, title: "Movie 5", genre: "Action", numberInStock: 100, rate: 3 },
  ];

  const [movies, setMovies] = useState(moviesArray);

  const handleDelete = (movie) => {
    const m = movies.filter((item) => movie.id != item.id)
    setMovies(m) 
  }

  const renderMoviesCount = () => {
    const noMoviesMessage = "There are no movies to show";
    const countMessage = `Showing ${movies.length} movies in the database`;
    const content = movies.length === 0 ? noMoviesMessage : countMessage;

    return <p>{content}</p>;
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
          </tr>
        </thead>
        <tbody>
            { movies.map((movie, index) => (
                <tr className="text-left" key={ index }>
                    <td>{ movie.title }</td>
                    <td>{ movie.genre }</td>
                    <td>{ movie.numberInStock }</td>
                    <td>{ movie.rate }</td>
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
    <div className="mt-8">
      <div>{ renderMoviesCount() }</div>
      <div className="mt-4">{renderMoviesList()}</div>
    </div>
  );
}

export default Movies;