import { useState } from "react";
import styles from "./PasswordInput.module.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PasswordInput = ({ placeholder, value, setPassword, name }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div >
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        required
        name={name}
        value={value}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input_reg}
        
      />

      {/* <div className={styles.icon} onClick={togglePassword}>
              {showPassword ? <AiOutlineEyeInvisible size={25}/> : <AiOutlineEye size={25}/>}
          </div> */}
    </div>
  );
};

export default PasswordInput;