import React from "react";
import { Container, Grid, Box, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import intro from "./img/intro.jpg"
import useStyles from "./styles.js";
const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

const Intro = () => {
    const classes = useStyles();
  return (
    <div>
      <Container maxWidth="xl">
        <Grid container spacing={10} className={classes.sectionMargin}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h4">
                In New Zealand, epic landscapes brim with geological drama and
                harbor the rich cultural heritage of the Maori.
              </Typography>
              <Typography variant="body1" className={classes.marginParagraph}>
                Venture from the bucolic North Island to the Southern Alps,
                where soaring peaks unfurl into majestic fjords, and witness
                age-old Maori traditions in the midst of a volcanic wonderland.
                Encounter a wealth of unusual creatures in subtropical wildlife
                sanctuaries, and discover vibrant lakeside cities that tell the
                stories of the diverse peoples that call this Pacific nation
                home.
              </Typography>
              <Button variant="contained" className={classes.marginParagraph}>
                <WhiteTextTypography>READ MORE</WhiteTextTypography>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={intro} alt="intro" className={classes.introImage} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Intro;
