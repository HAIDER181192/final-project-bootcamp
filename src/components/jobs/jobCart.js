import React from "react";
import { Box, Grid, Typography, Button, makeStyles } from "@material-ui/core";
import { differenceInBusinessDays, differenceInMinutes } from "date-fns";

export default function JobListing(props) {
  const classes = makeStyles((theme) => ({
    wrapper: {
      border: " 2px solid #e8e8e8",
      alignItems: "center",
      "&:hover": {
        boxShadow: "0px 5px 25px rgba(0, 0, 0, 0.1)",
        borderLeft: "6px solid #40D64E4",
        transition: ".8s",
      },
    },
    companyName: {
      fontSize: "13.5px",
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(0.75),
      borderRadius: "5px",
      display: "inline-block",
      fontWeight: 600,
    },
    skillChip: {
      margin: theme.spacing(0.5),
      padding: theme.spacing(0.75),
      fontSize: "14.5px",
      borderRadius: "5px",
      transition: ".3s",
      cursor: "pointer",
      fontWeight: 600,
      display: "inline-block",
      backgroundColor: theme.palette.secondary.main,
      color: "#fff",
    },
  }))();

  return (
    <Box p={2} className={classes.wrapper}>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography variant="subtitle1">{props.title}</Typography>
          <Typography className={classes.companyName} variant="subtitle1">
            {props.companyName}
          </Typography>
        </Grid>
        <Grid item xs>
          {props.Skills.map((skill) => {
            return (
              <Grid key={skill} className={classes.skillChip}  item>
                {skill}
              </Grid>
            );
          })}
        </Grid>
        <Grid item container direction="column" xs>
          <Grid item>
            <Typography variant="caption">
              {differenceInBusinessDays(Date.now(), props.postedOn)}days|{" "}
              {props.type} | {props.location}
            </Typography>
          </Grid>
          <Grid item>
            <Box mt={1}>
              <Button variant="contained" color="primary">
                Check
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
