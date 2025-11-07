import React, { useState, useEffect } from 'react';
import {
ResponsiveContainer,
BarChart,
Bar,
LineChart,
Line,
PieChart,
Pie,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
Cell,
} from 'recharts';

const ReportsPage = () => {
// Dummy Data for charts
const incomeData = [
{ name: 'Jan', income: 4000, expenses: 2400 },
{ name: 'Feb', income: 3000, expenses: 1398 },
{ name: 'Mar', income: 2000, expenses: 9800 },
{ name: 'Apr', income: 2780, expenses: 3908 },
{ name: 'May', income: 1890, expenses: 4800 },
{ name: 'Jun', income: 2390, expenses: 3800 },
{ name: 'Jul', income: 3490, expenses: 4300 },
{ name: 'Aug', income: 4200, expenses: 2100 },
{ name: 'Sep', income: 3800, expenses: 2900 },
{ name: 'Oct', income: 4500, expenses: 3500 },
{ name: 'Nov', income: 5000, expenses: 3000 },
{ name: 'Dec', income: 4800, expenses: 2800 },
];

const projectStatusData = [
{ name: 'Completed', value: 400 },
{ name: 'In Progress', value: 300 },
{ name: 'Pending', value: 300 },
{ name: 'On Hold', value: 200 },
];

const clientActivityData = [
{ name: 'Client A', projects: 12, revenue: 50000 },
{ name: 'Client B', projects: 8, revenue: 35000 },
{ name: 'Client C', projects: 15, revenue: 65000 },
{ name: 'Client D', projects: 5, revenue: 20000 },
{ name: 'Client E', projects: 10, revenue: 45000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

return (
<div className="min-h-screen bg-gray-100 p-8">
<h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">Business Reports Overview</h1>

<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
{/* Income Chart */}
<div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
<h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
contentStyle={{ borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}
itemStyle={{ color: '#333' }}
labelStyle={{ fontWeight: 'bold' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
<Line type="monotone" dataKey="expenses" stroke="#82ca9d" activeDot={{ r: 8 }} strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
<h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Project Status Distribution</h2>
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
nameKey="name"
label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))}
</Pie>
<Tooltip
contentStyle={{ borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}
itemStyle={{ color: '#333' }}
labelStyle={{ fontWeight: 'bold' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
<h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Client Activity - Projects</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" className="text-sm" />
<YAxis className="text-sm" label={{ value: 'Projects', angle: -90, position: 'insideLeft', offset: -10 }} />
<Tooltip
contentStyle={{ borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}
itemStyle={{ color: '#333' }}
labelStyle={{ fontWeight: 'bold' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="projects" fill="#82ca9d" barSize={30} radius={[10, 10, 0, 0]} />
</BarChart>
</ResponsiveContainer>
</div>

{/* Example: Another chart type, e.g., Revenue per Client using BarChart with a different data key */}
<div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
<h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Client Revenue Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" className="text-sm" />
<YAxis className="text-sm" label={{ value: 'Revenue', angle: -90, position: 'insideLeft', offset: -10 }} />
<Tooltip
formatter={(value) => `$${value.toLocaleString()}`}
contentStyle={{ borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}
itemStyle={{ color: '#333' }}
labelStyle={{ fontWeight: 'bold' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="revenue" fill="#8884d8" barSize={30} radius={[10, 10, 0, 0]} />
</BarChart>
</ResponsiveContainer>
</div>
</div>
</div>
);
};

export default ReportsPage;
