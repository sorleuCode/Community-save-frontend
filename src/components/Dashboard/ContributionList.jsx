import React from 'react'
import SidebarWithHeader from './SidebarWithHeader'
import styles from "./ContributionList.module.css"

const ContributionList = () => {
  return (
    <div>
      <div className={styles.ContributionList}>
        <div>
            <SidebarWithHeader/>
        </div>
        <div className={styles.bodeleyi}>
        
        <div className={styles.contribution_list}>
          <div className={styles.contribution_header}>
            {/* <h2>Ongoing Contributions</h2> */}
           
          </div>
          <ul>
            
              <li  className={styles.contribution_item}>
                <div className={styles.contribution_info}>
                  <p className={styles.contribution_title}><strong>Title:</strong> Contribution</p>
                  <p className={styles.contribution_details}><strong>Amount:</strong> 2,000</p>
                  <p className={styles.contribution_details}><strong>Description:</strong> Ajo Member</p>
                  <p className={styles.contribution_details}><strong>Date:</strong> 12-10-2024</p>
                  <p className={styles.contribution_details}><strong>Status:</strong> Active</p>
                </div>
             
              </li>
           
          </ul>
        </div>
        <div className={styles.contribution_list}>
          <div className={styles.contribution_header}>
            {/* <h2>Ongoing Contributions</h2> */}
           
          </div>
          <ul>
            
              <li  className={styles.contribution_item}>
                <div className={styles.contribution_info}>
                  <p className={styles.contribution_title}><strong>Title:</strong> Contribution</p>
                  <p className={styles.contribution_details}><strong>Amount:</strong> 2,000</p>
                  <p className={styles.contribution_details}><strong>Description:</strong> Ajo Member</p>
                  <p className={styles.contribution_details}><strong>Date:</strong> 12-10-2024</p>
                  <p className={styles.contribution_details}><strong>Status:</strong> Active</p>
                </div>
             
              </li>
           
          </ul>
        </div>
        <div className={styles.contribution_list}>
          <div className={styles.contribution_header}>
            {/* <h2>Ongoing Contributions</h2> */}
           
          </div>
          <ul>
            
              <li  className={styles.contribution_item}>
                <div className={styles.contribution_info}>
                  <p className={styles.contribution_title}><strong>Title:</strong> Contribution</p>
                  <p className={styles.contribution_details}><strong>Amount:</strong> 2,000</p>
                  <p className={styles.contribution_details}><strong>Description:</strong> Ajo Member</p>
                  <p className={styles.contribution_details}><strong>Date:</strong> 12-10-2024</p>
                  <p className={styles.contribution_details}><strong>Status:</strong> Active</p>
                </div>
             
              </li>
           
          </ul>
        </div>
  
        
      </div>
  
      </div>
    </div>
  )
}

export default ContributionList
