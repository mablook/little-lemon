import { useState, useRef, useEffect, FC } from "react";
import styles from './Header.module.css'; // Import the CSS module
import Nav from "../../molecules/Nav/Nav";
import MobileNav from "../../molecules/MobileNav/MobileNav";

const Header: FC = (props): JSX.Element => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [_, setLastScrollPosition] = useState(window.pageYOffset || document.documentElement.scrollTop);

  const handleScroll = () => {
    const header = headerRef.current;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    setLastScrollPosition((prevState) => {
      if (!header) return scrollPosition > 0 ? scrollPosition : 0;

      if (scrollPosition > prevState) {
        header.style.transform = "translateY(-200px)";
      } else {
        header.style.transform = "translateY(0)";
      }
      return scrollPosition > 0 ? scrollPosition : 0;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header {...props} ref={headerRef} className={styles.container}>
      <div className={styles.content}>
        <Nav />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
