/* eslint-disable no-unused-vars */
import React from "react";
import AppHeader from "./../components/AppHeader/AppHeader";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const MasterLayout = () => {
  return (
    <div>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
