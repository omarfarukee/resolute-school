import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import Navber from '../Shared/Navber';

const Main = () => {
    return (
        <div className=''>
            <Navber></Navber>
            <div className='flex'>
                <Header></Header>
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Main;