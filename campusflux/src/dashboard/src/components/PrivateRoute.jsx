// PrivateRoute.jsx
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthContext from '.AuthContext.js'; // Adjust import based on your structure

const PrivateRoute = ({ element, ...rest }) => {
    const { user } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            element={user ? element : <Navigate to="/login" />}
        />
    );
};

export default PrivateRoute;
