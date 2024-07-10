import React, { useState, useEffect } from 'react';
import styles from './EditAdminProfile.module.css';

const EditProfile = ({handleSubmit}) => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
    bio: '',
    profilePicture: '',
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/admin/profile'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProfile({
          name: data.name,
          email: data.email,
          password: '', 
          bio: data.bio || '',
          profilePicture: data.profilePicture || '',
        });
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };




  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.theway}>
      
      <div className={styles.edit_profile}>
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit} className={styles.form_edit_profile} >
          <div>
            <label className={styles.leo}>Name:</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className={styles.leo}>Email:</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className={styles.leo}>Password:</label>
            <input
              type="password"
              name="password"
              value={profile.password}
              onChange={handleChange}
            />
          </div>
         
         
          <button type="submit" className={styles.eef_profile_edit}>Save Changes</button>
        </form>

        {showModal && (
          <div className={styles.modal}>
            <div className={styles.modal_content}>
              <span className={styles.close} onClick={closeModal}>&times;</span>
              <p>Profile saved successfully!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProfile;