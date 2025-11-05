import React, { useState } from 'react';
import {
ResponsiveContainer,
LineChart,
Line,
PieChart,
Pie,
BarChart,
Bar,
AreaChart,
Area,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
Cell,
} from 'recharts';

const ReportsPage = () => {
const incomeData = [
{ name: 'Jan', income: 4000, expenses: 2400 },
{ name: 'Feb', income: 3000, expenses: 1398 },
{ name: 'Mar', income: 5000, expenses: 2210 },
{ name: 'Apr', income: 4780, expenses: 2000 },
{ name: 'May', income: 5890, expenses: 2181 },
{ name: 'Jun', income: 6000, expenses: 2500 },
{ name: 'Jul', income: 5200, expenses: 3200 },
];

const projectStatusData = [
{ name: 'Completed', value: 15 },
{ name: 'In Progress', value: 10 },
{ name: 'Pending', value: 7 },
{ name: 'On Hold', value: 3 },
];
const PIE_COLORS = ['#00C49F', '#FFBB28', '#FF8042', '#0088FE'];

const clientActivityData = [
{ client: 'Client A', projects: 12, meetings: 25 },
{ client: 'Client B', projects: 8, meetings: 18 },
{ client: 'Client C', projects: 5, meetings: 10 },
{ client: 'Client D', projects: 3, meetings: 7 },
{ client: 'Client E', projects: 2, meetings: 5 },
];

return (
<div className="container mx-auto p-6 bg-gray-100 min-h-screen">
<h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Business Reports</h1>

<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
{/* Income Report */}
<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<AreaChart data={incomeData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
contentStyle={{
backgroundColor: '#fff',
border: '1px solid #ccc',
borderRadius: '4px',
padding: '8px',
fontSize: '14px',
}}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Area type="monotone" dataKey="income" stackId="1" stroke="#8884d8" fill="#8884d8" name="Income" />
<Area type="monotone" dataKey="expenses" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="Expenses" />
</AreaChart>
</ResponsiveContainer>
</div>

{/* Project Status Report */}
<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Project Status Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip
contentStyle={{
backgroundColor: '#fff',
border: '1px solid #ccc',
borderRadius: '4px',
padding: '8px',
fontSize: '14px',
}}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Report */}
<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Activity & Engagement</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart data={clientActivityData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="client" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
contentStyle={{
backgroundColor: '#fff',
border: '1px solid #ccc',
borderRadius: '4px',
padding: '8px',
fontSize: '14px',
}}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="projects" fill="#82ca9d" name="Projects" />
<Bar dataKey="meetings" fill="#8884d8" name="Meetings" />
</BarChart>
</ResponsiveContainer>
</div>

{/* Additional Chart Example: Quarterly Performance */}
<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Quarterly Performance</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={[
{ quarter: 'Q1', sales: 12000, profit: 5000 },
{ quarter: 'Q2', sales: 15000, profit: 7000 },
{ quarter: 'Q3', sales: 11000, profit: 4500 },
{ quarter: 'Q4', sales: 18000, profit: 9000 },
]}
margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="quarter" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
contentStyle={{
backgroundColor: '#fff',
border: '1px solid #ccc',
borderRadius: '4px',
padding: '8px',
fontSize: '14px',
}}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="sales" stroke="#ffc658" activeDot={{ r: 8 }} name="Sales" />
<Line type="monotone" dataKey="profit" stroke="#a4de6c" activeDot={{ r: 8 }} name="Profit" />
</LineChart>
</ResponsiveContainer>
</div>
</div>
</div>
);
};

export default ReportsPage;
