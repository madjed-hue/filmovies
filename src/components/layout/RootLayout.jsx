import { useRef } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

import Navbar from "../Navbar/Navbar";
import useStyles from "../styles";
import useAlan from "../Alan";

const RootLayout = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const alanBtnContainer = useRef();

  useAlan();

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main className={isMobile ? classes.mobileContent : classes.content}>
        <div className={classes.toolbar} />
        <Outlet />
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};

export default RootLayout;
