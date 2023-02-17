import React from "react";
import { useState, useEffect } from "react";
import { Box, CircularProgress, Grid, ThemeProvider } from "@material-ui/core";
import Theme from "./theme/Theme";
import Header from "./components/header/Header";
import Serch from "./components/serchbar/Serch";
import JobCart from "./components/jobs/jobCart";
import JobModel from "./components/jobs/jobModel";
import { firestore,app} from "./firebase/Config";
export default () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setloading] = useState(true);
  const fetchJobs = async () => {
    const req = await firestore
      .collection("jobs")
      .orderBy("postedOn", "desc")
      .get();
    const tempJobs = req.docs.map((job) => ({
      ...job.data(),
      id: job.id,
      postedOn: job.data().postedOn.toDate(),
    }));
    console.log(tempJobs);
    setJobs(tempJobs);
    setloading(false);
  };
  const postJob = async(jobDetails)=>{
  await firestore.collection("jobs").add({
  ...jobDetails,
  postedOn: app.firestore.FieldValue.serverTimestamp(),
  })
};
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <JobModel postJob={postJob}/>
      <Grid containern justify="center">
        <Grid item x6={10}>
          <Serch />
          {loading ? (
            <Box display="flex" justifyContent="center">
              {" "}
              <CircularProgress />
            </Box>
          ) : (
            jobs.map((job) => <JobCart key={job.id} {...job} />)
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
