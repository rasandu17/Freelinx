import React from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

const incomeData = [
{ name: 'Jan', income: 4000 },
{ name: 'Feb', income: 3000 },
{ name: 'Mar', income: 5000 },
{ name: 'Apr', income: 4500 },
{ name: 'May', income: 6000 },
{ name: 'Jun', income: 5500 },
{ name: 'Jul', income: 7000 },
{ name: 'Aug', income: 6200 },
{ name: 'Sep', income: 7500 },
{ name: 'Oct', income: 8000 },
{ name: 'Nov', income: 7800 },
{ name: 'Dec', income: 9000 },
];

const projectStatusData = [
{ name: 'Completed', value: 40 },
{ name: 'In Progress', value: 30 },
{ name: 'Pending', value: 20 },
{ name: 'On Hold', value: 10 },
];

const clientActivityData = [
{ name: 'Q1', newClients: 15, activeClients: 120 },
{ name: 'Q2', newClients: 20, activeClients: 135 },
{ name: 'Q3', newClients: 18, activeClients: 140 },
{ name: 'Q4', newClients: 25, activeClients: 155 },
];

const PIE_CHART_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-50 p-6 sm:p-8">
<h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Income Over Time Chart */}
<div className="bg-white rounded-lg shadow-xl p-6 border border-gray-200">
<h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-3">Income Over Time</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart data={incomeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" className="text-xs sm:text-sm text-gray-600" />
<YAxis className="text-xs sm:text-sm text-gray-600" />
<Tooltip
wrapperClassName="rounded-md shadow-lg"
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px', padding: '10px' }}
labelStyle={{ color: '#333', fontWeight: 'bold', marginBottom: '5px' }}
itemStyle={{ color: '#555' }}
formatter={(value) => `$${value.toLocaleString()}`}
/>
<Legend wrapperStyle={{ paddingTop: '10px', fontSize: '14px' }} />
<Line type="monotone" dataKey="income" stroke="#6366f1" strokeWidth={2} activeDot={{ r: 8, fill: '#6366f1' }} name="Total Income" />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white rounded-lg shadow-xl p-6 border border-gray-200">
<h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-3">Project Status Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart>
<Pie
data={projectStatusData}
cx="50%"
cy="50%"
labelLine={false}
outerRadius={100}
fill="#8884d8"
dataKey="value"
label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_CHART_COLORS[index % PIE_CHART_COLORS.length]} />
))}
</Pie>
<Tooltip
wrapperClassName="rounded-md shadow-lg"
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px', padding: '10px' }}
labelStyle={{ color: '#333', fontWeight: 'bold', marginBottom: '5px' }}
itemStyle={{ color: '#555' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px', fontSize: '14px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white rounded-lg shadow-xl p-6 border border-gray-200">
<h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-3">Quarterly Client Activity</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart data={clientActivityData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" className="text-xs sm:text-sm text-gray-600" />
<YAxis className="text-xs sm:text-sm text-gray-600" />
<Tooltip
wrapperClassName="rounded-md shadow-lg"
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px', padding: '10px' }}
labelStyle={{ color: '#333', fontWeight: 'bold', marginBottom: '5px' }}
itemStyle={{ color: '#555' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px', fontSize: '14px' }} />
<Bar dataKey="newClients" fill="#10b981" name="New Clients" />
<Bar dataKey="activeClients" fill="#3b82f6" name="Active Clients" />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
