
import { useState, } from 'react'; // useContext
import styles from "./Register.module.css"
// import { Link } from "react-router-dom";
import PasswordInput from '../Auth/PasswordInput';



const AdminReg = () => {
  const [fullname, setfullname] = useState('');
  const [email, setemail] = useState("")
  const [bankCode, setBankCode] = useState("")
  const [password,] = useState('');
  const [confirmpassword,] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [isSubmitting,] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await register(email, password);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div >
        <p className={styles.user}>Register as admin</p>
        <form className={styles.container_reg} onSubmit={handleSubmit}>
          <p>Full Name</p>
          <input type="fullname" placeholder='enter your full name'
            value={fullname} name='fullname' className={styles.in_put} onChange={(e) =>
              setfullname(e.target.value)} required />

          <p>Email</p>
          <input type="email" placeholder='enter your email'
            value={email} name='email' className={styles.in_put} onChange={(e) =>
              setemail(e.target.value)} required />

          <div >
            <p className={styles.label}>Password</p>
            <PasswordInput
              type="password"
              className={styles.input}
              name="password"
              placeholder="enter your password"
              required
              value={password}
              onChange={handleSubmit}
            />
          </div>

          <div >
            <p className={styles.label}>Confirm Password</p>
            <PasswordInput
              type="password"
              // className={styles.input}
              name="confirm password"
              placeholder="enter your confirm password"
              required
              value={confirmpassword}
              onChange={handleSubmit}
            />
          </div>

          <p>Account Number</p>
          <input type="accountNumber" placeholder='enter your full account number' className={styles.in_put}
            value={accountNumber} name='' onChange={(e) =>
              setAccountNumber(e.target.value)} required />

          <p>Bank Code </p>
          <input type="BankCode" placeholder='enter your bank pin' className={styles.in_put}
            value={bankCode} onChange={(e) =>
              setBankCode(e.target.value)} required />
          <button className={styles.btn} disabled={isSubmitting}>
            {isSubmitting ? "Signing you up..." : "Create Account"}
          </button>
          <div>

          </div>
        </form>
      </div>

    </>
  );
};

export default AdminReg;