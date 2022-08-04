import React from "react";
import { Typography, Paper, Container, Grid, Button} from "@material-ui/core";
import useStyles from "./styles.js";
import { withStyles } from "@material-ui/core/styles";
import restaurant from "./img/resutaurant.jpg";
const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

const Hotels = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <div className={classes.sectionMargin}>
        <img
          src={restaurant}
          alt="restaurant"
          className={classes.restaurantImg}
        />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className={classes.restaurantWrapper}>
              <Typography variant="h4">Top dinings in New Zealand</Typography>
              <Typography variant="body1">
                New Zealand dining is right up there with some of the best
                dining in the world. Theres variety, skill, passion and
                deliciousness in restaurants from award-winning places to
                understated local favourites. These are the unique restaurants
                that are tucked away in corners of the country. Some are on
                boats, others are mountain top experiences.
              </Typography>
              <Button variant="contained"><WhiteTextTypography>SEARCH NOW</WhiteTextTypography></Button>
            </Paper>
          </Grid>
            
        </Grid>
      </div>
    </Container>
  );
};

export default Hotels;
