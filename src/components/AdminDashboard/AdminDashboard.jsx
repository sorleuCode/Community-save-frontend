// adminDashboard 


import React, { useEffect, useState } from "react";
import styles from "./AdminDashboard.module.css";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import AdminSidebar from "./AdminSidebar";
import axiosInstance from "../../../api/axios";

const AdminDashboard = () => {
  const [members, setMembers] = useState([
   
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentMember, setCurrentMember] = useState(null);

  useEffect(() => {
    const getAllUsers = async() => {
      try {
        const res = await axiosInstance.get("/user")
        const data = res.data

        const usersInfo = data.map(_data => {
          return {
            id: _data._id,
            name: _data.fullname,
            phone: _data.phoneNumber || "",
            location: _data.address || "",
            email: _data.email,
          }
        })

        setMembers(usersInfo)

        console.log(usersInfo)
      } catch (error) {
        console.log(error)
      }
    }
    getAllUsers()
  },[])

  const handleEdit = (member) => {
    setIsEditing(true);
    setCurrentMember(member);
  };

  const handleSave = () => {
    setMembers(
      members.map((m) => (m.id === currentMember.id ? currentMember : m))
    );
    setIsEditing(false);
    setCurrentMember(null);
  };

  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this member?",

      buttons: [
        {
          label: "Yes",
          onClick: () =>
            setMembers(members.filter((member) => member.id !== id)),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentMember(null);
  };

  const stats = [
    { id: 1, label: "Total Members", value: members.length, color: "#e0b3ff" },
    { id: 2, label: "New Members", value: 15, color: "#ffddb3" },
    { id: 3, label: "Ongoing Contributions", value: 3, color: "#b3ffcc" },
    { id: 4, label: "Completed Ajo", value: 20, color: "#b3d9ff" },
  ];

  return (
    <div className={styles.dashboard_wrapper}>
      <AdminSidebar />
      <div className={styles.dashboarder}>
        <div className={styles.stats}>
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={styles.stat_card}
              style={{ backgroundColor: stat.color }}
            >
              <div className={styles.stat_info}>
                <h3>{stat.label}</h3>
                <p>{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {!isEditing ? (
          <div className={styles.members_list}>
            <h2>Total Members</h2>
            <table className={styles.tabili}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Location</th>
                  <th>Email</th>
                  {/* <th>Actions</th> */}
                </tr>
              </thead>

              <tbody>
                {members.map((member) => (
                  <tr key={member.id}>
                    <td>{member.name}</td>
                    <td>{member.phone}</td>
                    <td>{member.location}</td>
                    <td>{member.email}</td>
                    {/* <td>
                      <button
                        className={styles.butt_ed}
                        onClick={() => handleEdit(member)}
                      >
                        <FaPen />
                      </button>
                      <button
                        className={styles.butt_del}
                        onClick={() => handleDelete(member.id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className={styles.modale}>
            <div className={styles.modale_content}>
              <h2>Edit Member</h2>
              <form>
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    value={currentMember.name}
                    onChange={(e) =>
                      setCurrentMember({
                        ...currentMember,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label>Phone</label>
                  <input
                    type="text"
                    value={currentMember.phone}
                    onChange={(e) =>
                      setCurrentMember({
                        ...currentMember,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label>Location</label>
                  <input
                    type="text"
                    value={currentMember.location}
                    onChange={(e) =>
                      setCurrentMember({
                        ...currentMember,
                        location: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    value={currentMember.email}
                    onChange={(e) =>
                      setCurrentMember({
                        ...currentMember,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                
                .
                <button
                  className={styles.botini}
                  type="button"
                  onClick={handleSave}
                >
                  Save
                </button>

                <button
                  className={styles.botinikeji}
                  type="button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;