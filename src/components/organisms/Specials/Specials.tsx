import { FC } from "react";
import styles from "./Specials.module.css";
import Button from "../../atoms/Button/Button";
import FoodCard from "../../molecules/FoodCard/FoodCard";
import burgerCheese from "../../../assets/foods/burger-with-melted-cheese.jpg";
import iceCream from "../../../assets/foods/ice-cream-cone-splash.jpg";
import coffe from "../../../assets/foods/coffee-crema.jpg";

const specials = [
  {
    imageUrl: burgerCheese,
    title: "Burger melted",
    price: 12.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    imageUrl: iceCream, 
    title: "Ice Cream Cone",
    price: 7.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    imageUrl: coffe,
    title: "Coffee Crema",
    price: 6.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  }
];


const Specials: FC = (props): JSX.Element => {
  return (
    <section {...props} className={styles.container} id="menu">
      <div className={styles.top}>
        <h1>This weeks specials!</h1>
        <span className={styles.topButton}>
        <Button>Online Menu</Button>
        </span>
      </div>
      <div className={styles.cards}>
        {
          specials.map((special, index) => (
            <FoodCard
              key={index}
              imageUrl={special.imageUrl}
              title={special.title}
              price={special.price}
              description={special.description}
            />
          ))
        }
      </div>
    </section>
  );
};

export default Specials;
