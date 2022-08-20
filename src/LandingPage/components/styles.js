import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
    marginRight: "2rem",
    color: "white",
  },

  menu: {
    display: "block",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    width: "100vw",
  },

  smallMargin: {
    marginTop: "0.5rem",
  },



  landingBox: {
    height: "100vh",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },

  landingButton: {
    marginTop: "2rem",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
  },

  navLink: {
    textDecoration: "none",
    color: "white",
  },

  introImage: {
    width: "100%",
  },
  sectionMargin: {
    marginTop: "8rem",
  },

  restaurantText: {
    width: "30rem",
    maxHeight: "25rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "2rem",
  },
  marginParagraph: {
    marginLeft: "5rem",
    padding: "2rem 0",
  },

  introText: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },

}));
