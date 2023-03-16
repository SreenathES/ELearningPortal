import React from 'react';
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ isLoggedIn, userRole, children }) {
    if (isLoggedIn && userRole === 'student') {
        return children;
    }
    return <Navigate to={'/unauthorized'} replace />;
}

export default ProtectedRoutes;