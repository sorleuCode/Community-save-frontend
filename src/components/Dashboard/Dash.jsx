import React from "react";
import styles from "./PaymentHistory.module.css";

const Dash = () => {
  return (
    <div>
      <header className={styles.dash_header}>
        <div className={styles.welcome}>
          <h2>
            Welcome, <span className={styles.username}>Adejare02!</span>
          </h2>
        </div>
        <div className={styles.profilePic}>
          <img src="../public/kenny.jpg" alt="Profile" />
        </div>
      </header>
      <div className={styles.dashboard}>
        <div className={styles.earnings}>
          <h2>Total Earnings</h2>
          <p className={styles.earn}>#430.00</p>
          <span>as of 01-December 2022</span>
        </div>
        <div className={styles.contributed}>
          <h2>Total Contributed</h2>
          <p className={styles.contribute}>-#400.00</p>
          <span>as of 01-December 2022</span>
        </div>
      </div>
    </div>
  );
};

export default Dash;
