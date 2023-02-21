import React from "react";
import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography,
    makeStyles,
    Grid,
    Button
  } from "@material-ui/core";
  import { format} from "date-fns"
  import { Close as CloseIcon } from "@material-ui/icons";
  
  const useStyle=makeStyles((theme)=>({
info:{
  '& > *':{
    margin:'4px',
  },
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

}));
  export default (props)=>{
    const classes=useStyle();
         return(
        <Dialog open={!!Object.keys(props.job).length} fullWidth>
             <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {props.job.title} @ {props.job.companyName}
          <IconButton onClick={props.closeModel}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
<Box>
  <Box className={classes.info}  display="flex">
    <Typography variant="caption">postedOn:</Typography>
    <Typography variant="body2">{props.job.postedOn && format(props.job.postedOn,"dd/MMM/yyyy HH:MM")}</Typography>
  </Box>
  <Box className={classes.info}  display="flex">
    <Typography variant="caption">job type:</Typography>
    <Typography variant="body2">{props.job.type}</Typography>
  </Box>
  <Box className={classes.info} display="flex" fontWeight="bold">
    <Typography variant="caption" >job Description:</Typography>
  
    <Typography variant="body2">{props.job.description}</Typography>
  </Box>
  <Box className={classes.info}  display="flex">
    <Typography variant="caption">job location:</Typography>
    <Typography variant="body2">{props.job.location}</Typography>
  </Box>
  <Box className={classes.info}  display="flex">
    <Typography variant="caption">comapany website:</Typography>
    <Typography variant="body2">{props.job.companyUrl}</Typography>
    </Box>
    <Box mt={.5}>
            <Typography variant="caption">Skills</Typography>
            <Grid item xs>
              {props.job.Skills &&
                props.job.Skills.map((skill) => (
                  <Grid key={skill} className={classes.skillChip} item>
                    {skill}
                  </Grid>
                ))}
            </Grid>
          </Box>
</Box>
      </DialogContent>
      <DialogActions>
<Button variant="outlined"
component="a"
href={props.job.link}
target="_blank">
  Apply
</Button>
      </DialogActions>
        </Dialog>
    )
  }