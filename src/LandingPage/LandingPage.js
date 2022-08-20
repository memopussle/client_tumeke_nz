import React from "react";
import "./styles.css";
import { Container, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import useStyles from "./components/styles.js";
import { Restaurants, Hotels, Services, Intro, Header } from "./index";
import Footer from "../components/Footer/Footer";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <div className="landing-page">
        <Container maxWidth="xl">
          <Header />
          <div className={classes.landingBox}>
            <WhiteTextTypography
              variant="h1"
              style={{ textAlign: "center", fontWeight: "600" }}
            >
              NEW ZEALAND
            </WhiteTextTypography>
            <WhiteTextTypography variant="h6">
              To the world of an incredible vacation.
            </WhiteTextTypography>

            <Button
              variant="contained"
              component={Link}
              to="/search"
              className={classes.landingButton}
            >
              <WhiteTextTypography variant="h6">
                EXPLORE NOW
              </WhiteTextTypography>
            </Button>
          </div>
        </Container>
      </div>
      <Container maxWidth="xl">
        <Intro />
        <Services simplified />

        <Hotels />
        <Restaurants />
      </Container>
      <Footer />
    </>
  );
};

export default LandingPage;
