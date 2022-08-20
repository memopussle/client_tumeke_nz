import React from "react";
import { Grid, TextField } from "@material-ui/core";

const Input = ({ name, label, half, value, onChange }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={half ? "6" : "12"}>
        <TextField
          name={name}
          label={label}
          variant="outlined"
          fullWidth
          value={value}
          onChange={onChange}
        />
      </Grid>
    </Grid>
  );
};
export default Input;
