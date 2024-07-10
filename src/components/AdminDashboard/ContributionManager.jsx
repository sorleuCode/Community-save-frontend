import React, { useEffect, useState } from 'react';
import AddContribution from './AddContribution';
import AdminContributionList from './AdminContributionList';
import axiosInstance from '../../../api/axios';
// import './ContributionManager.css';

const ContributionManager = () => {
  const [contributions, setContributions] = useState([
    { id: 1, title: 'Contribution 1', amount: 300, description: 'John Doe', date: '2024-07-01', status: 'Completed' },
    { id: 2, title: 'Contribution 2', amount: 500, description: 'Jane Smith', date: '2024-07-03', status: 'Pending' },
    { id: 3, title: 'Contribution 3', amount: 300, description: 'Bob Johnson', date: '2024-07-05', status: 'Completed' },
    // Add more initial contributions if needed
  ]);

  const addContribution = (newContribution) => {
    setContributions([...contributions, { ...newContribution, id: contributions.length + 1 }]);
  };

  
  useEffect(() => {
    const getAdminThrifts = async () => {
      try {
        const adminThrifts = await axiosInstance("/thrift/adminthrifts")
        const data = adminThrifts.data
        console.log(data)


      } catch (error) {
        console.log(error)

      }
    }
    
    getAdminThrifts()
  }, [])


  return (
    <div className="contribution_manager">
      {/* <AddContribution addContribution={addContribution} /> */}
      <AdminContributionList contributions={contributions} />
    </div>
  );
};

export default ContributionManager;