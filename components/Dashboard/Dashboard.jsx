
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import slogo from "../../assets/slogo.png";
import sideimg from "../../assets/sideimg.png";
import {Link} from 'react-router-dom';

export default function Login() {

  return (
    <div className={styles.header}>
    <img src={slogo}  alt="logo" className={styles.logoMarket}/>
    <div className={styles.formhead}>Tell us About Yourself</div>
    <p className={styles.headtext}>For a personalized Spark experience</p>
    <div className={styles.sideimg}><img src={sideimg} alt="sideimg" /></div>
    <div className={styles.main}>
    <input type="text" placeholder="Tell us your username" className={styles.inputText}/>
    <p className={styles.selectbtntext}>Select one category that best describes your Linktree:</p>
    <button type="button" className={styles.selectBtn}>💼 Business icon </button>
    <button type="button" className={styles.selectBtn}>🎨 creative</button>
    <button type="button" className={styles.selectBtn}>📚 Education</button>
    <button type="button" className={styles.selectBtn}>🎭 Entertainment</button><br />   
    <button type="button" className={styles.selectBtn}>👗 Fashion & Beauty</button>
    <button type="button" className={styles.selectBtn}>🍽️ Food & Bevearges</button>
    <button type="button" className={styles.selectBtn}>🏛️ Government & Politics</button><br />  
    <button type="button" className={styles.selectBtn}>🤝Food & Bevearges</button>
    <button type="button" className={styles.selectBtn}>🤝Non-Profit</button>
    <button type="button" className={styles.selectBtn}>✨Other</button>
    <button type="button" className={styles.selectBtn}>💻Tech</button><br />
    <button type="button" className={styles.selectBtn}>✈️Travel & Torism</button><br />
    <button type="submit" className={styles.formButton1}>Continue</button>  
    </div>
   </div>
  );
}
