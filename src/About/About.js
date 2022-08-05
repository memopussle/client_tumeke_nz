import React from "react";
import useStyles from "./styles.js";
import Header from "../LandingPage/Header.js";
import {
  Grid,
  Box,
  Typography,
  Container
} from "@material-ui/core";
import about1 from "./img/about1.jpg";
import Footer from "../components/Footer/Footer.js";

const About = () => {
   const classes = useStyles();
  return (
    <div>
      <Header />
      <Container maxWidth="xl" className={classes.sectionMargin}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <div className={classes.imgWrapper}>
              <img src={about1} alt="about us" className={classes.aboutImg} />
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.imgWrapper}>
            <Typography variant="h4">Who are we?</Typography>
            <Typography variant="body1" className={classes.normalMargin}>
              We are very enthusiastic to present our travel agency. Our
              well-established travel agency has been in the industry for more
              than twelve years. We are expert in every minor detail of this
              business and have been recognized by many people within these
              years. Our firm has familiarized the difficulty and aggravations
              of attaining visas and passports. So here we are, to deliver you
              the tension-free foldaway.
            </Typography>
            <Typography variant="body1">
              No matter whether you want to travel national or international, we
              offer the best class service for you. We provide our clients with
              the best sightseer & recreational spots and finest guesthouses in
              economic prices. Our services are prompt and way more competent.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
