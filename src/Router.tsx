import React from 'react';  
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { LoginPage } from './pages/Login';
import { RouterLayout } from './common/RouterLayout';
export const AppRouter: React.FC = () => {
    return(
        <Routes>
            <Route path='/' element={<RouterLayout/>}>
                <Route path='/' element={<HomePage/>}/>
            </Route>
            <Route path='/login' element={<LoginPage/>}/>
        </Routes>
    )
}