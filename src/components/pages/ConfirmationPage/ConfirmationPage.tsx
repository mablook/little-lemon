import React from 'react';
import styles from './ConfirmationPage.module.css';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import ConfirmedBooking from '../../organisms/ConfirmedBooking/ConfirmedBooking';


const ConfirmationPage: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Header />
      <ConfirmedBooking />
      <Footer />
    </div>
  );
};

export default ConfirmationPage;
