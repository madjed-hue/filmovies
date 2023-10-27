import { useSelector } from "react-redux";
import { userSelector } from "../../features/auth";
import { Box, Button, Typography } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";

const Profile = () => {
  const { user, isAuthenticated } = useSelector(userSelector);

  const favoriteMovies = [];
  const watchlistMovies = [];

  const logout = () => {
    localStorage.clear();

    window.location.href = "/";
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies?.results?.length && !watchlistMovies?.results?.length ? (
        <Typography variant="h5">
          Add favorites or watchlist some movies to see them here!
        </Typography>
      ) : (
        <Box>
          Favorite Movies
          {/* <RatedCards title="Favorite Movies" data={favoriteMovies} />
        <RatedCards title="Watchlist" data={watchlistMovies} /> */}
        </Box>
      )}
    </Box>
  );
};

export default Profile;
