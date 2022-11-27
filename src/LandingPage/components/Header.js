import React from "react";
import { Toolbar, Typography, Box, Container } from "@material-ui/core";

import BasicMenu from "../../components/Header/BasicMenu.js";
import { Link, useLocation } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import useStyles from "./styles.js";
const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

const Header = () => {
  const classes = useStyles();
  const location = useLocation(); //get pathname


  const whiteNav =
    location.pathname === "/" ? true : false;

  return (
    <>
      <Toolbar className={whiteNav ? "" : "yellowBar"}>
        <Container maxWidth="xl" className={classes.header}>
          <WhiteTextTypography variant="h5">Tu Meke NZ</WhiteTextTypography>

          <Box className={classes.nav}>
            <Link to="/" className={classes.navLink}>
              {whiteNav ? (
                <WhiteTextTypography variant="h6" className={classes.title}>
                  Home
                </WhiteTextTypography>
              ) : (
                <Typography variant="h6" className={classes.title}>
                  Home
                </Typography>
              )}
            </Link>
            <Link to="/tours" className={classes.navLink}>
              {whiteNav ? (
                <WhiteTextTypography variant="h6" className={classes.title}>
                  Tours
                </WhiteTextTypography>
              ) : (
                <Typography variant="h6" className={classes.title}>
                  Tours
                </Typography>
              )}
            </Link>
            <Link to="/search" className={classes.navLink}>
              {whiteNav ? (
                <WhiteTextTypography variant="h6" className={classes.title}>
                  Search
                </WhiteTextTypography>
              ) : (
                <Typography variant="h6" className={classes.title}>
                  Search
                </Typography>
              )}
            </Link>

            <Link to="/about" className={classes.navLink}>
              {whiteNav ? (
                <WhiteTextTypography variant="h6" className={classes.title}>
                  About
                </WhiteTextTypography>
              ) : (
                <Typography variant="h6" className={classes.title}>
                  About
                </Typography>
              )}
            </Link>

            <BasicMenu />
          </Box>
        </Container>
      </Toolbar>
    </>
  );
};

export default Header;
