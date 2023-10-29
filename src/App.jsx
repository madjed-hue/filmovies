import { CssBaseline } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Movies,
  MovieInformation,
  Actors,
  Profile,
  RootLayout,
} from "./components";
import { Provider } from "react-redux";

import useStyles from "./components/styles";
import store from "./App/store";
import ToggleColorModeProvider from "./utils/ToggleColorMode";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Movies />} />
      <Route path="approved" element={<Movies />} />
      <Route path="movie/:id" element={<MovieInformation />} />
      <Route path="actors/:id" element={<Actors />} />
      <Route path="profile/:id" element={<Profile />} />
    </Route>
  )
);

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <ToggleColorModeProvider>
        <div className={classes.root}>
          <CssBaseline />
          <RouterProvider router={router} />
        </div>
      </ToggleColorModeProvider>
    </Provider>
  );
}

export default App;
