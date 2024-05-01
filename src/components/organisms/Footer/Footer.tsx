import { FC } from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./Footer.module.css";
import restaurant from "../../../assets/restaurant.jpg";

const Footer: FC = (props) => {
  return (
    <footer {...props} className={styles.container}>
      <div className={styles.content}>
        <img className={styles.image} src={restaurant} alt="Restaurant Food" />
        <div className={styles.column}>
        <h4>Little<br />Lemon</h4>
          <ul>
            <li> <HashLink to="/">Home</HashLink> </li>
            <li> <HashLink to="/#">Menu</HashLink> </li>
            <li> <HashLink to="/bookings">Reservations</HashLink> </li>
            <li> <HashLink to="/#">Order Online</HashLink> </li>
            <li> <HashLink to="/#">Login</HashLink> </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
      <span>Developed by <a href="https://www.mab.com/" target="_blank" rel="external"> Leonardo Jacomussi </a></span>
        <p>© 2023 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
