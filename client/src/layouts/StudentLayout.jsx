import React from 'react'
import { Outlet } from 'react-router';

function StudentLayout() {
    return (
        <>
            <Outlet />
        </>
    );
}

export default StudentLayout