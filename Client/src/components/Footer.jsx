import React from 'react';

const Footer = () => {
const currentYear = new Date().getFullYear();

return (
<footer className="bg-gray-100 dark:bg-gray-800 py-4 mt-8">
<div className="container mx-auto px-4">
<p className="text-center text-gray-600 dark:text-gray-400 text-sm">
&copy; {currentYear} MyCompany. All rights reserved.
</p>
</div>
</footer>
);
};

export default Footer;
