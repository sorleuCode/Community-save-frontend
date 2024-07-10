//ContributionCard.jsx

import React from 'react';
import styles from './ContributionCard.module.css';

const ContributionCard = ({ contribution }) => {
  return (
    <div className={styles.class}>
    <div className={styles.contribution_card}>
      <h3>{contribution.title}</h3>
      <p>Amount: ${contribution.amount}</p>
      <p>description: {contribution.description}</p>
      <p>Date: {contribution.date}</p>
      <p>Status: {contribution.status}</p>
    </div>
    </div>
  );
};

export default ContributionCard;