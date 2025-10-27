import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
{ name: 'Dashboard', icon: (
<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l-7 7m7-7v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>
), path: '/' },
{ name: 'Analytics', icon: (
<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
</svg>
), path: '/analytics' },
{ name: 'Products', icon: (
<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
</svg>
), path: '/products' },
{ name: 'Orders', icon: (
<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
</svg>
), path: '/orders' },
{ name: 'Settings', icon: (
<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
), path: '/settings' },
];

export default function Sidebar() {
const [isCollapsed, setIsCollapsed] = useState(false);
const location = useLocation();

return (
<div
className={`fixed h-screen bg-gray-900 text-white transition-all duration-300 ease-in-out z-50
${isCollapsed ? 'w-20' : 'w-64'}`}
>
<div className="flex items-center justify-end p-4 border-b border-gray-700">
{!isCollapsed && (
<h1 className="text-2xl font-semibold mr-auto">My App</h1>
)}
<button
onClick={() => setIsCollapsed(!isCollapsed)}
className="p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
>
{isCollapsed ? (
<svg
className="h-6 w-6 text-white"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={2}
d="M13 5l7 7-7 7M5 5l7 7-7 7"
/>
</svg>
) : (
<svg
className="h-6 w-6 text-white"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={2}
d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
/>
</svg>
)}
</button>
</div>

<nav className="flex flex-col p-4 space-y-2">
{navLinks.map((link) => (
<Link
key={link.name}
to={link.path}
className={`flex items-center gap-4 p-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white
${location.pathname === link.path ? 'bg-gray-700 text-white' : ''}`}
aria-current={location.pathname === link.path ? 'page' : undefined}
>
<span className="flex-shrink-0">{link.icon}</span>
<span
className={`${isCollapsed ? 'hidden' : 'block'} whitespace-nowrap overflow-hidden`}
>
{link.name}
</span>
</Link>
))}
</nav>
</div>
);
}
