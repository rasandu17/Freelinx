import React from 'react';

const InvoiceCard = ({ invoiceNumber, clientName, amount, dueDate, status }) => {
const getStatusBadgeClasses = (currentStatus) => {
switch (currentStatus.toLowerCase()) {
case 'paid':
return 'bg-green-100 text-green-800';
case 'pending':
return 'bg-yellow-100 text-yellow-800';
case 'overdue':
return 'bg-red-100 text-red-800';
case 'draft':
return 'bg-gray-100 text-gray-800';
default:
return 'bg-blue-100 text-blue-800';
}
};

const badgeClasses = getStatusBadgeClasses(status);

const formattedDueDate = new Intl.DateTimeFormat('en-US', {
year: 'numeric',
month: 'short',
day: 'numeric',
}).format(new Date(dueDate));

const formattedAmount = new Intl.NumberFormat('en-US', {
style: 'currency',
currency: 'USD',
}).format(amount);

return (
<div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out border border-gray-200 min-w-[250px]">
<div className="flex justify-between items-start mb-2">
<h3 className="text-sm font-bold text-gray-800">
#<span className="text-indigo-600">{invoiceNumber}</span>
</h3>
<span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${badgeClasses}`}>
{status}
</span>
</div>

<p className="text-xs text-gray-500 mb-1 leading-snug">
<span className="font-medium text-gray-700">{clientName}</span>
</p>

<div className="flex justify-between items-center pt-2 mt-2 border-t border-gray-100">
<p className="text-xs text-gray-400">Due: <span className="font-medium text-gray-600">{formattedDueDate}</span></p>
<p className="text-lg font-bold text-gray-800">{formattedAmount}</p>
</div>
</div>
);
};

export default InvoiceCard;
