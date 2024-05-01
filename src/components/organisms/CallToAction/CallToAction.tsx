import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CallToAction.module.css";
import restaurant_food from "../../../assets/restaurantfood.jpg";
import Button from "../../atoms/Button/Button";

const CallToAction: FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className={styles.leadTxt}>
          We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <Button onClick={() => navigate("/bookings")} aria-label="Go to reservation table page.">Reserve a Table</Button>
      </div>
      <div className={styles.image}>
        <img src={restaurant_food} alt="Restaurant Food" />
      </div>
    </section>
  );
};

export default CallToAction;
