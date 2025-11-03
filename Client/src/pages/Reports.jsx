import React from 'react';
import {
LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';

// Mock Data
const incomeData = [
{ name: 'Jan', income: 4000, expenses: 2400 },
{ name: 'Feb', income: 3000, expenses: 1398 },
{ name: 'Mar', income: 5000, expenses: 3200 },
{ name: 'Apr', income: 4500, expenses: 2800 },
{ name: 'May', income: 6000, expenses: 4000 },
{ name: 'Jun', income: 5500, expenses: 3500 },
];

const projectStatusData = [
{ name: 'Completed', value: 15 },
{ name: 'In Progress', value: 8 },
{ name: 'On Hold', value: 3 },
{ name: 'Pending', value: 2 },
];

const clientActivityData = [
{ name: 'Client A', projects: 12, value: 40000 },
{ name: 'Client B', projects: 8, value: 30000 },
{ name: 'Client C', projects: 5, value: 20000 },
{ name: 'Client D', projects: 3, value: 15000 },
];

const PIE_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function ReportsPage() {
return (
<div className="p-6 bg-gray-100 min-h-screen">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Reports Overview</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Monthly Income Chart */}
<div className="bg-white p-6 rounded-lg shadow-md">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart data={incomeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Legend />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
<Line type="monotone" dataKey="expenses" stroke="#82ca9d" strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Pie Chart */}
<div className="bg-white p-6 rounded-lg shadow-md">
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
nameKey="name"
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

{/* Client Activity Bar Chart */}
<div className="bg-white p-6 rounded-lg shadow-md">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Activity (Projects)</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart data={clientActivityData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Legend />
<Bar dataKey="projects" fill="#82ca9d" />
</BarChart>
</ResponsiveContainer>
</div>
</div>
</div>
);
}

export default ReportsPage;
