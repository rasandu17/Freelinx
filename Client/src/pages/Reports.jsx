import React from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

const incomeData = [
{ name: 'Jan', income: 4000, expenses: 2400 },
{ name: 'Feb', income: 3000, expenses: 1398 },
{ name: 'Mar', income: 2000, expenses: 9800 },
{ name: 'Apr', income: 2780, expenses: 3908 },
{ name: 'May', income: 1890, expenses: 4800 },
{ name: 'Jun', income: 2390, expenses: 3800 },
{ name: 'Jul', income: 3490, expenses: 4300 },
];

const projectStatusData = [
{ name: 'Completed', value: 12 },
{ name: 'In Progress', value: 8 },
{ name: 'Pending', value: 3 },
{ name: 'On Hold', value: 2 },
];
const projectStatusColors = ['#82ca9d', '#8884d8', '#ffc658', '#FF8042'];

const clientActivityData = [
{ name: 'Client A', projects: 5, meetings: 10 },
{ name: 'Client B', projects: 3, meetings: 7 },
{ name: 'Client C', projects: 7, meetings: 12 },
{ name: 'Client D', projects: 2, meetings: 5 },
];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-100 p-8">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Reports Overview</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" stroke="#555" />
<YAxis stroke="#555" />
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ fontWeight: 'bold', color: '#333' }}
itemStyle={{ color: '#555' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#82ca9d" activeDot={{ r: 8 }} strokeWidth={2} />
<Line type="monotone" dataKey="expenses" stroke="#8884d8" strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Project Status Distribution</h2>
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
label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={projectStatusColors[index % projectStatusColors.length]} />
))}
</Pie>
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ fontWeight: 'bold', color: '#333' }}
itemStyle={{ color: '#555' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Project Activity</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" stroke="#555" />
<YAxis stroke="#555" />
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ fontWeight: 'bold', color: '#333' }}
itemStyle={{ color: '#555' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="projects" fill="#a4de6c" />
<Bar dataKey="meetings" fill="#8884d8" />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
