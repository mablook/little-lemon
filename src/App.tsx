import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Bookingpage from './components/pages/Bookingpage/Bookingpage';
import ConfirmationPage from './components/pages/ConfirmationPage/ConfirmationPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Bookingpage/>} path="/bookings"/>
          <Route element={<ConfirmationPage/>} path="/confirmation"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
