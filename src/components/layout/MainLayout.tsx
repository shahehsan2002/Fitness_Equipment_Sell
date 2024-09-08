import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Navbar";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;