import { Pagination } from "antd";
import Error from "../../common/Error";
import Loading from "../../common/Loading";
import MovieCard from "../movieCart/MovieCart";
import "./AllMovies.css";
import { useState } from "react";
import useAllMoviesFetch from "../../../hooks/movies-data-hooks/useAllMovieFetch";

export default function AllMovies() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data: allMovies, loading, error } = useAllMoviesFetch(currentPage);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div className="movie-card-container">
        {allMovies.map((movie) => {
          return (
            <MovieCard
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              key={movie.id}
            />
          );
        })}
        <Pagination
          current={currentPage}
          onChange={handlePageChange}
          showSizeChanger={false}
          total={500}
        />
      </div>
    </>
  );
}
