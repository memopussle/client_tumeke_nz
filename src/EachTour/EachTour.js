import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Container,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import ImageSlider from "./ImageSlider";

const EachTour = () => {
  const { id } = useParams();

  const [tour, setTour] = useState();
  console.log(tour);

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

  //img slider
  const slides = tour?.img;


  return (
    <div>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid xs={12}>
            <Typography variant="h4">{tour?.title}</Typography>
            <div>
              <StarIcon style={{ color: "#f7981d", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#f7981d", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#f7981d", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#f7981d", fontSize: "1.2rem" }} />
              <StarBorder style={{ color: "#f7981d", fontSize: "1.2rem" }} />
              4.8
            </div>
          </Grid>
          <Grid item xs={8} md={6}>
      
              <ImageSlider slides={slides} />
 
          </Grid>
          <Grid item xs={8} md={6}>
            grid2
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default EachTour;
