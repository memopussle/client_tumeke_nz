import React, { useState, useEffect } from "react";
import Header from "../../LandingPage/components/Header";
import Footer from "../../components/Footer/Footer";
import Input from "./Input";
import AddImage from "./AddImage";
import useStyles from "./styles.js";
import {
  useAddToursMutation,
  useGetToursQuery,
  useUpdateTourMutation,
} from "../../features/api/apiSlice";
import {
  Typography,
  Container,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  Grid,
} from "@material-ui/core";

const AddTour = ({ setCurrentId, currentId }) => {
  console.log(currentId);
  const classes = useStyles();
  const [addTour] = useAddToursMutation();
  
  const { data: tours } = useGetToursQuery();
  console.log(tours);
  // if currentId exists -> find that specific post
  const chosenTour = tours?.find((tour) => tour._id === currentId);
const [updateTour] = useUpdateTourMutation(chosenTour);

  useEffect(() => {
    if (chosenTour) {
      setTourData(chosenTour);
      console.log(tourData);
    }
  }, []);

  const [tourData, setTourData] = useState({
    title: "",
    price: 0,
    per: 0,
    description: "",
    date: "",
    img: [],
    duration: "",
    ticket_type: "",
    group_size: 0,
    near_transport: "",
    additional_info: [],
    tour_snapshot: "",
    highlights: [],
  });

  //when finding that specific post, populate it on form

  const handleSubmit = (e) => {
    e.preventDefault();

    //if the currentID exists -> update the post
    if (currentId) {
      updateTour({ ...tourData, [e.target.name]: e.target.value });
      console.log(tourData)
    } else {
      addTour(tourData);
    }

    clear();
  };

  const clear = () => {
    setTourData({
      title: "",
      price: 0,
      per: 0,
      description: "",
      date: "",
      img: [],
      duration: "",
      ticket_type: "",
      group_size: 0,
      near_transport: "",
      additional_info: [],
      tour_snapshot: "",
      highlights: [],
    });
  };

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Typography variant="h4" className={classes.title}>
          Add Tour
        </Typography>

        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Input
              name="title"
              label="Title"
              value={tourData.title}
              onChange={(e) =>
                setTourData({ ...tourData, title: e.target.value })
              }
              type="text"
            />

            <Input
              name="price"
              label="Price (NZD)"
              type="number"
              value={tourData.price}
              onChange={(e) =>
                setTourData({ ...tourData, price: parseInt(e.target.value) })
              }
              half
            />
            <Input
              name="person"
              label="Per person"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={parseInt(tourData.per)}
              onChange={(e) =>
                setTourData({ ...tourData, per: parseInt(e.target.value) })
              }
              half
            />

            <Input
              name="description"
              label="Description"
              value={tourData.description}
              onChange={(e) =>
                setTourData({ ...tourData, description: e.target.value })
              }
              type="text"
            />

            <Input
              name="duration"
              label="Duration"
              variant="outlined"
              value={tourData.duration}
              onChange={(e) =>
                setTourData({ ...tourData, duration: e.target.value })
              }
              type="text"
            />

            <Input
              name="ticket"
              label="Ticket Type"
              variant="outlined"
              type="text"
              value={tourData.ticket_type}
              onChange={(e) =>
                setTourData({ ...tourData, ticket_type: e.target.value })
              }
            />
            <Grid item xs={6}>
              <Box display="flex" flexDirection="column">
                <InputLabel id="transport">Near Transport</InputLabel>

                <Select
                  value={tourData.near_transport}
                  onChange={(e) =>
                    setTourData({ ...tourData, near_transport: e.target.value })
                  }
                >
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                </Select>
              </Box>
            </Grid>

            <Input
              name="size"
              label="Group Size"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={tourData.group_size}
              onChange={(e) =>
                setTourData({
                  ...tourData,
                  group_size: parseInt(e.target.value),
                })
              }
              half
            />

            <Input
              name="snapshot"
              label="Tour Snapshot"
              type="text"
              value={tourData.tour_snapshot}
              onChange={(e) =>
                setTourData({ ...tourData, tour_snapshot: e.target.value })
              }
            />
            <Input
              name="highlights"
              label="Tour hightlights"
              type="text"
              value={tourData.highlights}
              onChange={(e) =>
                setTourData({
                  ...tourData,
                  highlights: e.target.value.split(","),
                })
              }
            />
            <Input
              name="information"
              label="Additional Information"
              value={tourData.additional_info}
              onChange={(e) =>
                setTourData({
                  ...tourData,
                  additional_info: e.target.value.split(","),
                })
              }
              type="text"
            />
            <Input
              name="date"
              type="datetime-local"
              defaultValue="2022-09-24T10:30"
              InputLabelProps={{
                shrink: true,
              }}
              value={tourData.date}
              onChange={(e) =>
                setTourData({ ...tourData, date: e.target.value })
              }
              half
            />
            <Grid item xs={6}>
              <InputLabel id="transport" display="inline-flex">
                Photos (please choose more than 1 photo)
              </InputLabel>

              <AddImage tourData={tourData} setTourData={setTourData} />
            </Grid>
            <Button
              size="large"
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Container>

      <Footer />
    </>
  );
};

export default AddTour;
