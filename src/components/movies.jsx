import React from "react";
import { useState } from "react";

function Movies() {
  const movies = [
    { id: 0, title: "Movie 1", genre: "Action", numberInStock: 6, rate: 2.5 },
    { id: 1, title: "Movie 2", genre: "Romance", numberInStock: 4, rate: 2.5 },
    { id: 2, title: "Movie 3", genre: "Adventure", numberInStock: 5, rate: 2.5,},
    { id: 3, title: "Movie 4", genre: "Comedy", numberInStock: 10, rate: 1 },
    { id: 4, title: "Movie 5", genre: "Action", numberInStock: 100, rate: 3 },
  ];

  const [moviesCount, setMoviesCount] = useState(movies.length);

  const renderMoviesCount = () => {
    const noMoviesMessage = "There are no movies to show";
    const countMessage = `Showing ${moviesCount} movies in the database`;
    const content = moviesCount === 0 ? noMoviesMessage : countMessage;

    return <p>{content}</p>;
  };

  const renderMoviesList = () => {
    const headers = ["Title", "Genre", "Stock", "Rate", " "];

    return (
      <table className="table-auto w-full">
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
                </tr>
            )) }
        </tbody>
      </table>
    );
  };

  return (
    <div className="mt-8">
      <div>{renderMoviesCount()}</div>
      <div className="mt-4">{renderMoviesList()}</div>
    </div>
  );
}

export default Movies;
