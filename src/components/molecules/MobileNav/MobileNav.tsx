import { useState, FC } from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./MobileNav.module.css";
import { ReactComponent as LogoImg } from "../../../assets/Logo.svg";

import { ReactComponent as BasketIcon } from "../../../assets/basket.svg";
import { ReactComponent as CloseIcon } from "../../../assets/close.svg";

const MobileNav: FC = (props): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(prevValue => !prevValue);
  };

  return (
    <nav {...props} className={styles.container}>
      <ul className={styles.ul}>
        <li>
          <button aria-label="Open menu" onClick={handleMenu} className={styles.button}>

          </button>
        </li>
        <li>
          <BasketIcon className={styles.basketIcon} />
        </li>
      </ul>

      <div className={menuOpen ? `${styles.menu} ${styles.menuOpened}` : styles.menu}>
        <button aria-label="Close menu" onClick={handleMenu} className={styles.menuButton}>
          <CloseIcon className={styles.closeIcon} />
        </button>
        <ul className={styles.ul}>
          <li>
            <LogoImg className={styles.logo} />
          </li>
          <li> <HashLink to="/">Home</HashLink> </li>
          <li> <HashLink to="#about">About</HashLink> </li>
          <li> <HashLink to="#menu">Menu</HashLink> </li>
          <li> <HashLink to="/bookings">Reservations</HashLink> </li>
          <li className={styles.orderBtn}> <HashLink role="button" to="#">Order Online</HashLink> </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
