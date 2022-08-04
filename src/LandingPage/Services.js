import React from "react";
import useStyles from "./styles.js";
import { Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";

const Services = ({ booking }) => {
  const classes = useStyles();
  console.log(booking);
  const formatDate = (oldDate) => {
    var date = new Date(oldDate);
    const fortmattedDate =
      date.toLocaleTimeString() +
      "," +
      " " +
      date.getDate() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getFullYear();
    return String(fortmattedDate);
  };

  //refortmat date in each data object
  const newBooking = booking.map((eachBooking) => {
    return {
      ...eachBooking,
      date: formatDate(eachBooking.date),
    };
  });

  return (
    <div>
      <Typography variant="h4">Our Tours</Typography>
      {newBooking.map((service) => (
        <div key={service?._id}>
          <Typography variant="h6">{service.title}</Typography>
          <Typography variant="body2">
            Price from ${service.price} per {service.per}
          </Typography>
          <Typography variant="body2">Date: {service.date}</Typography>
          <img src={service.img} alt="service" className={classes.serviceImg} />
          <div>
            <StarIcon style={{ color: "#f7981d", fontSize: "1.2rem" }} />
            <StarIcon style={{ color: "#f7981d", fontSize: "1.2rem" }} />
            <StarIcon style={{ color: "#f7981d", fontSize: "1.2rem" }} />
            <StarIcon style={{ color: "#f7981d", fontSize: "1.2rem" }} />
            <StarBorder style={{ color: "#f7981d", fontSize: "1.2rem" }} />
            4.8
          </div>
          <Typography variant="body1">{service.description}</Typography>
        </div>
      ))}
    </div>
  );
};

export default Services;
