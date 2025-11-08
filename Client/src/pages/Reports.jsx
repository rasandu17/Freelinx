import React from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
BarChart, Bar,
PieChart, Pie, Cell
} from 'recharts';

const ReportsPage = () => {
// Mock data for Income Chart
const incomeData = [
{ name: 'Jan', income: 4000, expenses: 2400 },
{ name: 'Feb', income: 3000, expenses: 1398 },
{ name: 'Mar', income: 2000, expenses: 9800 },
{ name: 'Apr', income: 2780, expenses: 3908 },
{ name: 'May', income: 1890, expenses: 4800 },
{ name: 'Jun', income: 2390, expenses: 3800 },
{ name: 'Jul', income: 3490, expenses: 4300 },
];

// Mock data for Project Status Chart
const projectStatusData = [
{ name: 'Completed', value: 12 },
{ name: 'In Progress', value: 8 },
{ name: 'Pending', value: 5 },
{ name: 'On Hold', value: 2 },
];
const PIE_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Mock data for Client Activity Chart
const clientActivityData = [
{ name: 'Client A', projects: 10, supportTickets: 5 },
{ name: 'Client B', projects: 7, supportTickets: 3 },
{ name: 'Client C', projects: 5, supportTickets: 2 },
{ name: 'Client D', projects: 3, supportTickets: 1 },
{ name: 'Client E', projects: 2, supportTickets: 0 },
];

return (
<div className="min-h-screen bg-gray-100 p-8">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Reports Overview</h1>

{/* Income Chart */}
<div className="bg-white shadow-lg rounded-lg p-6 mb-8">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
<XAxis dataKey="name" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip wrapperClassName="rounded-md shadow-md" labelClassName="font-semibold" />
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
<Line type="monotone" dataKey="expenses" stroke="#82ca9d" strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white shadow-lg rounded-lg p-6 mb-8">
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
className="text-sm"
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip wrapperClassName="rounded-md shadow-md" labelClassName="font-semibold" formatter={(value, name, props) => [`${value} projects`, props.payload.name]} />
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white shadow-lg rounded-lg p-6 mb-8">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Activity Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
<XAxis dataKey="name" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip wrapperClassName="rounded-md shadow-md" labelClassName="font-semibold" />
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="projects" fill="#8884d8" name="Total Projects" />
<Bar dataKey="supportTickets" fill="#82ca9d" name="Support Tickets" />
</BarChart>
</ResponsiveContainer>
</div>
</div>
);
};

export default ReportsPage;
