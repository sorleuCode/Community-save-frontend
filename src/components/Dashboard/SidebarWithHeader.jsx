// SidebarWithHeader.js
import React from "react";
import { FaPiggyBank, FaHistory } from "react-icons/fa";
import { IoHomeOutline, IoBagHandleOutline } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import styles from "./SidebarWithHeader.module.css";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const SidebarWithHeader = () => {
  const handleLogout = () => {
    window.location.href = "/login";
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <FaPiggyBank size={30} />
        <h2>iSave</h2>
      </div>
      <nav className={styles.active}>
        <ul>
          <Link to="/dashboard">
            <li>
              <IoHomeOutline className={styles.icon} />
              Dashboard
            </li>
          </Link>
          <Link to="/contributionlist">
          <li>
            <IoBagHandleOutline className={styles.icon} />
            Contribution List
          </li></Link>
          <Link to="/PaymentHistory">
            <li>
              <FaHistory className={styles.icon} />
              Payment History
            </li>
          </Link>
          <Link to="/editProfile">
            <li>
              <FaUserEdit className={styles.icon} />
              Edit Profile
            </li>
          </Link>
        </ul>
      </nav>

      <div className={styles.profile}>
        <h3 className={styles.cgprofile}>
          <CgProfile />
          Adejare02!
        </h3>
        <button className={styles.logout_button} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default SidebarWithHeader;
