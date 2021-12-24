import React, {createContext, useState} from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);

    const login = async (email, password, cb) => {
        try {
            localStorage.setItem('token', 'stub-token');
            setIsAuth(true);
            cb();
        } catch (e) {
            console.log('Error happened');
        }
    }

    const logout = async () => {
        try {
            localStorage.removeItem('token');
            setIsAuth(false);
        } catch (e) {
            console.log('Error happened');
        }
    }
    
    const value = {isAuth, login, logout}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
