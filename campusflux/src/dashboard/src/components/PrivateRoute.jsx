// PrivateRoute.jsx
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthContext from './AuthContext'; // Adjust import based on your structure

const PrivateRoute = ({ element, ...rest }) => {
    const { user } = useContext(AuthContext);

    console.log("PrivateRoute - Current User:", user);

    if (!user) {
        console.warn("PrivateRoute - User not authenticated. Redirecting to login.");
    }

    return (
        <Route
            {...rest}
            element={user ? element : <Navigate to="/login" />}
        />
    );
};

export default PrivateRoute;
