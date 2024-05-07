"use client";
import React from "react";
import styles from "./page.module.css";
import TypingAnimation from "../../components/TypingAnimation";
import Link from "next/link";

const Lobby = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.Rdesc}>
          Fall in love with a story, one recommendation at a time.
        </p>
        <p className={styles.Ldesc}>Find your perfect match:</p>
        <span className={styles.typed}>
          <TypingAnimation />
        </span>
        <Link href="../search">
          <button className={styles.explore}>
            <div className={styles.button}>
              <div className={styles.circle}>
                <div className={`${styles.icon} ${styles.arrow}`}></div>
              </div>
              <span className={styles.buttonText}>SEARCH</span>
            </div>
          </button>
        </Link>
      </div>
    </>
  );
};
export default Lobby;
