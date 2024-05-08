"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useTheme } from "@/context/ThemeContext";

const Links = [
  {
    id: 1,
    title: "Affiliated Libraries",
    url: "/affiliated",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Account",
    url: "#",
  },
];
const { mode } = useTheme();

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image
          src={mode ? "/lidom.png" : "/lidomW.png"}
          alt="logo"
          width={60}
          height={30}
        />
      </Link>
      <div className={styles.Links}>
        <DarkModeToggle />
        {Links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
