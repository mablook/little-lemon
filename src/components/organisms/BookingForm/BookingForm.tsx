import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import styles from './BookingForm.module.css';

interface BookingFormProps {
  dispatch: React.Dispatch<{ type: string, date: Date }>;
  availableTimes: {
    times: string[];
  };
  initialValues?: {
    date: string;
    time: string;
    guests: number;
    occasion: string;
  };
};

const BookingForm: React.FC<BookingFormProps> = ({ availableTimes, dispatch, initialValues, ...props }) => {
  const navigate = useNavigate();

  const initialFormValues = initialValues || {
    date: '',
    time: '',
    guests: 0,
    occasion: '',
  };

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: Yup.object({
      date: Yup.date().required("Date is required"),
      time: Yup.string().oneOf(availableTimes.times).required("Time is required"),
      guests: Yup.number().min(1).max(10).required("Number of guests is required"),
      occasion: Yup.string().oneOf(["birthday", "engagement", "anniversary"]).required("Occasion is required"),
    }),
    onSubmit: (values) => {
      const response = true; // Simplified for example purposes
      if (response) {
        localStorage.setItem("Bookings", JSON.stringify(values));
        navigate("/confirmation");
      }
    },
  });

  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", date: new Date(formik.values.date) });
  }, [formik.values.date, dispatch]);

  return (
    <div className={styles.container} {...props}>
      <div className={styles.top}>
        <h1>Book Now</h1>
      </div>
      <form className={styles.form} onSubmit={formik.handleSubmit} noValidate>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" className={styles.input} id="res-date" {...formik.getFieldProps('date')} />
        {formik.touched.date && formik.errors.date && <span className={styles.formMessageError}>{formik.errors.date}</span>}

        <label htmlFor="res-time">Choose time</label>
        <select className={styles.select} id="res-time" {...formik.getFieldProps('time')}>
        <option value="">Select time</option>
          {availableTimes.times.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        {formik.touched.time && formik.errors.time && <span className={styles.formMessageError}>{formik.errors.time}</span>}

        <label htmlFor="guests">Number of guests</label>
        <input type="number" className={styles.input} min="1" max="10" id="guests" placeholder="Enter number of guests" {...formik.getFieldProps('guests')} />
        {formik.touched.guests && formik.errors.guests && <span className={styles.formMessageError}>{formik.errors.guests}</span>}

        <label htmlFor="occasion">Occasion</label>
        <select className={styles.select} id="occasion" {...formik.getFieldProps('occasion')}>
          <option value="">Select occasion</option>
          <option value="birthday">Birthday</option>
          <option value="engagement">Engagement</option>
          <option value="anniversary">Anniversary</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion && <span className={styles.formMessageError}>{formik.errors.occasion}</span>}

        <input type="submit" className={styles.submitButton} value="Make Your Reservation" />
      </form>
    </div>
  );
};

export default BookingForm;
