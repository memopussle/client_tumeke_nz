import React, { useState, useEffect } from "react";
import "./styles.css";
import { Container, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import useStyles from "./styles.js";
import { Restaurants, Hotels, Services, Intro, Header } from "./index";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

const LandingPage = () => {
  const classes = useStyles();
  const [booking, setBooking] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/tours");
    const data = await response.json();
    setBooking(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(booking);
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
            <Link to="/search">
              <Button variant="contained" className={classes.landingButton}>
                <WhiteTextTypography variant="h6">
                  EXPLORE NOW
                </WhiteTextTypography>
              </Button>
            </Link>
          </div>
        </Container>
      </div>
      <Container maxWidth="xl">
        <Intro />
        <Services booking={booking} />
        <Hotels />
        <Restaurants />
      </Container>
    </>
  );
};

export default LandingPage;
