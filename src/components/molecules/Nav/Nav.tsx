import { FC } from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./Nav.module.css"; // Import the CSS module
import { ReactComponent as LogoImg } from  "../../../assets/Logo.svg";
import { ReactComponent as BasketImg } from "../../../assets/icons/emptycart.svg";

const Nav: FC = (props): JSX.Element => {
  return (
    <nav {...props} className={styles.container}>
      <ul className={styles.ul}>
        <li aria-label="Little Lemon Logo"> <LogoImg /> </li>
        <li> <HashLink to="/">Home</HashLink> </li>
        <li> <HashLink to="/#about">About</HashLink> </li>
        <li> <HashLink to="/#menu">Menu</HashLink> </li>
        <li> <HashLink to="/bookings">Reservations</HashLink> </li>
        <li className={styles.orderBtn}> <HashLink role="button" to="#">Order Online</HashLink> </li>
        <li aria-label="Basket"> <BasketImg className={styles.basketIcon} /> </li>
      </ul>
    </nav>
  );
};

export default Nav;
