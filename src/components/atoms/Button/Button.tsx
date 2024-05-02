import { FC, HTMLAttributes } from "react";
import styles from "./Button.module.css"; 

const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({ children, ...props }): JSX.Element => {
  return (
    <button {...props} className={styles.container}>
      {children}
    </button>
  );
};

export default Button;
