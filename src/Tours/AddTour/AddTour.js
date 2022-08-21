import React, { useState } from "react";
import Header from "../../LandingPage/components/Header";
import Footer from "../../components/Footer/Footer";
import Input from "./Input";
import AddImage from "./AddImage";
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

const AddProperty = () => {
  const [tourData, setTourData] = useState({
    title: "",
    price: 0,
    per: 0,
    description: "",
    date: "",
    img: [],
    duration: "",
    ticketType: "",
    groupSize: 0,
    nearTransport: "",
    additionalInfo: [],
    tourSnapshot: "",
    hightlights: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    //fetching a new tour to database
    fetch("http://localhost:5000/tours", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tourData), //convert to json
    }).then(() => {
      console.log("new tour added");
    });

    console.log(tourData);
  };

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Typography variant="h3">Add Tour</Typography>

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
              label="Price"
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
              value={tourData.ticketType}
              onChange={(e) =>
                setTourData({ ...tourData, ticketType: e.target.value })
              }
            />
            <Grid item xs={6}>
              <Box display="flex" flexDirection="column">
                <InputLabel id="transport">Near Transport</InputLabel>

                <Select
                  value={tourData.nearTransport}
                  onChange={(e) =>
                    setTourData({ ...tourData, nearTransport: e.target.value })
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
              value={tourData.groupSize}
              onChange={(e) =>
                setTourData({
                  ...tourData,
                  groupSize: parseInt(e.target.value),
                })
              }
              half
            />

            <Input
              name="snapshot"
              label="Tour Snapshot"
              type="text"
              value={tourData.tourSnapshot}
              onChange={(e) =>
                setTourData({ ...tourData, tourSnapshot: e.target.value })
              }
            />
            <Input
              name="highlights"
              label="Tour hightlights"
              type="text"
              value={tourData.hightlights}
              onChange={(e) =>
                setTourData({
                  ...tourData,
                  hightlights: e.target.value.split(","),
                })
              }
            />
            <Input
              name="information"
              label="Additional Information"
              value={tourData.additionalInfo}
              onChange={(e) =>
                setTourData({
                  ...tourData,
                  additionalInfo: [e.target.value.split(",")],
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
                Photos (please choose 3 photos)
              </InputLabel>

              <AddImage tourData={tourData} setTourData={setTourData} />
            </Grid>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </form>
      </Container>

      <Footer />
    </>
  );
};

export default AddProperty;
