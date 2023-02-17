import React from "react";
import { Box, Button, MenuItem,Select, makeStyles } from "@material-ui/core";
const UseStyles=makeStyles({
    wraper:{
    backgroundColor:'#FFF',
    display:'flex',
    bocShadow:'0px,1px,5px rgba(0,0,0,0.1)',
    borderRadius:"5px",
    "& > *":{
        flex :1,
        height: "45px",
        margin:"8px",
    },
    
       } })
export default (props) => 
{
const classes=UseStyles()
  return (
    <Box p={2} mt={-5} className={classes.wraper}>
      <Select disableUnderline variant="filled"  defaultValue="Full time">
        <MenuItem value="Full time"> Full time</MenuItem>
        <MenuItem value="Part time"> Part time</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem>
      </Select>
      <Select disableUnderline variant="filled" defaultValue="Remote">
        <MenuItem value="Remote"> Remote</MenuItem>
        <MenuItem value="In Office"> In Office</MenuItem>
      </Select>
      <Button variant="contained" color="primary" float='right' disableElevation>
          Serch
        </Button>
    </Box>
  );
}
