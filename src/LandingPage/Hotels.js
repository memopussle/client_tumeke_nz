import React from "react";
import { Typography, Grid, Container, Button } from "@material-ui/core";
import useStyles from "./styles.js";
import hotels from "./img/hotel.jpg";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

const Hotels = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="xl">
        <Grid container spacing={10} className={classes.sectionMargin}>
          <Grid item xs={12} md={6}>
            <img src={hotels} alt="intro" className={classes.introImage} />
          </Grid>
          <Grid item xs={12} md={6} className={classes.introText}>
            <Typography variant="h4">Where to stay in New Zealand</Typography>
            <Typography variant="body1" className={classes.marginParagraph}>
              Hotels in New Zealand come in all shapes, sizes and personalities.
              From budget to luxury, there are hundreds of hotels to choose from
              around the country. <br /> <br />
              In New Zealand you'll find the top international hotel chains,
              such as Westin, Accor, Hilton, Hyatt, Rydges and
              InterContinential. These are generally located in the major cities
              - Auckland, Wellington, ChristChurch, and in key holiday
              destination, such as Rotorua, Queenstown and Nelson.
            </Typography>

            <div>
              <Link to="/search">
                <Button variant="contained" className={classes.marginParagraph}>
                  <WhiteTextTypography>SEARCH NOW</WhiteTextTypography>
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Hotels;
