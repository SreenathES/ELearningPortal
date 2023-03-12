import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function HomeLayout() {
    return (
        <>
            <Header role={'user'} />
            <Outlet />
            <Footer />
        </>
    );
}

export default HomeLayout;