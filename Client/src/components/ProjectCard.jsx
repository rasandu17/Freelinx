import React from 'react';

const ProjectCard = ({ name, client, progress, status }) => {
const statusColors = {
'Completed': 'bg-green-500',
'In Progress': 'bg-blue-500',
'Pending': 'bg-yellow-500',
'On Hold': 'bg-red-500',
'Cancelled': 'bg-gray-500',
'Default': 'bg-gray-500' // Fallback
};

const getStatusColorClass = (currentStatus) => {
return statusColors[currentStatus] || statusColors['Default'];
};

// Ensure progress is clamped between 0 and 100
const clampedProgress = Math.max(0, Math.min(100, progress));

return (
<div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between h-full">
<div>
<h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
<p className="text-sm text-gray-600 mb-4">{client}</p>
</div>

<div className="mb-4">
<div className="w-full bg-gray-200 rounded-full h-2.5">
<div
className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
style={{ width: `${clampedProgress}%` }}
></div>
</div>
<p className="text-sm text-gray-500 mt-2 text-right">{clampedProgress}%</p>
</div>

<div>
<span
className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColorClass(status)}`}
>
{status}
</span>
</div>
</div>
);
};

export default ProjectCard;
