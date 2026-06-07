import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="mx-auto text-center mt-4">
      <Image src={logo} width={300} height={200} alt="Logo" />
      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;
