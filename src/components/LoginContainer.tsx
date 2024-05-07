import { useState } from "react";
import styles from "@/src/app/loginpage/page.module.css";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const LoginContainer = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  const handleSignInClick = () => {
    const router = useRouter();
    router.push("./src/app/lobby/page.tsx");
  };

  const handleSignUpClick = () => {
    const router = useRouter();
    router.push("./src/app/lobby/page.tsx");
  };

  return (
    <div className={styles.body}>
      <div
        className={`${styles.container} ${isActive ? styles.active : ""}`}
        id="container"
      >
        <div className={`${styles.formContainer} ${styles.signUp}`}>
          <form>
            <h1 className={styles.black1}>Create Account</h1>
            <span className={styles.black2}>Use your email to register</span>
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <button className={styles.outside} onClick={handleSignInClick}>
              Register Account
            </button>
          </form>
        </div>
        <div className={`${styles.formContainer} ${styles.signIn}`}>
          <form>
            <h1 className={styles.black1}>Sign In</h1>
            <span className={styles.black2}>
              Use your email and password to sign in
            </span>
            <input type="text" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <Link href="/forgot-password">Forgot Your Password?</Link>
            <button className={styles.outside} onClick={handleSignInClick}>
              Sign In
            </button>
          </form>
        </div>
        <div className={styles.toggleContainer}>
          <div className={styles.toggle}>
            <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
              <h1 className={styles.white1}>Welcome to LiDom</h1>
              <p>
                Encode your personal details to use all of the site features
              </p>
              <button
                className={`${styles.hidden} ${isActive ? "" : styles.visible}`}
                id="login"
                onClick={handleLoginClick}
              >
                Login
              </button>
            </div>
            <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
              <h1 className={styles.white1}>New Here?</h1>
              <p>Register Account to use all of the site features</p>
              <button
                className={`${styles.hidden} ${isActive ? "" : styles.visible}`}
                id="register"
                onClick={handleRegisterClick}
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
