import React from 'react';

const StatCard = ({
title,
value,
description,
icon, // This prop expects a React node, e.g., an SVG or an icon component from a library
valueColorClass = 'text-gray-800', // Tailwind class for value color, e.g., 'text-blue-600'
iconColorClass = 'text-blue-500', // Tailwind class for icon color, e.g., 'text-indigo-500'
}) => {
return (
<div className="bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between h-full min-w-max">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium text-gray-500">{title}</h3>
{icon && (
<div className={`text-3xl ${iconColorClass}`}>
{icon}
</div>
)}
</div>

<div className="flex flex-col flex-grow">
<p className={`text-4xl font-semibold ${valueColorClass} mb-2`}>
{value}
</p>
{description && (
<p className="text-sm text-gray-500 mt-auto">
{description}
</p>
)}
</div>
</div>
);
};

export default StatCard;
