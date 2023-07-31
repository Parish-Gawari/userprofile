/* eslint-disable no-unused-vars */
import React from "react";
import Profiles from "../components/Profiles/Profiles";
import AddUser from "./AddUser";
import { useParams } from "react-router-dom";

const Home = () => {
  const { page = "1" } = useParams();
  return (
    <center>
      <h1>User Profiles</h1>
      <Profiles page={page} />
    </center>
  );
};

export default Home;
