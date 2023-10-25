import { useState } from "react";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useGetMoviesQuery } from "../../services/TMDB";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";

import { MovieList } from "..";

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
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
          No movies that match that name.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }

  if (error) return "An error has occured.";

  return (
    <div>
      {/* <FeaturedMovie movie={data.results[0]} /> */}
      <MovieList movies={data} />
      {/* <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} /> */}
    </div>
  );
};

export default Movies;
