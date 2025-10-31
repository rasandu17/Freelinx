import React from 'react';

const Breadcrumbs = ({ items }) => {
if (!items || items.length === 0) {
return null;
}

return (
<nav className="flex" aria-label="Breadcrumb">
<ol className="flex items-center">
{items.map((item, index) => {
const isLast = index === items.length - 1;

return (
<li key={item.href || item.label + index} className="flex items-center">
{index > 0 && (
<svg
className="w-4 h-4 text-gray-400 mx-2"
fill="currentColor"
viewBox="0 0 20 20"
xmlns="http://www.w3.org/2000/svg"
>
<path
fillRule="evenodd"
d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
clipRule="evenodd"
></path>
</svg>
)}
{isLast ? (
<span
className="text-sm font-semibold text-gray-800 dark:text-gray-200"
aria-current="page"
>
{item.label}
</span>
) : (
<a
href={item.href}
className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-200"
>
{item.label}
</a>
)}
</li>
);
})}
</ol>
</nav>
);
};

export default Breadcrumbs;
