import { FC } from "react";
import styles from "./Specials.module.css";
import greekSalad from "../../../assets/greekSalad.jpg";
import bruchetta from "../../assets/bruchetta.svg";
import lemonDessert from "../../../assets/lemonDessert.jpg";
import Button from "../../atoms/Button/Button";
import FoodCard from "../../molecules/FoodCard/FoodCard";

const Specials: FC = (props): JSX.Element => {
  return (
    <section {...props} className={styles.container} id="menu">
      <div className={styles.top}>
        <h1>This weeks specials!</h1>
        <Button className={styles.topButton}>Online Menu</Button>
      </div>
      <div className={styles.cards}>
        <FoodCard
          imageUrl={greekSalad}
          title="Greek Salad"
          price={12.99}
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        />
        <FoodCard
          imageUrl={lemonDessert}
          title="Bruchetta"
          price={7.99}
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        />
        <FoodCard
          imageUrl={lemonDessert}
          title="Lemon Dessert"
          price={6.99}
          description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </div>
    </section>
  );
};

export default Specials;
