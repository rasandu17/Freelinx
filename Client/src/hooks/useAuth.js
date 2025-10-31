import React, { useState, useEffect, useCallback } from 'react';

const AUTH_TOKEN_KEY = 'authToken';

export const useAuth = () => {
const [token, setToken] = useState<string | null>(null);
const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

useEffect(() => {
const storedToken = localStorage.getItem(AUTH_TOKEN_KEY);
if (storedToken) {
setToken(storedToken);
setIsAuthenticated(true);
}
}, []);

const login = useCallback((newToken: string) => {
localStorage.setItem(AUTH_TOKEN_KEY, newToken);
setToken(newToken);
setIsAuthenticated(true);
}, []);

const logout = useCallback(() => {
localStorage.removeItem(AUTH_TOKEN_KEY);
setToken(null);
setIsAuthenticated(false);
}, []);

return {
isAuthenticated,
token,
login,
logout,
};
};
