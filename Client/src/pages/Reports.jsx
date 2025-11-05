import React, { useState, useEffect } from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
BarChart, Bar, PieChart, Pie, Cell
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
{ status: 'In Progress', count: 25 },
{ status: 'Completed', count: 42 },
{ status: 'On Hold', count: 5 },
{ status: 'Cancelled', count: 3 },
];

const clientActivityData = [
{ name: 'Highly Active', value: 45 },
{ name: 'Moderately Active', value: 30 },
{ name: 'Low Activity', value: 15 },
{ name: 'Inactive', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF0000'];

const ReportsPage = () => {
const [loading, setLoading] = useState(true);

useEffect(() => {
// Simulate data fetching
const timer = setTimeout(() => {
setLoading(false);
}, 1000);
return () => clearTimeout(timer);
}, []);

if (loading) {
return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
<div className="text-xl font-semibold text-gray-700">Loading reports...</div>
</div>
);
}

return (
<div className="min-h-screen bg-gray-100 p-6 sm:p-8">
<h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center sm:text-left">Reports Overview</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Income Report */}
<div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center">
<h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Income Trend (Monthly)</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" stroke="#666" />
<YAxis stroke="#666" />
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
itemStyle={{ color: '#333' }}
labelStyle={{ color: '#555', fontWeight: 'bold' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Report */}
<div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center">
<h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Project Status Distribution</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={projectStatusData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="status" stroke="#666" angle={-15} textAnchor="end" height={50} />
<YAxis stroke="#666" />
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
itemStyle={{ color: '#333' }}
labelStyle={{ color: '#555', fontWeight: 'bold' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="count" fill="#82ca9d" barSize={30}>
{
projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))
}
</Bar>
</BarChart>
</ResponsiveContainer>
</div>

{/* Client Activity Report */}
<div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center">
<h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Client Activity Levels</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
<Pie
data={clientActivityData}
cx="50%"
cy="50%"
labelLine={false}
outerRadius={100}
fill="#8884d8"
dataKey="value"
label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
>
{
clientActivityData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))
}
</Pie>
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
itemStyle={{ color: '#333' }}
labelStyle={{ color: '#555', fontWeight: 'bold' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
