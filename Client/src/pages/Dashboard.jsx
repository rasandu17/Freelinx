import React, { useState } from 'react';

const DashboardPage = () => {
const [dashboardSummary] = useState({
totalIncome: '$12,345',
totalClients: '125',
totalProjects: '34',
totalInvoices: '78',
});

return (
<div className="min-h-screen bg-gray-100 p-6 sm:p-8 lg:p-10">
<h1 className="text-4xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white rounded-lg shadow-md p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-medium text-gray-500">Total Income</h3>
</div>
<p className="text-4xl font-semibold text-gray-900">{dashboardSummary.totalIncome}</p>
</div>

<div className="bg-white rounded-lg shadow-md p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-medium text-gray-500">Clients</h3>
</div>
<p className="text-4xl font-semibold text-gray-900">{dashboardSummary.totalClients}</p>
</div>

<div className="bg-white rounded-lg shadow-md p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-medium text-gray-500">Projects</h3>
</div>
<p className="text-4xl font-semibold text-gray-900">{dashboardSummary.totalProjects}</p>
</div>

<div className="bg-white rounded-lg shadow-md p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-medium text-gray-500">Invoices</h3>
</div>
<p className="text-4xl font-semibold text-gray-900">{dashboardSummary.totalInvoices}</p>
</div>
</div>
</div>
);
};

export default DashboardPage;
