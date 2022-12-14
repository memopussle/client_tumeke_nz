import React from "react";
import { Typography, Paper, Container, Button, Box } from "@material-ui/core";
import useStyles from "./styles.js";
import { Link } from "react-router-dom";

const Hotels = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <div className={classes.sectionMargin}>
        <div className="restaurants-background">
          <Paper elevation={3} className={classes.restaurantText}>
            <Typography variant="h4">Top dinings in New Zealand</Typography>
            <Typography variant="body1" className={classes.smallMargin}>
              New Zealand dining is right up there with some of the best dining
              in the world. Theres variety, skill, passion and deliciousness in
              restaurants from award-winning places to understated local
              favourites. These are the unique restaurants that are tucked away
              in corners of the country. Some are on boats, others are mountain
              top experiences.
            </Typography>
            <Box>
              <Button
                component={Link}
                to="/search"
                variant="contained"
                className={classes.landingButton}
                color="primary"
              >
                <Typography variant="body1">SEARCH NOW</Typography>
              </Button>
            </Box>
          </Paper>
        </div>
      </div>
    </Container>
  );
};

export default Hotels;
