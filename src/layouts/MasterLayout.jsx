/* eslint-disable no-unused-vars */
import React from "react";
import AppHeader from "./../components/AppHeader/AppHeader";
import { Outlet } from "react-router-dom";

export const MasterLayout = () => {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};
