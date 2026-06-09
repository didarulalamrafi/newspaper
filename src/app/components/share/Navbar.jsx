"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvater from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user, "session");
  const imageSrc =
    typeof user?.image === "string" &&
    (user.image.startsWith("http") || user.image.startsWith("/"))
      ? user.image
      : userAvater;
  return (
    <div className="flex justify-between container mx-auto my-4">
      <div></div>
      <ul className="flex justify-between gap-2 text-gray-700">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      {user ? (
        <div className="flex justify-between items-center gap-3">
          <h2>Hello {user?.name}</h2>
          <Image src={imageSrc} width={50} height={50} alt="User Avatar" />
          <button className="btn btn-primary">
            <Link
              href={"/login"}
              onClick={async () => await authClient.signOut()}
            >
              Log out
            </Link>
          </button>
        </div>
      ) : (
        <button className="btn btn-primary">Login</button>
      )}
    </div>
  );
};

export default Navbar;
