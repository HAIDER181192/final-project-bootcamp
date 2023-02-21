import React, { useState } from "react";
import {
  Box,
  Grid,
  FilledInput,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  makeStyles,
  Button,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
const UseStyles = makeStyles((theme) => ({
  skillChip: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: "14.5px",
    borderRadius: "5px",
    transition: ".3s",
    cursor: "pointer",
    fontWeight: 600,
    display: "inline-block",
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "#FFF",
    },
  },
  included: {
    backgroundColor: theme.palette.secondary.main,
    color: "#FFF",
  },
}));
const initState={
  title: "",
  type: "Full time",
  location: "Remote",
  companyName: "",
  companyUrl: "",
  Skills: [],
  link: "",
  description: "",
}
export default (props) => {
  const [jobs, setjobs] = useState(initState);
  const [loading, isloading] = useState(false);
  const handleChange = (e) => {
    e.persist();
    setjobs((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };
  const addRemoveSkill = (skill) => {
    jobs.Skills.includes(skill)
      ? setjobs((oldState) => ({
          ...oldState,
          skills: oldState.Skills.filter((s) => s !== skill),
        }))
      : setjobs((oldState) => ({
          ...oldState,
          Skills: oldState.Skills.concat(skill),
        }));
  };
  const handleSubmit = async () => {
    for (const feild in jobs ){
    if (typeof jobs[feild] === "string" && !jobs[feild])return;
}
if(!jobs.Skills.length) return;
 isloading (true);
await props.postJob(jobs);
closeModel();
};

const closeModel=()=>{
  setjobs(initState);
  isloading(false);
  props.closeModel();
}
  const classes = UseStyles();
  const Skills = [
    "Javascript",
    "React.js",
    "Node.js",
    "Firefox",
    "MongoDb",
    "Mysql",
    "BootStrap",
  ];


  return (
    <Dialog open={props.Model} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          Post job
          <IconButton onClick={closeModel}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              name="title"
              value={jobs.title}
              autoComplete="off"
              placeholder="Job title *"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              onChange={handleChange}
              name="type"
              value={jobs.type}
              defaultValue="Full time"
              disableUnderline
              variant="filled"
              fullWidth
            >
              <MenuItem value="Full time"> Full time</MenuItem>
              <MenuItem value="Part time"> Part time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              name="companyName"
              value={jobs.companyName}
              autoComplete="off"
              placeholder="comapany Name  *"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              name="companyUrl"
              value={jobs.companyUrl}
              autoComplete="off"
              placeholder="Coampany Url *"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              onChange={handleChange}
              name="location"
              value={jobs.location}
              fullWidth
              disableUnderline
              variant="filled"
            >
              <MenuItem value="Remote"> Remote</MenuItem>
              <MenuItem value="In Office"> In Office</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              name="link"
              value={jobs.link}
              autoComplete="off"
              fullWidth
              placeholder="job link  *"
              disableUnderline
            />
          </Grid>
          <Grid item xs={12}>
            <FilledInput
              onChange={handleChange}
              name="description"
              value={jobs.description}
              autoComplete="off"
              fullWidth
              placeholder="job Description  *"
              disableUnderline
              multiline
              rows={3}
            />
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography>Skills</Typography>
          <Box display="flex">
            {Skills.map((skill) => {
              return (
                <Box
                  onClick={() => addRemoveSkill(skill)}
                  fullWidth
                  className={`${classes.skillChip} ${
                    jobs.Skills.includes(skill) && classes.included
                  }`}
                  key={skill}
                >
                  {skill}
                </Box>
              );
            })}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box
          color="red"
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="caption">*Required fields</Typography>
          <Button
            onClick={handleSubmit}
            variant="contained"
            disableElevation
            color="primary"
            disable={loading}
          >
            {loading ? (
              <CircularProgress color="secondary" size={22} />
            ) : (
              "Post job"
            )}
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};
