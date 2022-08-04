import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./styles.js";
import { withStyles } from "@material-ui/core/styles";
const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

const Hotels = () => {
  const classes = useStyles();
  return (
    <div>
  
          <Typography variant="h4">Top Places to eat in New Zealand</Typography>
  
    </div>
  );
};

export default Hotels;
