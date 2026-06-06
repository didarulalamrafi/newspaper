// import React from "react";
import Navbar from "../components/share/Navbar";
import Header from "../components/share/Header";
import BreakingNews from "../components/share/BreakingNews";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default MainLayout;
