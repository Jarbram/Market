import React from 'react';
import './App.css';
import { Button, Container } from '@mui/material';
import { Navbar } from './common/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './Router';

function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
