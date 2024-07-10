import React, { useEffect } from "react";
import SidebarWithHeader from "../components/Dashboard/SidebarWithHeader";
import Dashboard from "../components/Dashboard/Dashboard";
import axiosInstance from "../../api/axios";

const DashboardPage = () => {

  useEffect(() => {
    const getThrifts = async () => {
      try {
        const res = await axiosInstance.get("/thrift")
        const data = res.data
        console.log(data)
      } catch (error) {
        console.log(error)

      }
    }

    getThrifts()
  }, [])

  return (
    <div style={{ display: "flex" }}>
      <SidebarWithHeader />

      <Dashboard />
    </div>
  );
};

export default DashboardPage;
