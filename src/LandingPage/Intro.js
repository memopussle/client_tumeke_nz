import React from "react";
import { Container, Grid, Box, Typography} from "@material-ui/core";

const Intro = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
             <Box>
                          <Typography variant="h3">
                          In New Zealand, epic landscapes brim with geological drama and harbor the rich 
                          </Typography>           
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>xs=4</div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Intro;
