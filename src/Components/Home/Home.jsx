import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='bg-[#112f6d] bg-opacity-80'>
            <Outlet/>
        </div>
    );
};

export default Home;