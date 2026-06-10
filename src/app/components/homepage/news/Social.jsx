"use client"
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Social = () => {
  const handleLoginWithGoogle = async ()=>{
    const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data, "data")
  }
  return (
    <div className="text-center my-2">
      <h3>Login with</h3>
      <div className="flex flex-col gap-2">
        <button className="btn" onClick={handleLoginWithGoogle}>
          {" "}
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn">
          <FaGithub />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default Social;
