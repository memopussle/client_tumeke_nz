import { alpha, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
    marginRight: "2rem",
    color: "white",
    textDecoration: 'none'
  },
  menu: {
    display: "block",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },

  menuIcon: {
    color: "white",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: { width: "20ch" },
    textInden: "2rem"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },


  nav: {
    display: "flex",
  },
  toolBar: {
    backgroundColor: "#f7981d",
  },

  navLink: {
    textDecoration: "none",
    color: "white",
  },
}));
