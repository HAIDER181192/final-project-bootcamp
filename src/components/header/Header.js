import React from "react";
import { Box, Grid, Typography, Button,} from "@material-ui/core";
export default (props) =>{
  return(
    <Box py={10} bgcolor="secondary.main" color="white">
    <Grid container justify="center" >
      <Grid item xs={10}>
        <Box  display='flex' justifyContent='space-between'>
        <Typography variant="h4"> Open Job Listing Portal </Typography>
        {/* <Button variant="contained" color="primary"disableElevation> */}
        <Button onClick={props.openjobModel}variant="contained" color="primary"disableElevation> 
        post job
        </Button>
        </Box>
      </Grid>
    </Grid>
  </Box>
  );
}

