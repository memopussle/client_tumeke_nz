import React from "react";
import useStyles from "../LandingPage/components/styles.js";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Button,
  Container,
  Box,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import { Link } from "react-router-dom";
import formatDate from "../components/formatDate";
import Header from "../LandingPage/components/Header.js";
import Footer from "../components/Footer/Footer.js";
import { useLocation } from "react-router-dom";
import { useGetToursQuery } from "../features/api/apiSlice.js";

const Services = ({ simplified }) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const { data: tours, isLoading, isError, error } = useGetToursQuery();

  //define some additional message: loading or error
  if (isLoading) {
    return "Loading...";
  } else if (isError) {
    return `${error}`;
  }

  
  //refortmat date in each data object
  const newBooking = tours?.map((eachBooking) => {
    return {
      ...eachBooking,
      date: formatDate(eachBooking.date),
    };
  });
const toursOnLandingPage = newBooking?.slice(0, 4);
const newTour = simplified ? toursOnLandingPage : newBooking;
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <div className={classes.sectionMargin}>
          <Box display="flex" justifyContent="space-between" flexWrap="wrap">
            <Typography variant="h4">Our Tours</Typography>

            {pathname === "/tours" && (
              <Button variant="outlined" component={Link} to="/addtour">
                <Typography variant="body1">ADD TOURS</Typography>
              </Button>
            )}
          </Box>

          <Grid container spacing={4} className={classes.landingButton}>
            {newTour?.map((service) => (
              <Grid key={service?._id} item xs={12} md={6} lg={3}>
                <Card>
                  <CardMedia
                    src={service?.img[0]}
                    alt="service"
                    className={classes.serviceImg}
                    height="500"
                    component="img"
                  />
                  <CardContent>
                    <Typography variant="h6">{service?.title}</Typography>
                    <Typography variant="body2" className={classes.smallMargin}>
                      Price from ${service?.price} per {service?.per} person
                    </Typography>
                    <Typography variant="body2">
                      Date: {service?.date}
                    </Typography>

                    <div className={classes.smallMargin}>
                      <StarIcon
                        style={{ color: "#f7981d", fontSize: "1.2rem" }}
                      />
                      <StarIcon
                        style={{ color: "#f7981d", fontSize: "1.2rem" }}
                      />
                      <StarIcon
                        style={{ color: "#f7981d", fontSize: "1.2rem" }}
                      />
                      <StarIcon
                        style={{ color: "#f7981d", fontSize: "1.2rem" }}
                      />
                      <StarBorder
                        style={{ color: "#f7981d", fontSize: "1.2rem" }}
                      />
                      4.8
                    </div>
                    <Typography variant="body1">
                      {service?.description}
                    </Typography>

                    <Button
                      variant="outlined"
                      component={Link}
                      to={`/tours/${service._id}`}
                      className={classes.landingButton}
                    >
                      <Typography variant="body1">VIEW TOUR</Typography>
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          {simplified && (
            <Button
              variant="contained"
              component={Link}
              to={"/tours"}
              className={classes.landingButton}
              color="primary"
            >
              <Typography variant="body1">SEE MORE</Typography>
            </Button>
          )}
        </div>
      </Container>
      {pathname === "/tours" && <Footer />}
    </>
  );
};

export default Services;
