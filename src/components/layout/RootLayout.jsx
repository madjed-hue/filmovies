import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import useStyles from "../styles";
import { useMediaQuery } from "@mui/material";

const RootLayout = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main className={isMobile ? classes.mobileContent : classes.content}>
        <div className={classes.toolbar} />
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
