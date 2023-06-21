import React from 'react';
import './App.css';
import { Button, Container } from '@mui/material';
import { Navbar } from './common/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './Router';
import { NotificationProvider } from './context/notification.context';

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </NotificationProvider>
    
  );
}

export default App;
