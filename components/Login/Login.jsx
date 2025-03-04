import { login } from "../../services";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import slogo from "../../assets/slogo.png";
import sideimg from "../../assets/sideimg.png";
import {Link} from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

 
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const [loginformData, setLoginformData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const res = await login(loginformData);
      if (res.status === 200) {
        const data = await res.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        console.log(data.token);
        console.log(data.username);
        alert("Logged in successfully");
        navigate("/dashboard");
      } else {
        setError("Invalid email or password"); 
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again."); 
    }
  };

  return (
    <div className={styles.header}>
    <img src={slogo}  alt="logo" className={styles.logoMarket}/>
    <div className={styles.formhead}>Signin to your Spark</div>
    <div className={styles.sideimg}><img src={sideimg} alt="sideimg" /></div>
 
     <div className={styles.form}>
        <form onSubmit={handleLogin}>
          <div className={styles.formText}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Spark/Username"
              value={loginformData.email}
              onChange={(e) =>
                setLoginformData({ ...loginformData, email: e.target.value })
              }
            />
          </div>
          <div className={styles.formPassword}>
            
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={loginformData.password}
              onChange={(e) =>
                setLoginformData({ ...loginformData, password: e.target.value })
              }
            />
            {error && <p className={styles.error}>{error}</p>}{" "}
            
          </div>

         <button type="submit" className={styles.formButton1}>Log In</button>  
        </form>
        <a href="/register" className={styles.text}>
          Forgot password?</a>
          <p className={styles.textA}>Don't have an account?<span><a href="/register" className={styles.link}>SignUp</a></span></p>
          
          
        
      </div>
      <p className={styles.endtext}>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</p>
   </div>
  );
}
