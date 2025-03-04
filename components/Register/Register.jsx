import { register } from "../../services";
import { useState } from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import slogo from "../../assets/slogo.png";
import sideimg from "../../assets/sideimg.png";

export default function Register() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname:"",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate(); 

  const validatePassword = (password) => {
    const minLength = /.{8,}/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasNumber = /[0-9]/;
    const hasSpecialChar = /[!@#$%^&*]/;
    
    if (!minLength.test(password)) return "The password must be at least 8 characters long*";
    if (!hasUpperCase.test(password) || !hasLowerCase.test(password)) return "Include at least one uppercase and lowercase letter*";
    if (!hasNumber.test(password)) return "Include at least one number*";
    if (!hasSpecialChar.test(password)) return "Include at least one special character (@#$%^&*)*";
    return "";
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    const { password, confirmPassword } = formData;
    
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }
    
    if (password !== confirmPassword) {
      setError("The password you entered does not match*");
      return;
    }
    
    try {
      const res = await register(formData);
      if (res.status === 200) {
        alert("Registered successfully");  
        setFormData({
          firstname: "",
          lastname:"",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setError(""); 
        navigate("/login");
      } else {
        setError(res?.message || "Registration failed");
      }
    } catch (err) {
      setError(err?.message || "An error occurred. Please try again.");
    }
  };
  
  return (
    <div className={styles.header}>
      <img src={slogo}  alt="logo" className={styles.logoMarket}/>
      <div className={styles.formhead}>Sign up to your Spark</div>
      <div className={styles.sideimg}><img src={sideimg} alt="sideimg" /></div>
      <div className={styles.form}>
        <div className={styles.accounthead}>
          <p className={styles.formAccount1}>Create an account</p>
          <a href="/login" className={styles.formAccount2}>Sign in instead</a>
        </div>
        <form onSubmit={handleRegister}>
          <div className={styles.formText}>
            <label htmlFor="firstname">First name</label>
            <input type="text" name="firstname" value={formData.firstname} onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} />
          </div>
          <div className={styles.formText}>
            <label htmlFor="lastname">Last name</label>
            <input type="text" name="lastname" value={formData.lastname} onChange={(e) => setFormData({ ...formData, lastname: e.target.value })} />
          </div>
          <div className={styles.formText}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>

          <div className={styles.formPassword}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
          </div>

          <div className={styles.formPassword}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
            {formSubmitted && error && <p className={styles.error}>{error}</p>}
          </div>

          <p className={styles.text}><input type="checkbox" /> By creating an account, I agree to our Terms of use and Privacy Policy</p>
          <button type="submit" className={styles.formButton1}>Create an Account</button>
        </form>
        <p className={styles.endtext}>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</p>
      </div>
    </div>
  );
}
