import React, { useEffect, useState } from "react";
import styles from "./AddContribution.module.css";
import axiosInstance from "../../../api/axios";
import { toast } from "react-toastify";
import { LuLoader2 } from "react-icons/lu";


const AddContribution = ({

}) => {
  const [contributionDetails, setContributionDetails] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    console.log(contributionDetails)
  }, [contributionDetails])

  const handleChange = (e) => {
    // console.log(e.target.name)
    const inputName = e.target.name
    const inputValue = e.target.value

    setContributionDetails((prev) => ({ ...prev, [inputName]: inputValue }))

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await axiosInstance.post("/thrift/create", contributionDetails)
      console.log(res.data)
      toast.success("Thrift successfully created")
    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.message ?? "Error creating thrift")

    } finally{
      setIsLoading(false)
    }

  }

  return (



    <div className={styles.nitroeef}>
      <div className={styles.add_contribution}>
        <h2>Add New Contribution</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>name</label>
            <input
              type="text"
              // value={title}
              name="name"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              // value={amount}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              // value={description}
              name="description"
              className={styles.texttroy}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div>
            <label>Plan ID</label>
            <input
              type="text"
              name="planId"
              // value={date}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          {/* <div>
            <label>Status</label>
            <select value={status} onChange={(e) => handleChange(e)}>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div> */}
          <button disabled={isLoading} className={styles.btn} type="submit">{isLoading && <LuLoader2 className={styles.loader} />} Add Contribution</button>
        </form>
      </div>
    </div>


  );
};

export default AddContribution;