import React, { useState, useEffect } from "react";
import useStyles from "../LandingPage/styles.js";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Button,
  Container,
  Box
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import { Link } from "react-router-dom";
import formatDate from "../components/formatDate";
import Header from "../LandingPage/Header.js";
import Footer from "../components/Footer/Footer.js";
import { useLocation } from "react-router-dom";
const Services = () => {
  const classes = useStyles();
  const [booking, setBooking] = useState([]);
  const { pathname } = useLocation();

  const fetchData = async () => {
    const response = await fetch("https://tumekenz.herokuapp.com/tours");
    const data = await response.json();
    setBooking(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(booking);

  //refortmat date in each data object
  const newBooking = booking.map((eachBooking) => {
    return {
      ...eachBooking,
      date: formatDate(eachBooking.date),
    };
  });

  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <div className={classes.sectionMargin}>
          <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        
            <Typography variant="h4">Our Tours</Typography>
            {pathname === "/tours" && (
              <Button variant="outlined">
                <Typography variant="body1">ADD PROPERTY</Typography>
              </Button>
            )}
          </Box>

          <Grid container spacing={4} className={classes.landingButton}>
            {newBooking.map((service) => (
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
                      Price from ${service?.price} per {service?.per}
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
                    <Link to={`/tours/${service._id}`} className={classes.link}>
                      <Button
                        variant="outlined"
                        className={classes.landingButton}
                      >
                        <Typography variant="body1">VIEW TOUR</Typography>
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
      {pathname === "/tours" && <Footer />}
    </>
  );
};

export default Services;
