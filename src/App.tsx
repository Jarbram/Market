import React, { Suspense } from 'react';
import './App.css';
import { Button, Container } from '@mui/material';
import { Navbar } from './common/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './Router';
import { NotificationProvider } from './context/notification.context';

function App() {
  return (
    <NotificationProvider>
      <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
      </Suspense>
      
    </NotificationProvider>
    
  );
}

export default App;
