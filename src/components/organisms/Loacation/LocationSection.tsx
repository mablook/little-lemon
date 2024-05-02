import { FC } from "react";
import styles from "./LocationSection.module.css";
import chef1 from "../../../assets/people/01.png";
import chef2 from "../../../assets/people/02.png";

const LocationSection: FC = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className={styles.leadTxt}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <p className={styles.leadTxt}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
        </p>
      </div>
      <div className={styles.image}>
        <img src={chef1} alt="Chef Maria" />
        <img src={chef2} alt="Chef Aught" />
      </div>
    </section>
  );
};

export default LocationSection;
