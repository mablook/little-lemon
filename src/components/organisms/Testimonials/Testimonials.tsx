import { FC } from "react";
import styles from "./Testimonials.module.css";
import greekSalad from "../../../assets/greekSalad.jpg";
import bruchetta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemonDessert.jpg";
import TestimonialsCard from "../../molecules/TestimonialsCard/TestimonialsCard";

const Testimonials: FC = (props) => {
  return (
    <div {...props} className={styles.container} id="menu">
      <h2 className={styles.title}>What ours customers say!</h2>
      <div className={styles.cards}>
        {/* ... CustomersSayCard components ... */}
        <TestimonialsCard
          rating={5}
          customerImg={greekSalad}
          customerName="Leo"
          testimonial="I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!"
        />
                <TestimonialsCard
          rating={5}
          customerImg={greekSalad}
          customerName="Leo"
          testimonial="I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!"
        />
                <TestimonialsCard
          rating={5}
          customerImg={greekSalad}
          customerName="Leo"
          testimonial="I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!"
        />
        {/* ... More CustomersSayCard components ... */}
      </div>
    </div>
  );
};

export default Testimonials;
