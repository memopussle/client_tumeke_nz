import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  Container,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import BasicMenu from "./BasicMenu.js";
import { Link } from "react-router-dom";

import useStyles from "./styles.js";
import { withStyles } from "@material-ui/core/styles";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolBar}>
        <Container maxWidth="xl" className={classes.header}>
          <Box className={classes.nav}>
            <WhiteTextTypography variant="h5" className={classes.title}>
              Tui Meke NZ
            </WhiteTextTypography>
            <Link to="/" className={classes.navLink}>
              <Typography variant="h6" className={classes.title}>
                Home
              </Typography>
            </Link>
            <Link to="/tours" className={classes.navLink}>
              <Typography variant="h6" className={classes.title}>
                Tours
              </Typography>
            </Link>
            <Link to="/search" className={classes.navLink}>
              <Typography variant="h6" className={classes.title}>
                Search
              </Typography>
            </Link>
            <Link to="/about" className={classes.navLink}>
              <Typography variant="h6" className={classes.title}>
                About
              </Typography>
            </Link>

            <BasicMenu />
          </Box>
          <Box display="flex">
            <WhiteTextTypography variant="h6" className={classes.title}>
              Explore new places
            </WhiteTextTypography>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon style={{ color: "white" }} />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
            </Autocomplete>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
