import { FC } from "react";
import styles from "./TestimonialsCard.module.css";

interface TestimonialsCardProps {
  rating: number;
  customerImg: string;
  customerName: string;
  testimonial: string;
}

const TestimonialsCard: FC<TestimonialsCardProps> = ({
  rating,
  customerImg,
  customerName,
  testimonial,
  ...props
}) => {
  const stars: { [key: number]: string } = {
    1: "★☆☆☆☆",
    2: "★★☆☆☆",
    3: "★★★☆☆",
    4: "★★★★☆",
    5: "★★★★★",
  };

  return (
    <div {...props} className={styles.container}>
      <span className={styles.rating}>
        {stars[rating]}
      </span>
      <div className={styles.customer}>
        <img src={customerImg} alt={customerName} />
        <span className={`${styles.customerHighlight} ${styles.highlight}`}>{customerName}</span>
      </div>
      <p className={`${styles.testimonial} ${styles.highlight}`}>
        {testimonial}
      </p>
    </div>
  );
};

export default TestimonialsCard;
