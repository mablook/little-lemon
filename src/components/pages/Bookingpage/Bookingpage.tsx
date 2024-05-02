import React, { useReducer } from "react";
import styles from "./Bookingpage.module.css";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import BookingForm from "../../organisms/BookingForm/BookingForm";
import { initializeTimes, updateTimes } from "../../../utils/temp";

const Bookingpage: React.FC = (): JSX.Element => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div className={styles.container}>
      <Header />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <Footer />
    </div>
  );
};

export default Bookingpage;
