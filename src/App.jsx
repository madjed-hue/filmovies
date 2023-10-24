import { CssBaseline } from "@mui/material";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { Movies, MovieInformation, Actors, Profile } from "./components";

import useStyles from "./components/styles";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Movies />} />
      <Route path="movies/:id" element={<MovieInformation />} />
      <Route path="actors/:id" element={<Actors />} />
      <Route path="profile/:id" element={<Profile />} />
    </Route>
  )
);

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
