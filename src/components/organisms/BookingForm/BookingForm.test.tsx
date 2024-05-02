import React, { FC } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm';
import { BrowserRouter } from 'react-router-dom';

describe('BookingForm', () => {
  const mockDispatch = jest.fn();
  const availableTimes = {
    times: ['10:00', '12:00', '14:00']
  };

  interface WrapperProps {
    children?: React.ReactNode;  // Using React.ReactNode for children
  }
  
  const Wrapper: FC<WrapperProps> = ({ children }) => (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
  

  it('fills out and submits the form with custom initial values', async () => {
    render(
      <BookingForm 
        availableTimes={availableTimes} 
        dispatch={mockDispatch} 
        initialValues={{
          date: '2023-01-01',
          time: '12:00',
          guests: 3,
          occasion: 'anniversary'
        }}
      />, { wrapper: Wrapper }
    );
    expect(screen.getByDisplayValue('2023-01-01')).toBeInTheDocument();
    expect(screen.getByDisplayValue('12:00')).toBeInTheDocument();
    expect(screen.getByDisplayValue('3')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Anniversary')).toBeInTheDocument();
    await userEvent.type(screen.getByLabelText('Choose date'), '2023-01-02');
    userEvent.click(screen.getByRole('button', { name: /make your reservation/i }));
  });
});
