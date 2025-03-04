import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.png";
import img10 from "../../assets/img10.jpg";
import img11 from "../../assets/img11.png";
import logoMarket from "../../assets/logoMarket.png";
import signup from  "../../assets/signup.png";
import styles from "./Homepage.module.css";
import {Link} from 'react-router-dom';

function Homepage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerBar}>
        <img src={logoMarket} alt="logo" className="logo"/>
        <Link to='/register'><img src={signup} alt="singup" className="signupBtn"/></Link>
      </div>
      <div className={styles.section}>
      <img src={img1} alt="img" className={styles.img1}/>
      <img src={img2} alt="img" className={styles.img2}/>
      <img src={img3} alt="img" className={styles.img3}/>
      <img src={img4} alt="img" className={styles.img4}/>
      <img src={img5} alt="img" className={styles.img5}/>
      <img src={img6} alt="img" className={styles.img6}/>
      <img src={img7} alt="img" className={styles.img7}/>
      <img src={img8} alt="img" className={styles.img8}/>
      <img src={img9} alt="img" className={styles.img9}/>
      <img src={img10} alt="img" className={styles.img10}/>
      <img src={img11} alt="img" className={styles.img11}/>
      </div>
    </div>
  )
}

export default Homepage