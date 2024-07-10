import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './AdminContributionList.module.css';
import axiosInstance from '../../../api/axios';




const AdminContributionList = ({contributions}) => {
  // const [contributions, setContributions] = useState([])


  return (
    <div className={styles.bodeleyi}>

      <div className={styles.contribution_list}>
        <div className={styles.header}>
          <h2>Ongoing Contributions</h2>
          <Link to="/admin-dashboard" className={styles.back_button}>
            <FaArrowLeft size={20} /> Back to Dashboard
          </Link>
        </div>
        <ul>
          {contributions.map((contribution, index) => (
            <li key={index} className={styles.contribution_item}>
              <div className={styles.contribution_info}>
                <p className={styles.contribution_title}><strong>Title:</strong> {contribution.title}</p>
                <p className={styles.contribution_details}><strong>Amount:</strong> {contribution.amount}</p>
                <p className={styles.contribution_details}><strong>Description:</strong> {contribution.description}</p>
                <p className={styles.contribution_details}><strong>Date:</strong> {contribution.date}</p>
                <p className={styles.contribution_details}><strong>Status:</strong> {contribution.status}</p>
              </div>

            </li>
          ))}
        </ul>
      </div>


    </div>
  );
};

export default AdminContributionList;