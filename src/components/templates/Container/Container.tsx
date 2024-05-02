import React, { HTMLAttributes } from 'react';
import styles from './Container.module.css';

export const Container: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return <div className={styles.container} {...props} >{props.children}</div>;
};