import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Posts from "../components/Posts";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Posts />
    </div>
  );
};

export default Home;
