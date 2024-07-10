import { useState, useContext, useEffect } from "react";
import styles from "./Login.module.css";
// import { FaRegEyeSlash } from "react-icons/fa";
// import { PaymentContext } from '../../Context/PaymentContext';
import PasswordInput from "../Auth/PasswordInput";
import axiosInstance from "../../../api/axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
// import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  console.log(user);

  useEffect(() => {
    console.log("[email]", email);
    console.log("[password]", password);
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/user/login", { email, password });
      // console.log(res.data)
      const data = res.data;
      setUser(data.admin);
      navigate("/admin-dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className={styles.login_container} onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor='email-address'>Email Address</label> */}
          <p>Email Address</p>
          <input
            className={styles.input}
            type="email"
            placeholder="wabdont@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className={styles.password}>Password</label>
          <PasswordInput
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            value={password}
            setPassword={setPassword}
          />
        </div>

        <div className={styles.remember_me}></div>
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
      {/* <p className={styles.login_account}>
     Don't have an account? <Link to="/register" className={styles.login}>register</Link>
  </p> */}
    </>
  );
};

export default Login;
