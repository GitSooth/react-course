import React from "react";
import Navbar from "./assets/components/navbar";
import Hero from "./assets/components/Hero";
import HomeCard from "./assets/components/HomeCard";
import JobListings from "./assets/components/JobListings";
import ViewAllJobs from "./assets/components/ViewAllJobs";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCard />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default App;
