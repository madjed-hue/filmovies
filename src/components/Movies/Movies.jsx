import { useState } from "react";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../../services/TMDB";

import { MovieList, Pagination } from "..";
import { FeaturedMovie } from "..";

const Movies = () => {
  const [page, setPage] = useState(1);
  const lg = useMediaQuery((theme) => theme.breakpoints.only("lg"));

  const moviesNumber = lg ? 20 : 19;

  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies matched that name.
          <br />
          Please Try something else.
        </Typography>
      </Box>
    );
  }

  if (error) return `An error has occured.`;

  return (
    <div>
      <FeaturedMovie movie={data.results[0]} />
      <MovieList movies={data} numberOfMovies={moviesNumber} excludeFirst />
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={data.total_pages}
      />
    </div>
  );
};

export default Movies;
