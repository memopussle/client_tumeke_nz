import React, { useState } from "react";
import Header from "../../LandingPage/components/Header";
import Footer from "../../components/Footer/Footer";
import Input from "./Input";
import {
  Typography,
  Container,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";

import FileBase64 from "react-file-base64";

const AddProperty = () => {
  const [nearTransport, setNearTransport] = useState("");

  const [tourData, setTourData] = useState({
    title: "",
    price: 0,
    per: "",
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
    console.log(tourData);
  };



  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Typography variant="h3">Add Tour</Typography>
        <form noValidate onSubmit={handleSubmit}>
          <Input
            name="title"
            label="Title"
            value={tourData.title}
            onChange={(e) =>
              setTourData({ ...tourData, title: e.target.value })
            }
          />
          <Input
            name="price"
            label="Price"
            value={tourData.price}
            onChange={(e) =>
              setTourData({ ...tourData, price: e.target.value })
            }
          />
          <TextField name="person" label="Person" variant="outlined" value="" />
          <TextField
            name="description"
            label="Description"
            variant="outlined"
            value={tourData.description}
            onChange={(e) =>
              setTourData({ ...tourData, description: e.target.value })
            }
            fullWidth
          />
          <TextField name="date" label="Date" variant="outlined" value="" />
          <TextField
            name="duration"
            label="Duration"
            variant="outlined"
            value=""
          />
          <InputLabel id="transport" display="inline-flex">
            Photos (please choose 3 photos)
          </InputLabel>

       

          <TextField
            name="ticket"
            label="Ticket Type"
            variant="outlined"
            value=""
          />

          <InputLabel id="transport" display="inline-flex">
            Near Transport
          </InputLabel>

          <Select
            value={nearTransport}
            onChange={(e) => setNearTransport(e.target.value)}
          >
            <MenuItem value="yes">Yes</MenuItem>
            <MenuItem value="no">No</MenuItem>
          </Select>
          <TextField
            name="size"
            label="Group Size"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            name="date"
            label="Booking"
            type="datetime-local"
            defaultValue="2022-09-24T10:30"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            name="snapshot"
            label="Tour Snapshot"
            variant="outlined"
            value=""
            fullWidth
          />
          <TextField
            name="highlights"
            label="Tour hightlights"
            variant="outlined"
            value=""
            fullWidth
          />
          <TextField
            name="information"
            label="Additional Information"
            variant="outlined"
            value=""
            fullWidth
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Container>

      <Footer />
    </>
  );
};

export default AddProperty;
