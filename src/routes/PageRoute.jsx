/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./../pages/Home";
import AddUser from "../pages/AddUser";
import routes from "./routes.json";
import { MasterLayout } from "../layouts/MasterLayout";

const PageRoute = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<MasterLayout />}>
        <Route index element={<Home />} />
        <Route path={routes.PROFILES} element={<Home />}>
          <Route index element={<Home />} />
          <Route path=":page" element={<Home />} />
        </Route>
        <Route path={routes.ADD_USER} element={<AddUser />} />
      </Route>
      {/* <Route path="*" element={}/> */}
    </Routes>
  );
};

export default PageRoute;
