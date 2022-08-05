import React from "react";
import useStyles from "./styles.js";
import { Grid, Container, Box, Typography } from "@material-ui/core";
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
                    <Typography variant="body2">Tu Meke NZ</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption">
                      <LocalPhoneIcon /> +84 20 272 6890
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption">
                      <MailOutlineIcon /> example@info.com
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} md={3}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="body2">Tours</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption">Adventure tours</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption">Private tous</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption">Ultra tours</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} md={3}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="body2">See & Dos</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption">Hiking</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption">Sailing</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption">Adventure sports</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} md={3}>
                <Grid item xs={12}>
                  <Typography variant="body2">Explor new places</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption">Restaurants</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption">Hotels</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption">Attractions</Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.footerBottom}>
                <hr className={classes.break} />
                <Typography variant="caption">
                  &#169; 2002 Copyright Tu Meke NZ
                </Typography>
              </Grid>
            </Grid>
    
        </Box>
    
    );
};

export default Footer;
