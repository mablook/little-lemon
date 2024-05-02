import { FC } from "react";

import styles from "./FoodCard.module.css";
import Button from "../../atoms/Button/Button";
import { ReactComponent as DeliveryIcon } from "../../../assets/icons/shopping-basket.svg";

interface FoodCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

const FoodCard: FC<FoodCardProps> = ({ imageUrl, title, price, description, ...props }) => {

  return (
    <div {...props} className={styles.container}>
      <img className={styles.image} src={imageUrl} alt={title}/>
      <div className={styles.header}>
        <span className={`${styles.title} ${styles.cardTitle}`}>{title}</span>
        <span className={`${styles.price} ${styles.highlight}`}>$ {price}</span>
      </div>
      <p className={styles.body}>
        {description}
      </p>
      <div className={styles.callToAction}>
        <Button className={`${styles.highlight} ${styles.buttonHighlight}`}>Order a delivery</Button>
        <span aria-label="Delivery"><DeliveryIcon /></span>
      </div>
    </div>
  );
};

export default FoodCard;
