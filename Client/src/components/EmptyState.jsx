import React from 'react';

const EmptyState = ({
title = "No data available",
description = "It looks like there's nothing here yet. Check back later or try adjusting your filters.",
icon: IconComponent,
className = ""
}) => {
return (
<div className={`flex flex-col items-center justify-center p-8 text-center bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}>
{IconComponent ? (
<IconComponent className="w-16 h-16 text-gray-400 mb-4" />
) : (
<svg
className="w-16 h-16 text-gray-400 mb-4"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
aria-hidden="true"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={2}
d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
/>
</svg>
)}
<h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
<p className="text-gray-600 max-w-md">{description}</p>
</div>
);
};

export default EmptyState;
