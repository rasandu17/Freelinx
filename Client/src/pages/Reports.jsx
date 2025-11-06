import React from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
PieChart, Pie, Cell, BarChart, Bar
} from 'recharts';

const ReportsPage = () => {
const incomeData = [
{ name: 'Jan', income: 4000, expenses: 2400 },
{ name: 'Feb', income: 3000, expenses: 1398 },
{ name: 'Mar', income: 5000, expenses: 3800 },
{ name: 'Apr', income: 4500, expenses: 3908 },
{ name: 'May', income: 6000, expenses: 4800 },
{ name: 'Jun', income: 5500, expenses: 3800 },
];

const projectStatusData = [
{ name: 'Completed', value: 12 },
{ name: 'In Progress', value: 8 },
{ name: 'Pending', value: 5 },
{ name: 'On Hold', value: 2 },
];
const PIE_COLORS = ['#82ca9d', '#8884d8', '#ffc658', '#FF8042'];

const clientActivityData = [
{ name: 'Client A', projects: 5, active: 4 },
{ name: 'Client B', projects: 3, active: 2 },
{ name: 'Client C', projects: 7, active: 6 },
{ name: 'Client D', projects: 2, active: 1 },
{ name: 'Client E', projects: 4, active: 3 },
];

return (
<div className="p-6 bg-gray-100 min-h-screen">
<h1 className="text-3xl font-bold text-gray-800 mb-6">Reports Overview</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-lg shadow-md p-4">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart data={incomeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Legend />
<Line type="monotone" dataKey="income" stroke="#82ca9d" activeDot={{ r: 8 }} />
<Line type="monotone" dataKey="expenses" stroke="#8884d8" />
</LineChart>
</ResponsiveContainer>
</div>

<div className="bg-white rounded-lg shadow-md p-4">
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
label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip />
<Legend />
</PieChart>
</ResponsiveContainer>
</div>

<div className="bg-white rounded-lg shadow-md p-4">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Project Activity</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart data={clientActivityData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Legend />
<Bar dataKey="projects" fill="#8884d8" name="Total Projects" />
<Bar dataKey="active" fill="#82ca9d" name="Active Projects" />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
