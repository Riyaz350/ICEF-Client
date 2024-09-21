import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='  bg-opacity-80'>
            <Outlet/>
        </div>
    );
};

export default Home;