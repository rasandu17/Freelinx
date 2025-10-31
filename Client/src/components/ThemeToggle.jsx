import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
const [isDarkMode, setIsDarkMode] = useState(() => {
// Initialize from localStorage or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
return savedTheme === 'dark';
}
// Check for system dark mode preference
return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
});

useEffect(() => {
const root = document.documentElement;
if (isDarkMode) {
root.classList.add('dark');
localStorage.setItem('theme', 'dark');
} else {
root.classList.remove('dark');
localStorage.setItem('theme', 'light');
}
}, [isDarkMode]); // Re-run effect when isDarkMode changes

const toggleDarkMode = () => {
setIsDarkMode(prevMode => !prevMode);
};

return (
<button
onClick={toggleDarkMode}
className="
p-2 rounded-full bg-gray-200 text-gray-800
dark:bg-gray-700 dark:text-white
hover:bg-gray-300 dark:hover:bg-gray-600
focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
transition-colors duration-200 ease-in-out
"
aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
>
{isDarkMode ? (
// Sun icon for light mode
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>
) : (
// Moon icon for dark mode
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>
)}
</button>
);
};

export default DarkModeToggle;
