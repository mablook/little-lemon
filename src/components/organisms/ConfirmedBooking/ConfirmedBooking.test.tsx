import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';
import Button from '../../atoms/Button/Button';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), 
  useNavigate: () => mockedNavigate,
}));


jest.mock('../../atoms/Button/Button', () => (props: any) => (
  <button onClick={props.onClick} aria-label={props['aria-label']}>{props.children}</button>
));

describe('ConfirmedBooking', () => {
  beforeEach(() => {
    localStorage.setItem('Bookings', JSON.stringify({
      date: '2023-01-01',
      time: '18:00',
      guests: '4',
      occasion: 'Birthday'
    }));
  });

  afterEach(() => {
    localStorage.clear();
    mockedNavigate.mockClear();
  });

  it('renders booking details from localStorage', () => {
    render(<ConfirmedBooking />, { wrapper: BrowserRouter });
    expect(screen.getByText('Thank you for your reservation!')).toBeInTheDocument();
    expect(screen.getByText(/Birthday/)).toBeInTheDocument();
    expect(screen.getByText(/4/)).toBeInTheDocument();
    expect(screen.getByText(/2023-01-01/)).toBeInTheDocument();
    expect(screen.getByText(/18:00/)).toBeInTheDocument();
  });

  it('navigates to home when the button is clicked', () => {
    render(<ConfirmedBooking />, { wrapper: BrowserRouter });
    const backButton = screen.getByRole('button', { name: /Go back to the home page/i });
    backButton.click();
    expect(mockedNavigate).toHaveBeenCalledWith('/');
  });
});
