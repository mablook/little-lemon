import { useState, FC } from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./MobileNav.module.css";
import logo from "../../../assets/logo/logo.png";
import { ReactComponent as BasketIcon } from "../../../assets/basket.svg";
import { ReactComponent as CloseIcon } from "../../../assets/close.svg";
import { ReactComponent as Menu } from "../../../assets/icons/burger-menu.svg";
const MobileNav: FC = (props): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(prevValue => !prevValue);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(prevValue => !prevValue);
  };

  const smoothScroll = (el: HTMLElement) => {
    el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(prevValue => !prevValue);
  };

  return (
    <nav {...props} className={styles.container}>
      <ul className={styles.ul_nav}>
        <li>
          <button aria-label="Open menu" onClick={handleMenu} className={styles.button}>
            <Menu/>
          </button>
        </li>
        <li>
          <img src={logo} className={styles.logo}/>
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
          <img src={logo} className={styles.logo}/>
          </li>
          <li> <HashLink to="#top" scroll={scrollToTop}>Home</HashLink> </li>
          <li> <HashLink to="#about" scroll={smoothScroll}>About</HashLink> </li>
          <li> <HashLink to="#menu" scroll={smoothScroll}>Menu</HashLink> </li>
          <li> <HashLink to="/bookings/#top" scroll={smoothScroll}>Reservations</HashLink> </li>
          <li className={styles.orderBtn}> <HashLink role="button" to="#">Order Online</HashLink> </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
