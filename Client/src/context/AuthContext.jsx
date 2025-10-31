import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
const storedUser = localStorage.getItem('user');
if (storedUser) {
try {
setUser(JSON.parse(storedUser));
} catch (error) {
console.error("Failed to parse user from localStorage", error);
localStorage.removeItem('user');
}
}
setLoading(false);
}, []);

const login = async (userData) => {
setLoading(true);
return new Promise((resolve) => {
setTimeout(() => {
setUser(userData);
localStorage.setItem('user', JSON.stringify(userData));
setLoading(false);
resolve(userData);
}, 500);
});
};

const logout = async () => {
setLoading(true);
return new Promise((resolve) => {
setTimeout(() => {
setUser(null);
localStorage.removeItem('user');
setLoading(false);
resolve();
}, 300);
});
};

const isAuthenticated = !!user;

const contextValue = {
user,
isAuthenticated,
loading,
login,
logout,
};

return (
<AuthContext.Provider value={contextValue}>
{children}
</AuthContext.Provider>
);
};

export const useAuth = () => {
const context = useContext(AuthContext);
if (context === undefined) {
throw new Error('useAuth must be used within an AuthProvider');
}
return context;
};
