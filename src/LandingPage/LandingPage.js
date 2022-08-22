import React from "react";
import "./styles.css";
import { Container, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./components/styles.js";
import { Restaurants, Hotels, Services, Intro, Header } from "./index";
import Footer from "../components/Footer/Footer";


const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <div className="landing-page">
        <Container maxWidth="xl">
          <Header />
          <div className={classes.landingBox}>
            <Typography
              variant="h1"
       
              style={{ textAlign: "center", fontWeight: "600", color: "white" }}
            >
              NEW ZEALAND
            </Typography>
            <Typography variant="h6" style={{color: "white"}}>
              To the world of an incredible vacation.
            </Typography>

            <Button
              variant="contained"
              component={Link}
              to="/search"
              className={classes.landingButton}
              color="primary"
            >
              <Typography variant="body1">
                EXPLORE NOW
              </Typography>
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
