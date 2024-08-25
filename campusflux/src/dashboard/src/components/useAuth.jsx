import { useContext, useEffect } from 'react';
import AuthContext from './AuthContext';

const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    const { user, error, loading } = context;

    // Log current state for debugging
    useEffect(() => {
        console.log('useAuth - Current User:', user);
        console.log('useAuth - Error:', error);
        console.log('useAuth - Loading:', loading);
    }, [user, error, loading]);

    return { user, error, loading }; // Return loading state
};

export default useAuth;
