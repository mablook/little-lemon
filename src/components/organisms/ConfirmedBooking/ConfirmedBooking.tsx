import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ConfirmedBooking.module.css';
import Button from '../../atoms/Button/Button';

const ConfirmedBooking: React.FC = (props): JSX.Element => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState<{ date: string, time: string, guests: string, occasion: string }>();

  useEffect(() => {
    const booking = localStorage.getItem("Bookings");
    if (booking) {
      setBooking(JSON.parse(booking));
    }
  }, []);

  return (
    <div className={styles.container} {...props}>
      <div className={styles.top}>
        <h1>Thank you for your reservation!</h1>
        <h3 className="lead-txt">We look forward to seeing you at Little Lemon.</h3>
      </div>
      {
        booking &&
        <div className={styles.confirmation}>
          <h2>Confirmation details</h2>
          <span><strong>Occasion:</strong> {booking.occasion}</span>
          <span><strong>Guests:</strong> {booking.guests}</span>
          <span><strong>Date:</strong> {booking.date}</span>
          <span><strong>Time:</strong> {booking.time}</span>
        </div>
      }
      <Button aria-label="Go back to the home page" onClick={() => navigate("/")}>Back to home</Button>
    </div>
  );
};

export default ConfirmedBooking;
