import React, { useState, useEffect } from 'react';
import {
ResponsiveContainer,
BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
PieChart, Pie, Cell,
AreaChart, Area, CartesianGrid
} from 'recharts';

const incomeData = [
{ month: 'Jan', income: 4000, expenses: 2400 },
{ month: 'Feb', income: 3000, expenses: 1398 },
{ month: 'Mar', income: 5000, expenses: 3200 },
{ month: 'Apr', income: 4780, expenses: 3908 },
{ month: 'May', income: 5890, expenses: 4800 },
{ month: 'Jun', income: 6000, expenses: 4000 },
{ month: 'Jul', income: 6500, expenses: 4500 },
{ month: 'Aug', income: 6200, expenses: 4100 },
{ month: 'Sep', income: 7000, expenses: 5000 },
{ month: 'Oct', income: 6800, expenses: 4900 },
{ month: 'Nov', income: 7500, expenses: 5500 },
{ month: 'Dec', income: 8000, expenses: 6000 },
];

const projectStatusData = [
{ name: 'Completed', value: 30 },
{ name: 'In Progress', value: 20 },
{ name: 'On Hold', value: 10 },
{ name: 'Upcoming', value: 15 },
{ name: 'Cancelled', value: 5 },
];
const COLORS = ['#06b6d4', '#f59e0b', '#ef4444', '#10b981', '#6b7280'];

const clientActivityData = [
{ name: 'Day 1', newClients: 4, activeClients: 24 },
{ name: 'Day 2', newClients: 3, activeClients: 13 },
{ name: 'Day 3', newClients: 5, activeClients: 22 },
{ name: 'Day 4', newClients: 4, activeClients: 29 },
{ name: 'Day 5', newClients: 5, activeClients: 38 },
{ name: 'Day 6', newClients: 6, activeClients: 30 },
{ name: 'Day 7', newClients: 7, activeClients: 43 },
];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-100 p-8">
<h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Business Reports Overview</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{/* Income Report */}
<div className="bg-white shadow-xl rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
<h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={incomeData}
margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }} />
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="income" fill="#2563eb" name="Income" radius={[4, 4, 0, 0]} />
<Bar dataKey="expenses" fill="#f97316" name="Expenses" radius={[4, 4, 0, 0]} />
</BarChart>
</ResponsiveContainer>
</div>

{/* Project Status Report */}
<div className="bg-white shadow-xl rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
<h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Project Status Distribution</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart>
<Pie
data={projectStatusData}
cx="50%"
cy="50%"
labelLine={false}
outerRadius={120}
fill="#8884d8"
dataKey="value"
label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))}
</Pie>
<Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }} />
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Report */}
<div className="bg-white shadow-xl rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
<h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Weekly Client Activity</h2>
<ResponsiveContainer width="100%" height={300}>
<AreaChart
data={clientActivityData}
margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }} />
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Area type="monotone" dataKey="activeClients" stroke="#8884d8" fillOpacity={1} fill="url(#colorActive)" name="Active Clients" />
<Area type="monotone" dataKey="newClients" stroke="#82ca9d" fillOpacity={1} fill="url(#colorNew)" name="New Clients" />
<defs>
<linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
</linearGradient>
<linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
<stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
</linearGradient>
</defs>
</AreaChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
