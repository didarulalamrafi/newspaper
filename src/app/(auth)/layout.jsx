import React from "react";
import Navbar from "../components/share/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default AuthLayout;
