import { FC } from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./Footer.module.css";
import restaurant from "../../../assets/place/01.png";

const Footer: FC = (props) => {
  return (
    <footer {...props} className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
        <img className={styles.image} src={restaurant} alt="Restaurant Food" />
        </div>
        <div className={styles.footerMenu}>
        <ul className={styles.links}>

        <li className={styles.column}>
          <strong>Little Lemon</strong>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </li>


        <li className={styles.column}>
          <strong>Contact</strong>
          <ul>
            <li>Little Lemon</li>
            <li>331 E Chicago</li>
            <li>LaSalle Street Chicago,</li>
            <li>Illinois 60602 USA</li>
            <li>+55 11 9999-9999</li>
            <li>contact@littlelemon.com</li>
          </ul>
        </li>


        <li className={styles.column}>
          <strong>Social Media</strong>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </li>
      </ul>
      </div>
        </div>
      <div className={styles.copyright}>
      <span>Developed by <a href="https://www.mab.com/" target="_blank" rel="external"> Little Lemon </a></span>
        <p>© 2024 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
