import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  Grid,
  ThemeProvider,
  Button,
} from "@material-ui/core";
import Theme from "./theme/Theme";
import Header from "./components/header/Header";
import Serch from "./components/serchbar/Serch";
import JobCart from "./components/jobs/jobCart";
import JobModel from "./components/jobs/jobModel";
import { firestore, app } from "./firebase/Config";
import { Close as CloseIcon } from "@material-ui/icons";
import ViewJobModel from "./components/jobs/viewJobModel";
export default () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setloading] = useState(true);
  const [Model, setModel] = useState(false);
  const [customSerch, setCustomSerch] = useState(false);
  const [jobview, setJobview] = useState({});
  const fetchJobs = async () => {
    setCustomSerch(false);
    setloading(true);
    const req = await firestore
      .collection("jobs")
      .orderBy("postedOn", "desc")
      .get();
    const tempJobs = req.docs.map((job) => ({
      ...job.data(),
      id: job.id,
      postedOn: job.data().postedOn.toDate(),
    }));

    setJobs(tempJobs);
    setloading(false);
  };
  const customSerchjobs = async (jobSearch) => {
    setloading(true);
    setCustomSerch(true);
    const req = await firestore
      .collection("jobs")
      .orderBy("postedOn", "desc")
      .where("location", "==", jobSearch.location)
      .where("type", "==", jobSearch.type)
      .get();
    const tempJobs = req.docs.map((job) => ({
      ...job.data(),
      id: job.id,
      postedOn: job.data().postedOn.toDate(),
    }));

    setJobs(tempJobs);
    setloading(false);
  };
  const postJob = async (jobDetails) => {
    await firestore.collection("jobs").add({
      ...jobDetails,
      postedOn: app.firestore.FieldValue.serverTimestamp(),
    });
    fetchJobs();
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <ThemeProvider theme={Theme}>
      <Header openjobModel={() => setModel(true)} />
      <JobModel
        postJob={postJob}
        Model={Model}
        closeModel={() => setModel(false)}
      />
      <ViewJobModel job={jobview} closeModel={()=>setJobview({})} />
      <Box mb={3}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Serch fetchjobscustom={customSerchjobs} />
            {loading ? (
              <Box display="flex" justifyContent="center">
                <CircularProgress />
              </Box>
            ) : (
              <>
                {customSerch && (
                  <Box mt={2} my={1} display="flex" justifyContent="flex-end">
                    <Button onClick={() => fetchJobs()}>
                      <CloseIcon size={20} />
                      Custom Search
                    </Button>
                  </Box>
                )}
                {jobs.map((job) => (
                  <JobCart open={()=>setJobview(job)} key={job.id} {...job} />
                ))}
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};
