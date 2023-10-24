import { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../../services/TMDB";

const Movies = () => {
  const [page, setPage] = useState(1);
  // const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory);
  const { data } = useGetMoviesQuery();

  console.log(data);

  return (
    <div>
      Movies
      {/* <FeaturedMovie movie={data.results[0]} /> */}
      {/* <MovieList movies={data} numberOfMovies={numberOfMovies} excludeFirst /> */}
      {/* <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} /> */}
    </div>
  );
};

export default Movies;
