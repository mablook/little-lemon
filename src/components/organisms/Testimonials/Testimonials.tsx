import { FC } from "react";
import styles from "./Testimonials.module.css";
import TestimonialsCard from "../../molecules/TestimonialsCard/TestimonialsCard";
import meg from "../../../assets/customers/_01.png";
import linda from "../../../assets/customers/_02.png";
import louise from "../../../assets/customers/_03.png";

const testimonials = [
  {
    rating: 5,
    customerImg: meg,
    customerName: "Meg",
    testimonial: "I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!"
  },
  {
    rating: 5,
    customerImg: linda,
    customerName: "Linda",
    testimonial: "I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!"
  },
  {
    rating: 5,
    customerImg: louise,
    customerName: "Louise",
    testimonial: "I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!"
  }
];


const Testimonials: FC = (props) => {
  return (
    <div {...props} className={styles.container} id="menu">
      <h2 className={styles.title}>What ours customers say!</h2>
      <div className={styles.cards}>
        {
          testimonials.map((testimonial, index) => (
            <TestimonialsCard
              key={index}
              rating={testimonial.rating}
              customerImg={testimonial.customerImg}
              customerName={testimonial.customerName}
              testimonial={testimonial.testimonial}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Testimonials;
