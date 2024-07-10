import React from "react";
import styles from "./UserDetails.module.css";

const UserDetails = ({ user }) => {
  return (
    
    <div className={styles.user} >
        <div className={styles.user_details}> 
            <h3>User Information</h3>
      <ul>
        <li>
          <strong>Name:</strong> {user.name}
        </li>
        <li>
          <strong>Email:</strong> {user.email}
        </li>
        <li>
          <strong>Phone:</strong> {user.phone}
        </li>
        <li>
          <strong>Address:</strong> {user.address}
        </li>
        <li>
          <strong>Account Balance:</strong> ${user.accountBalance}
        </li>
        <li>
          <strong>Membership Status:</strong> {user.membershipStatus}
        </li>
      </ul>
      </div>
     
    </div>
  );
};

export default UserDetails;
