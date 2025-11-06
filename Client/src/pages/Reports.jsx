import React, { useState, useEffect } from 'react';
import {
LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF6384'];

const ReportsPage = () => {
const [incomeData, setIncomeData] = useState([]);
const [projectStatusData, setProjectStatusData] = useState([]);
const [clientActivityData, setClientActivityData] = useState([]);

useEffect(() => {
const fetchReportsData = () => {
// Simulate fetching data from an API
setIncomeData([
{ name: 'Jan', income: 4000, expenses: 2400 },
{ name: 'Feb', income: 3000, expenses: 1398 },
{ name: 'Mar', income: 2000, expenses: 9800 },
{ name: 'Apr', income: 2780, expenses: 3908 },
{ name: 'May', income: 1890, expenses: 4800 },
{ name: 'Jun', income: 2390, expenses: 3800 },
{ name: 'Jul', income: 3490, expenses: 4300 },
{ name: 'Aug', income: 4200, expenses: 2100 },
{ name: 'Sep', income: 3800, expenses: 2900 },
{ name: 'Oct', income: 4500, expenses: 2500 },
{ name: 'Nov', income: 3900, expenses: 2000 },
{ name: 'Dec', income: 5000, expenses: 3000 },
]);

setProjectStatusData([
{ name: 'Completed', value: 12 },
{ name: 'In Progress', value: 8 },
{ name: 'Pending', value: 5 },
{ name: 'On Hold', value: 3 },
]);

setClientActivityData([
{ name: 'Client A', projects: 7, revenue: 85000 },
{ name: 'Client B', projects: 5, revenue: 62000 },
{ name: 'Client C', projects: 3, revenue: 41000 },
{ name: 'Client D', projects: 2, revenue: 28000 },
{ name: 'Client E', projects: 4, revenue: 55000 },
]);
};

fetchReportsData();
}, []);

return (
<div className="p-6 bg-gray-50 min-h-screen">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Income Chart */}
<div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" tick={{ fill: '#555' }} />
<YAxis tick={{ fill: '#555' }} />
<Tooltip cursor={{ fill: 'transparent' }} />
<Legend />
<Line type="monotone" dataKey="income" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 6 }} />
<Line type="monotone" dataKey="expenses" stroke="#82ca9d" strokeWidth={2} activeDot={{ r: 6 }} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
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
<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))}
</Pie>
<Tooltip />
<Legend />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart (Projects) */}
<div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Project Count</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" tick={{ fill: '#555' }} />
<YAxis tick={{ fill: '#555' }} />
<Tooltip cursor={{ fill: 'rgba(240, 240, 240, 0.6)' }} />
<Legend />
<Bar dataKey="projects" fill="#82ca9d" />
</BarChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart (Revenue) - Additional chart */}
<div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Revenue by Client</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" tick={{ fill: '#555' }} />
<YAxis tick={{ fill: '#555' }} />
<Tooltip cursor={{ fill: 'rgba(240, 240, 240, 0.6)' }} />
<Legend />
<Bar dataKey="revenue" fill="#FFBB28" />
</BarChart>
</ResponsiveContainer>
</div>
</div>
</div>
);
};

export default ReportsPage;
