"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children, className }) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <Link
      href={href}
      className={`${isActive ? "border-b-2 border-amber-300" : ""}, ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
