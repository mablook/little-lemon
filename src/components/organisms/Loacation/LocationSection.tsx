import { FC } from "react";
import styles from "./LocationSection.module.css";
import Mario_and_Adrian_A from "../../../assets/Mario_and_Adrian_A.jpg";
import Mario_and_Adrian_B from "../../../assets/Mario_and_Adrian_B.jpg";

const LocationSection: FC = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className={styles.leadTxt}>
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
        </p>
        <p className={styles.leadTxt}>
          To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
        </p>
      </div>
      <div className={styles.image}>
        <img src={Mario_and_Adrian_A} alt="Mario and Adrian" />
        <img src={Mario_and_Adrian_B} alt="Mario and Adrian" />
      </div>
    </section>
  );
};

export default LocationSection;
