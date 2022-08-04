import React from "react";
import {
  Toolbar,
  Typography,

  Box,
  Container,
} from "@material-ui/core";

import BasicMenu from "../components/Header/BasicMenu.js";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import useStyles from "./styles.js";
const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);


const Header = () => {
  const classes = useStyles();

  return (
    <Toolbar>
      <Container maxWidth="xl" className={classes.header}>
        <WhiteTextTypography variant="h5">Tu Meke NZ</WhiteTextTypography>
        <Box className={classes.nav}>
          <Link to="/" className={classes.navLink}>
            <WhiteTextTypography variant="h6" className={classes.title}>
              Home
            </WhiteTextTypography>
          </Link>
          <Link to="/search" className={classes.navLink}>
            <WhiteTextTypography variant="h6" className={classes.title}>
              Search
            </WhiteTextTypography>
          </Link>
          <Link to="/about" className={classes.navLink}>
            <WhiteTextTypography variant="h6" className={classes.title}>
              About
            </WhiteTextTypography>
          </Link>

          <BasicMenu />
        </Box>
      </Container>
    </Toolbar>
  );
};

export default Header;
