import React from "react";
import useStyles from "./styles.js";
import { Grid, Box, Typography } from "@material-ui/core";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Footer = () => {
  const classes = useStyles();
    return (
     
        <Box className={classes.footerWrapper}>
         
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="body1">Tu Meke NZ</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">
                      <LocalPhoneIcon /> +84 20 272 6890
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">
                      <MailOutlineIcon /> example@info.com
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} md={3}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="body1">Tours</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">Adventure tours</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">Private tous</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">Ultra tours</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} md={3}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="body1">See & Dos</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">Hiking</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">Sailing</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">Adventure sports</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} md={3}>
                <Grid item xs={12}>
                  <Typography variant="body1">Explor new places</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">Restaurants</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">Hotels</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">Attractions</Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.footerBottom}>
                <hr className={classes.break} />
                <Typography variant="body2">
                  &#169; 2022 Copyright Tu Meke NZ
                </Typography>
              </Grid>
            </Grid>
    
        </Box>
    
    );
};

export default Footer;
