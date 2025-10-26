import React, { useState } from 'react';

function Navbar() {
const [isOpen, setIsOpen] = useState(false);

return (
<nav className="bg-gray-800 p-4 sticky top-0 z-50 shadow-lg">
<div className="container mx-auto flex justify-between items-center">
{/* Logo Area */}
<div className="text-white text-2xl font-bold tracking-wide">
MyLogo
</div>

{/* Desktop Navigation */}
<div className="hidden md:flex items-center space-x-6">
<a href="/dashboard" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg font-medium">Dashboard</a>
<a href="/clients" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg font-medium">Clients</a>
<a href="/projects" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg font-medium">Projects</a>
<a href="/invoices" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg font-medium">Invoices</a>

{/* Profile Icon */}
<div className="ml-4 w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold text-lg cursor-pointer hover:bg-gray-500 transition-colors duration-200">
P
</div>
</div>

{/* Mobile menu button */}
<div className="md:hidden flex items-center">
<button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 rounded p-1 transition-colors duration-200">
{isOpen ? (
<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
) : (
<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
)}
</button>
</div>
</div>

{/* Mobile Menu */}
{isOpen && (
<div className="md:hidden mt-3 bg-gray-700 rounded-lg p-4 space-y-2 flex flex-col items-center">
<a href="/dashboard" className="block text-gray-300 hover:text-white transition-colors duration-200 py-2 px-3 rounded w-full text-center text-lg font-medium">Dashboard</a>
<a href="/clients" className="block text-gray-300 hover:text-white transition-colors duration-200 py-2 px-3 rounded w-full text-center text-lg font-medium">Clients</a>
<a href="/projects" className="block text-gray-300 hover:text-white transition-colors duration-200 py-2 px-3 rounded w-full text-center text-lg font-medium">Projects</a>
<a href="/invoices" className="block text-gray-300 hover:text-white transition-colors duration-200 py-2 px-3 rounded w-full text-center text-lg font-medium">Invoices</a>

{/* Profile Icon in mobile */}
<div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold text-lg cursor-pointer hover:bg-gray-500 transition-colors duration-200 mt-4">
P
</div>
</div>
)}
</nav>
);
}

export default Navbar;
