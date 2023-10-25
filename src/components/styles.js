import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "100%",
  },
  toolbar: {
    height: "70px",
  },
  content: {
    flexGrowl: "1",
    padding: "2em 2em 2em 17em",
  },
  mobileContent: {
    flexGrowl: "1",
    padding: "2em",
  },
}));

export default useStyles;
