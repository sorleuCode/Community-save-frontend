// AdminSidebar.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPiggyBank, FaHistory, FaEdit } from "react-icons/fa";
import { IoAddCircleSharp, IoBagHandleOutline } from "react-icons/io5";
import { PiDiceFive, PiHandWithdrawBold } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import Modal from 'react-modal';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./AdminSidebar.module.css";

Modal.setAppElement('#root'); // Set the root element for accessibility

const AdminSidebar = () => {
  const [profilePicture, setProfilePicture] = useState('/th.jpg');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
    console.log('User logged out');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
        closeModal();
        toast.success('Profile picture updated successfully!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000, // Close the toast after 3 seconds
          onClose: () => navigate('/home') // Navigate to the homepage after the toast closes
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <FaPiggyBank size={30} />
        <h2>iSave</h2>
      </div>
      <nav className={styles.active}>
        <ul>
          <li><Link to="/admin-dashboard"><FaPiggyBank className={styles.icon}/>Dashboard</Link></li>
          <li><Link to="/admin/contributionlist"><IoBagHandleOutline className={styles.icon}/>Contributions List</Link></li>
          <li><Link to="/add-contribution"><IoAddCircleSharp className={styles.icon}/>Add New Contribution</Link></li>
          <li><Link to="/edit-admin"><FaEdit className={styles.icon}/>Edit profile</Link></li>
          <li><Link to="/history"><FaHistory className={styles.icon}/>Payment History</Link></li>
          <li><Link to="/roll"><PiDiceFive className={styles.icon}/>Roll it</Link></li>
        </ul>
      </nav>

      <div className={styles.profile_picture}>
        <div className={styles.profile_picture_container}>
          <div className={styles.profile_info}>
            <img
              src={profilePicture}
              alt="user"
              className={styles.eef}
              onClick={openModal}
            />
            <div className={styles.profile}>
              <h3 className={styles.nitro}>Nitro Eef</h3>
            </div>
          </div>
          <button className={styles.grand_button} onClick={handleLogout}>Log Out</button>
        </div>
      </div>

      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Profile Picture Modal"
        className={styles.modal}
        overlayClassName="modal-overlay"
      >
        {/* <h2 className={styles.omoprof}>Profile Picture</h2> */}
        <button onClick={() => document.getElementById('fileInput').click()}>Change Profile Picture</button>
        <button onClick={() => toast.info('Viewing Profile Picture', { position: toast.POSITION.TOP_RIGHT })}>View Profile Picture</button>
        <button onClick={closeModal}>Close</button>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default AdminSidebar;