import styles from "../styles/pages/Home.module.css";
import csi from "../assets/images/csi.png";
import ait from "../assets/images/ait.png";
import mrcooper from "../assets/images/mr_cooper.png";
import characters from "../assets/images/characters.png";
import { useEffect } from "react";
import Timer from "../components/Timer";

const Home = () => {
  useEffect(() => {
    window.addEventListener("mousemove", (event)=>{
      console.log(event.clientX);
    })
  }, []);

  return (
    <div className={styles.home}>
      <br /><br /><br /><br /><br /><br /><br />
      <div className={styles.organizers}>
        <img src={csi} className={styles.csi} alt="" />
        <img src={ait} className={styles.ait} alt="" />
        <img src={mrcooper} className={styles.mc} alt="" />
      </div>
      <br />
      <br />
      <p className={styles.hackit}>HACK IT 3.0</p>
      <br />
      <Timer />
      <br />
      <img src={characters} className={styles.characters} alt="" />
    </div>
  );
};

export default Home;
