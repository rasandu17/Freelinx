import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotificationBell = () => {
const upcomingTasks = [
"Review Q3 Financials (due tomorrow)",
"Prepare presentation for client A (due Friday)",
"Update project documentation (end of week)",
"Schedule team sync (Wednesday morning)",
"Follow up on pending approvals for project X",
"Draft agenda for Monday's executive meeting"
];
const [taskIndex, setTaskIndex] = useState(0);

const triggerTaskNotification = () => {
toast.info(`Upcoming Task: ${upcomingTasks[taskIndex]}`, {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
setTaskIndex((prevIndex) => (prevIndex + 1) % upcomingTasks.length);
};

return (
<div className="relative inline-block">
<button
onClick={triggerTaskNotification}
className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 ease-in-out group"
aria-label="Show notifications"
>
<svg
className="h-6 w-6 text-gray-600 group-hover:text-gray-800"
fill="none"
stroke="currentColor"
viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="2"
d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
></path>
</svg>
</button>

<ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
</div>
);
};

export default NotificationBell;
