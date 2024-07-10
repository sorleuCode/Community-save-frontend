import React, { useEffect, useState } from "react";
import SidebarWithHeader from "./SidebarWithHeader";
import styles from "./ContributionList.module.css";
import axiosInstance from "../../../api/axios";

const ContributionList = () => {
  const [thrift, setThrift] = useState(null);
  const axios = axiosInstance();

  useEffect(() => {
    getAllThrift();
  }, [thrift]);

  const getAllThrift = async () => {
    try {
      const res = await axios("thrift");
      const data = await res.data;
      setThrift(data)
    } catch (error) {
      console.log(error);
    }
  };

  console.log(thrift)
  return (
    <div>
      <div className={styles.ContributionList}>
        <div>
          <SidebarWithHeader />
        </div>
        <div className={styles.bodeleyi}>
          <div className={styles.contribution_list}>
            <div className={styles.contribution_header}>
              {/* <h2>Ongoing Contributions</h2> */}
            </div>
            <ul>
              <li className={styles.contribution_item}>
                <div className={styles.contribution_info}>
                  <p className={styles.contribution_title}>
                    <strong>Title:</strong> Contribution
                  </p>
                  <p className={styles.contribution_details}>
                    <strong>Amount:</strong> 2,000
                  </p>
                  <p className={styles.contribution_details}>
                    <strong>Description:</strong> Ajo Member
                  </p>
                  <p className={styles.contribution_details}>
                    <strong>Date:</strong> 12-10-2024
                  </p>
                  <p className={styles.contribution_details}>
                    <strong>Status:</strong> Active
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.contribution_list}>
            <div className={styles.contribution_header}>
              {/* <h2>Ongoing Contributions</h2> */}
            </div>
            <ul>
              <li className={styles.contribution_item}>
                <div className={styles.contribution_info}>
                  <p className={styles.contribution_title}>
                    <strong>Title:</strong> Contribution
                  </p>
                  <p className={styles.contribution_details}>
                    <strong>Amount:</strong> 2,000
                  </p>
                  <p className={styles.contribution_details}>
                    <strong>Description:</strong> Ajo Member
                  </p>
                  <p className={styles.contribution_details}>
                    <strong>Date:</strong> 12-10-2024
                  </p>
                  <p className={styles.contribution_details}>
                    <strong>Status:</strong> Active
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.contribution_list}>
            <div className={styles.contribution_header}>
              {/* <h2>Ongoing Contributions</h2> */}
            </div>
            <ul>
              <li className={styles.contribution_item}>
                <div className={styles.contribution_info}>
                  <p className={styles.contribution_title}>
                    <strong>Title:</strong> Contribution
                  </p>
                  <p className={styles.contribution_details}>
                    <strong>Amount:</strong> 2,000
                  </p>
                  <p className={styles.contribution_details}>
                    <strong>Description:</strong> Ajo Member
                  </p>
                  <p className={styles.contribution_details}>
                    <strong>Date:</strong> 12-10-2024
                  </p>
                  <p className={styles.contribution_details}>
                    <strong>Status:</strong> Active
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionList;
