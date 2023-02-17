import React from "react";
import { Box, Grid, Typography, Button,} from "@material-ui/core";
export default (props) =>{
  return(
    <Box py={10} bgcolor="secondary.main" color="white">
    <Grid container justify="center">
      <Grid item x6={10}>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Typography variant="h4">job Listing Portal </Typography>
        <Button variant="contained" color="primary"disableElevation>
          Post a Job
        </Button>
        </Box>
      </Grid>
    </Grid>
  </Box>
  );
}

