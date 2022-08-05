import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Container,
  Paper,
  Button,
  Box,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import ImageSlider from "./ImageSlider";
import formatDate from "../components/formatDate";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import useStyles from "./styles.js";
import HistoryIcon from "@material-ui/icons/History";
import { withStyles } from "@material-ui/core/styles";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import Header from "../LandingPage/Header";
import Footer from "../components/Footer/Footer";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

const EachTour = () => {
  const classes = useStyles();
  const { id } = useParams();

  const [tour, setTour] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/tours/${id}`);

      if (response.ok === false) {
        return;
      }

      const data = await response.json();
      setTour(data);
    };

    fetchData();
  }, [id]);

  if (tour === undefined) {
    return "Loading...";
  }

  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <Grid container spacing={4} className={classes.sectionMargin}>
          <Grid item xs={12}>
            <Typography variant="h4">{tour?.title}</Typography>
            <div className={classes.marginTop}>
              <StarIcon style={{ color: "#f7981d", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#f7981d", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#f7981d", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#f7981d", fontSize: "1.2rem" }} />
              <StarBorder style={{ color: "#f7981d", fontSize: "1.2rem" }} />
              4.8
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <ImageSlider tour={tour} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} className={classes.bookWrapper}>
              <Grid container>
                <Grid item xs={10}>
                  <Typography variant="subtitle2">
                    <CalendarTodayIcon /> {formatDate(tour?.date)}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="subtitle2">
                    <PersonOutlineIcon /> {tour?.group_size}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container className={classes.marginTop}>
                <Grid item xs={8}>
                  <Typography variant="subtitle2">Book in advance</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">
                    From ${tour?.price} per {tour?.per}
                  </Typography>
                </Grid>
              </Grid>

              <Button variant="contained" className={classes.standardMargin}>
                <WhiteTextTypography>BOOK NOW</WhiteTextTypography>
              </Button>
              <Typography variant="subtitle2">
                <HistoryIcon /> Free Cancellation
              </Typography>
              <Grid item xs={12} className={classes.standardMargin}>
                <Typography variant="h6">About</Typography>
                <Typography variant="body1" className={classes.marginTop}>
                  {tour?.description}
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Paper variant="outlined" className={classes.detailsWrapper}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Typography variant="body2">Snap Shot: </Typography>
              <Typography variant="h6" className={classes.standardMargin}>
                {tour?.tour_snapshot}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Typography variant="body1">
                    <AccessTimeIcon /> Duration: {tour?.duration}
                  </Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Typography variant="body1">
                    <DirectionsBusIcon /> Near public transportation:{" "}
                    {tour?.near_transport}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="body1">
                    <ConfirmationNumberIcon /> Ticket type: {tour?.ticket_type}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box className={classes.marginTop}>
            <Typography variant="body1" className={classes.highlights}>
              Highlights
            </Typography>
            {tour?.highlights.map((hightlight) => (
              <div>
                <Typography variant="body1"> • {hightlight}</Typography>
              </div>
            ))}
          </Box>
          <Box className={classes.marginTop}>
            <Typography variant="body1" className={classes.highlights}>
              Know before you go
            </Typography>
            {tour?.additional_info.map((addInfo) => (
              <div>
                <Typography variant="body1"> • {addInfo}</Typography>
              </div>
            ))}
          </Box>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
};

export default EachTour;
