"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link href={href} className={path === href ? "active" : undefined}>
      {children}
    </Link>
  );
};

export default NavLink;
