// import React from "react";
// import { Outlet } from "react-router-dom";
// import Header from "../Navbar";

import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const MainLayout = () => {
  return (
    <div>
        <Navbar/>
      {/* <Header /> */}
      <Outlet />
    </div>
  );
};

export default MainLayout;