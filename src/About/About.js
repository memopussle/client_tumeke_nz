import React, { useRef, useState } from "react";
import useStyles from "./styles.js";
import Header from "../LandingPage/Header.js";
import emailjs from "@emailjs/browser";

import { Grid, Typography, Container, Button,Paper } from "@material-ui/core";
import about1 from "./img/about1.jpg";
import about2 from "./img/about2.jpg";
import Footer from "../components/Footer/Footer.js";


const About = () => {
  const classes = useStyles();
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8gps3fs",
        "template_lctgvtg",
        form.current,
        "au-VBJJ7FMVOzcApK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(e.target.value);

    setMessage("Email sent!");

    e.target.reset();
  };
  return (
    <div>
      <Header />
      <Container maxWidth="xl" className={classes.sectionMargin}>
        <Paper variant="outlined" className={classes.aboutWrapper}>
          <Grid container spacing={10}>
            <Grid item xs={12} md={8}>
              <div className={classes.imgWrapper}>
                <img src={about1} alt="about us" className={classes.aboutImg} />
              </div>
            </Grid>
            <Grid item xs={12} md={4} className={classes.imgWrapper}>
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
            </Grid>
          </Grid>
        </Paper>
        <Paper variant="outlined" className={classes.aboutWrapper}>
          <Grid container spacing={10}>
            <Grid item xs={12} md={5} className={classes.standardMargin}>
              <Typography variant="h4">Talk to us!</Typography>
              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <Button
                  variant="contained"
                  type="submit"
                  value="Send"
                  className={classes.sendButton}
                >
                  <Typography variant="body1"> SEND</Typography>
                </Button>
              </form>
              <Typography variant="h6" className={classes.normalMargin}>
                {message}
              </Typography>
            </Grid>
            <Grid item xs={12} md={7} className={classes.imgWrapper}>
              <img src={about2} alt="about us" className={classes.aboutImg} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
