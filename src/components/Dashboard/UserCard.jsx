import React from "react";
import styles from "./UserCard.module.css";

const UserCard = ({ title, amount }) => {
  return (
    <div className={styles.user_card}>
      <h3>{title}</h3>
      <p>${amount}</p>
    </div>
  );
};

export default UserCard;
