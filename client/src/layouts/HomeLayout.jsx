import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function HomeLayout() {
    return (
        <>
            <Header role={'user'} />
            <Outlet></Outlet>
        </>
    );
}

export default HomeLayout;