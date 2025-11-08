import React, { useState, useEffect } from 'react';
import {
ResponsiveContainer,
LineChart, Line, BarChart, Bar, PieChart, Pie,
XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell
} from 'recharts';

const incomeData = [
{ name: 'Jan', income: 4000 },
{ name: 'Feb', income: 3000 },
{ name: 'Mar', income: 5000 },
{ name: 'Apr', income: 4500 },
{ name: 'May', income: 6000 },
{ name: 'Jun', income: 5500 },
{ name: 'Jul', income: 7000 },
{ name: 'Aug', income: 6500 },
{ name: 'Sep', income: 7500 },
{ name: 'Oct', income: 8000 },
{ name: 'Nov', income: 7200 },
{ name: 'Dec', income: 9000 },
];

const projectStatusData = [
{ status: 'Pending', count: 8 },
{ status: 'In Progress', count: 15 },
{ status: 'Completed', count: 25 },
{ status: 'On Hold', count: 3 },
{ status: 'Cancelled', count: 2 },
];

const clientActivityData = [
{ name: 'New Clients', value: 300 },
{ name: 'Active Clients', value: 500 },
{ name: 'Inactive Clients', value: 200 },
{ name: 'Churned Clients', value: 100 },
];

const PIE_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function ReportsPage() {
// Although not strictly necessary for static data, useState/useEffect are included as per task requirements
const [loading, setLoading] = useState(false); // Example hook usage
const [error, setError] = useState(null);     // Example hook usage

useEffect(() => {
// Simulate data fetching if this were a dynamic page
// setLoading(true);
// fetchData().then(data => { /* setData(data) */ }).catch(err => setError(err)).finally(() => setLoading(false));
}, []);

if (loading) return <div className="text-center p-8 text-xl font-medium">Loading reports...</div>;
if (error) return <div className="text-center p-8 text-xl font-medium text-red-600">Error: {error.message}</div>;

return (
<div className="min-h-screen bg-gray-100 p-6 md:p-8 lg:p-10">
<h1 className="text-4xl font-extrabold text-gray-800 mb-8 pb-4 border-b-2 border-gray-300">Reports Dashboard</h1>

{/* Monthly Income Overview */}
<section className="bg-white shadow-xl rounded-lg p-6 mb-8 border border-gray-200">
<h2 className="text-2xl font-semibold text-gray-700 mb-6 border-b pb-3">Monthly Income Overview</h2>
<div className="h-80 w-full">
<ResponsiveContainer width="100%" height="100%">
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" tick={{ fill: '#6b7280' }} />
<YAxis tick={{ fill: '#6b7280' }} />
<Tooltip
contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '4px', padding: '10px' }}
labelStyle={{ fontWeight: 'bold', color: '#333' }}
itemStyle={{ color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} name="Income ($)" />
</LineChart>
</ResponsiveContainer>
</div>
</section>

{/* Project Status Distribution */}
<section className="bg-white shadow-xl rounded-lg p-6 mb-8 border border-gray-200">
<h2 className="text-2xl font-semibold text-gray-700 mb-6 border-b pb-3">Project Status Distribution</h2>
<div className="h-80 w-full">
<ResponsiveContainer width="100%" height="100%">
<BarChart
data={projectStatusData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="status" tick={{ fill: '#6b7280' }} />
<YAxis tick={{ fill: '#6b7280' }} />
<Tooltip
contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '4px', padding: '10px' }}
labelStyle={{ fontWeight: 'bold', color: '#333' }}
itemStyle={{ color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="count" fill="#82ca9d" name="Number of Projects" />
</BarChart>
</ResponsiveContainer>
</div>
</section>

{/* Client Activity Breakdown */}
<section className="bg-white shadow-xl rounded-lg p-6 border border-gray-200">
<h2 className="text-2xl font-semibold text-gray-700 mb-6 border-b pb-3">Client Activity Breakdown</h2>
<div className="h-80 w-full flex justify-center items-center">
<ResponsiveContainer width="100%" height="100%">
<PieChart>
<Pie
data={clientActivityData}
cx="50%"
cy="50%"
labelLine={false}
outerRadius={100}
fill="#8884d8"
dataKey="value"
label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
>
{
clientActivityData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))
}
</Pie>
<Tooltip
contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '4px', padding: '10px' }}
labelStyle={{ fontWeight: 'bold', color: '#333' }}
itemStyle={{ color: '#333' }}
/>
<Legend layout="horizontal" align="center" verticalAlign="bottom" wrapperStyle={{ paddingTop: '20px' }} />
</PieChart>
</ResponsiveContainer>
</div>
</section>
</div>
);
}

export default ReportsPage;
