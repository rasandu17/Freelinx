import React from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
PieChart, Pie, Cell, BarChart, Bar
} from 'recharts';

const ReportsPage = () => {
const incomeData = [
{ name: 'Jan', income: 4000, expenses: 2400 },
{ name: 'Feb', income: 3000, expenses: 1398 },
{ name: 'Mar', income: 5000, expenses: 2800 },
{ name: 'Apr', income: 4780, expenses: 3908 },
{ name: 'May', income: 5890, expenses: 4800 },
{ name: 'Jun', income: 6000, expenses: 4000 },
{ name: 'Jul', income: 7200, expenses: 5000 },
];

const projectStatusData = [
{ name: 'Completed', value: 12 },
{ name: 'In Progress', value: 8 },
{ name: 'Pending', value: 5 },
{ name: 'On Hold', value: 3 },
];
const PIE_COLORS = ['#00C49F', '#FFBB28', '#FF8042', '#0088FE'];

const clientActivityData = [
{ name: 'Client A', projects: 12 },
{ name: 'Client B', projects: 8 },
{ name: 'Client C', projects: 5 },
{ name: 'Client D', projects: 7 },
{ name: 'Client E', projects: 10 },
];

return (
<div className="min-h-screen bg-gray-100 p-8">
<h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-lg shadow-xl p-6">
<h2 className="text-2xl font-semibold text-gray-700 mb-4">Monthly Income Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart data={incomeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" tick={{ fill: '#6b7280' }} />
<YAxis tick={{ fill: '#6b7280' }} />
<Tooltip
contentStyle={{ backgroundColor: '#fff', borderColor: '#ccc', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
labelStyle={{ color: '#374151' }}
itemStyle={{ color: '#374151' }}
/>
<Legend wrapperStyle={{ paddingTop: '1rem', color: '#6b7280' }} />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} name="Income" />
<Line type="monotone" dataKey="expenses" stroke="#82ca9d" activeDot={{ r: 8 }} strokeWidth={2} name="Expenses" />
</LineChart>
</ResponsiveContainer>
</div>

<div className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center">
<h2 className="text-2xl font-semibold text-gray-700 mb-4">Project Status Distribution</h2>
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
label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip
contentStyle={{ backgroundColor: '#fff', borderColor: '#ccc', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
itemStyle={{ color: '#374151' }}
/>
<Legend wrapperStyle={{ paddingTop: '1rem', color: '#6b7280' }} />
</PieChart>
</ResponsiveContainer>
</div>

<div className="bg-white rounded-lg shadow-xl p-6">
<h2 className="text-2xl font-semibold text-gray-700 mb-4">Client Project Count</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart data={clientActivityData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" tick={{ fill: '#6b7280' }} />
<YAxis tick={{ fill: '#6b7280' }} />
<Tooltip
contentStyle={{ backgroundColor: '#fff', borderColor: '#ccc', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
labelStyle={{ color: '#374151' }}
itemStyle={{ color: '#374151' }}
/>
<Legend wrapperStyle={{ paddingTop: '1rem', color: '#6b7280' }} />
<Bar dataKey="projects" fill="#82ca9d" name="Projects" barSize={30} />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
