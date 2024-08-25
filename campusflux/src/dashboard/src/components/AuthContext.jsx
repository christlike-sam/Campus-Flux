import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state
    const auth = getAuth();
    const db = getFirestore();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            console.log('Auth state changed:', firebaseUser); // Log Firebase user object

            if (firebaseUser) {
                try {
                    const userDoc = doc(db, 'users', firebaseUser.uid);
                    const userData = await getDoc(userDoc);

                    if (userData.exists()) {
                        console.log('User data:', userData.data()); // Log fetched user data
                        setUser({ id: firebaseUser.uid, ...userData.data() });
                    } else {
                        console.error('No user data found for the current user.');
                        setUser(null);
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error.message);
                    setError('Error fetching user data.');
                    setUser(null);
                }
            } else {
                setUser(null);
            }
            setLoading(false); // Set loading to false when done
        });

        return () => unsubscribe();
    }, [auth, db]);

    return (
        <AuthContext.Provider value={{ user, error, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
