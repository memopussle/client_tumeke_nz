import React from 'react';
import Header from "./Header";
import "./styles.css";
import { Container, Typography,Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import useStyles from "./styles.js";
import Intro from './Intro';

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);


const LandingPage = () => {
   const classes = useStyles();

  return (
    <>
      <Header />
      <div className="landing-page">
        <Container maxWidth="xl">
          <div className={classes.landingBox}>
            <WhiteTextTypography variant="h1" style={{ textAlign: "center" }}>
              NEW ZEALAND
            </WhiteTextTypography>
            <WhiteTextTypography variant="h6">
              The new clamn of journey
            </WhiteTextTypography>
            <Link to="/search">
              <Button variant="contained" className={classes.landingButton}>
                <WhiteTextTypography variant="h6">
                  EXPLORE NOW{" "}
                </WhiteTextTypography>
              </Button>
            </Link>
          </div>
        </Container>
      </div>
      <Intro />
    </>
  );
}

export default LandingPage