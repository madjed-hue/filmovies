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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";

import useStyles from "./components/styles";
import store from "./App/store";

const theme = createTheme();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Movies />} />
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
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
