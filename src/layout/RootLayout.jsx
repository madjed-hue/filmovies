import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import useStyles from "../components/styles";

const RootLayout = () => {
  const classes = useStyles();
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
