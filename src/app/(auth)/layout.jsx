import React from "react";
import Navbar from "../components/share/Navbar";

const AuthLayout = ({ childern }) => {
  return (
    <>
      <Navbar></Navbar>
      {childern}
    </>
  );
};

export default AuthLayout;
