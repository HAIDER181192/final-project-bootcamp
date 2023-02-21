import React, { useState } from "react";
import { Box, Button, MenuItem,Select, makeStyles,CircularProgress } from "@material-ui/core";
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
  const [loading,setloading]=useState(false)
  const [jobSearch, setJobSearch] = useState({
    type: "Full time",
    location: "Remote"
  });
  const handleChange = (e) => {
    e.persist();
    setJobSearch((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };
  const serch=async()=>{
setloading(true);
await props.fetchjobscustom(jobSearch);
setloading(false);
  }
 const classes=UseStyles()
  return (
    <Box p={2} mt={-5} className={classes.wraper}>
      <Select onChange={handleChange} disableUnderline value={jobSearch.type} name="type" variant="filled"  defaultValue="Full time">
        <MenuItem value="Full time"> Full time</MenuItem>
        <MenuItem value="Part time"> Part time</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem>
      </Select>
      <Select onChange={handleChange} disableUnderline value={jobSearch.location} name="location" variant="filled" defaultValue="Remote">
        <MenuItem value="Remote"> Remote</MenuItem>
        <MenuItem value="In Office"> In Office</MenuItem>
      </Select>
      <Button onClick={serch} disabled={loading} variant="contained" color="primary" float='right' disableElevation>
      {loading ? (
              <CircularProgress color="secondary" size={20} />
            ) : (
              "serch"
            )}
        </Button>
    </Box>
  );
}
