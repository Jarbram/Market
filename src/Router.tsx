import React from 'react';  
import { Route, Routes } from 'react-router-dom';
import { HomePage, CharacterPage } from './pages';
import { RouterLayout } from './common/RouterLayout';
export const AppRouter: React.FC = () => {
    return(
        <Routes>
            <Route path='/' element={<RouterLayout/>}>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/character/:id' element={<CharacterPage/>}/>
            </Route>
        </Routes>
    )
}