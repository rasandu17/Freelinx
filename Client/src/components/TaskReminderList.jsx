import React, { useState } from 'react';

const UpcomingTasksPanel = () => {
const [tasks, setTasks] = useState([
{
id: 1,
title: 'Submit monthly report',
description: 'Finalize and submit the Q3 financial report.',
type: 'task',
date: 'Today, 5 PM',
priority: 'high',
},
{
id: 2,
title: 'Team sync-up meeting',
description: 'Weekly check-in on project progress.',
type: 'reminder',
date: 'Tomorrow, 10 AM',
priority: 'medium',
},
{
id: 3,
title: 'Call client X for feedback',
description: 'Discuss recent project deliverables.',
type: 'task',
date: 'Tomorrow',
priority: 'low',
},
{
id: 4,
title: 'Review new design mockups',
description: 'Provide feedback on the UX/UI designs.',
type: 'task',
date: 'Sep 25',
priority: 'medium',
},
{
id: 5,
title: 'Pay utility bills',
description: 'Electricity and internet bills are due.',
type: 'reminder',
date: 'Sep 26',
priority: 'high',
},
]);

const getBorderColorClass = (priority) => {
switch (priority) {
case 'high':
return 'border-red-500';
case 'medium':
return 'border-yellow-500';
case 'low':
return 'border-blue-500';
default:
return 'border-gray-300';
}
};

const getPriorityBadgeClass = (priority) => {
switch (priority) {
case 'high':
return 'bg-red-100 text-red-800';
case 'medium':
return 'bg-yellow-100 text-yellow-800';
case 'low':
return 'bg-blue-100 text-blue-800';
default:
return 'bg-gray-100 text-gray-800';
}
};

return (
<div className="p-4 bg-gray-50 rounded-lg shadow-lg max-w-md mx-auto">
<h2 className="text-2xl font-extrabold text-gray-800 mb-5 border-b pb-3 border-gray-200">
Upcoming Tasks & Reminders
</h2>
<div className="space-y-4">
{tasks.length === 0 ? (
<p className="text-gray-600 text-center py-4">No upcoming tasks or reminders found.</p>
) : (
tasks.map((task) => (
<div
key={task.id}
className={`bg-white p-4 rounded-lg shadow-sm border-l-4 ${getBorderColorClass(task.priority)} flex items-start space-x-3 transition-all duration-200 hover:shadow-md hover:scale-[1.01]`}
>
<div className="flex-shrink-0 mt-0.5">
{task.type === 'task' ? (
<svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
</svg>
) : (
<svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
)}
</div>
<div className="flex-grow">
<h3 className="text-lg font-semibold text-gray-900 leading-tight">{task.title}</h3>
<p className="text-sm text-gray-600 mt-0.5">{task.description}</p>
<div className="flex items-center mt-2 text-xs text-gray-500">
<span className="font-medium mr-2">{task.date}</span>
<span className={`px-2 py-0.5 rounded-full font-semibold ${getPriorityBadgeClass(task.priority)}`}>
{task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
</span>
</div>
</div>
</div>
))
)}
</div>
</div>
);
};

export default UpcomingTasksPanel;
