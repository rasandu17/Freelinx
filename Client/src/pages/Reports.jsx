import React from 'react';
import {
ResponsiveContainer,
BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
PieChart, Pie, Cell
} from 'recharts';

const incomeData = [
{ name: 'Jan', income: 4000 },
{ name: 'Feb', income: 3000 },
{ name: 'Mar', income: 5000 },
{ name: 'Apr', income: 4500 },
{ name: 'May', income: 6000 },
{ name: 'Jun', income: 5500 },
{ name: 'Jul', income: 6200 },
{ name: 'Aug', income: 5800 },
{ name: 'Sep', income: 6500 },
{ name: 'Oct', income: 7000 },
{ name: 'Nov', income: 6800 },
{ name: 'Dec', income: 7500 },
];

const projectStatusData = [
{ name: 'Completed', projects: 12 },
{ name: 'In Progress', projects: 8 },
{ name: 'Pending', projects: 5 },
{ name: 'On Hold', projects: 2 },
{ name: 'Canceled', projects: 1 },
];

const clientActivityData = [
{ name: 'Client A', value: 5, projects: 5 },
{ name: 'Client B', value: 3, projects: 3 },
{ name: 'Client C', value: 2, projects: 2 },
{ name: 'Client D', value: 1, projects: 1 },
{ name: 'Client E', value: 1, projects: 1 },
];

const PIE_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A155B9'];

export default function ReportsPage() {
return (
<div className="min-h-screen bg-gray-100 p-6">
<h1 className="text-3xl font-bold text-gray-800 mb-6">Reports Overview</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Income Chart */}
<div className="bg-white shadow-lg rounded-lg p-4">
<h2 className="text-xl font-semibold text-gray-800 mb-4">Monthly Income</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip cursor={{ fill: 'transparent' }} />
<Legend />
<Bar dataKey="income" fill="#8884d8" name="Income" />
</BarChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white shadow-lg rounded-lg p-4">
<h2 className="text-xl font-semibold text-gray-800 mb-4">Project Status Distribution</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={projectStatusData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
layout="vertical"
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis type="number" className="text-sm" />
<YAxis type="category" dataKey="name" className="text-sm" />
<Tooltip cursor={{ fill: 'transparent' }} />
<Legend />
<Bar dataKey="projects" fill="#82ca9d" name="Projects" />
</BarChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
<h2 className="text-xl font-semibold text-gray-800 mb-4">Client Activity (Active Projects)</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart>
<Pie
data={clientActivityData}
cx="50%"
cy="50%"
labelLine={false}
outerRadius={100}
fill="#8884d8"
dataKey="value"
nameKey="name"
label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
>
{clientActivityData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip formatter={(value, name, props) => [`${value} projects`, props.payload.name]} />
<Legend />
</PieChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
}
