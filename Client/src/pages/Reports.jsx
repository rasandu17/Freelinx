import React, { useState, useEffect } from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
PieChart, Pie, BarChart, Bar, Cell
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
{ name: 'Sep', income: 8000 },
{ name: 'Oct', income: 7500 },
{ name: 'Nov', income: 9000 },
{ name: 'Dec', income: 8500 },
];

const projectStatusData = [
{ name: 'Completed', value: 400 },
{ name: 'In Progress', value: 300 },
{ name: 'Pending', value: 200 },
{ name: 'Cancelled', value: 100 },
];

const projectStatusColors = ['#82ca9d', '#8884d8', '#ffc658', '#FF8042'];

const clientActivityData = [
{ name: 'Client A', projects: 12, tasks: 50 },
{ name: 'Client B', projects: 8, tasks: 35 },
{ name: 'Client C', projects: 15, tasks: 60 },
{ name: 'Client D', projects: 5, tasks: 20 },
{ name: 'Client E', projects: 10, tasks: 45 },
];

const ReportsPage = () => {
const [dataLoaded, setDataLoaded] = useState(false);

useEffect(() => {
// Simulate data loading, if needed for more complex scenarios
const timer = setTimeout(() => {
setDataLoaded(true);
}, 500); // Small delay to simulate async data fetch

return () => clearTimeout(timer);
}, []);

if (!dataLoaded) {
return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
<div className="text-gray-600 text-lg">Loading reports...</div>
</div>
);
}

return (
<div className="min-h-screen bg-gray-100 p-8">
<div className="container mx-auto">
<h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">Business Reports Overview</h1>

<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">

{/* Income Over Time Chart */}
<div className="bg-white rounded-xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
<h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Income Over Time</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" stroke="#6b7280" />
<YAxis stroke="#6b7280" />
<Tooltip
cursor={{ strokeDasharray: '3 3' }}
wrapperClassName="rounded-lg shadow-md bg-white p-2 border border-gray-200"
labelClassName="font-semibold text-gray-800"
itemStyle={{ color: '#374151' }}
/>
<Legend wrapperStyle={{ paddingTop: '20px' }} />
<Line type="monotone" dataKey="income" stroke="#82ca9d" strokeWidth={3} activeDot={{ r: 8 }} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white rounded-xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
<h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Project Status Distribution</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart>
<Pie
data={projectStatusData}
cx="50%"
cy="50%"
labelLine={false}
outerRadius={120}
fill="#8884d8"
dataKey="value"
label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={projectStatusColors[index % projectStatusColors.length]} />
))}
</Pie>
<Tooltip
wrapperClassName="rounded-lg shadow-md bg-white p-2 border border-gray-200"
labelClassName="font-semibold text-gray-800"
itemStyle={{ color: '#374151' }}
/>
<Legend wrapperStyle={{ paddingTop: '20px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white rounded-xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300 col-span-1 lg:col-span-2 xl:col-span-1">
<h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Client Activity Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" stroke="#6b7280" />
<YAxis stroke="#6b7280" />
<Tooltip
cursor={{ fill: 'rgba(0,0,0,0.05)' }}
wrapperClassName="rounded-lg shadow-md bg-white p-2 border border-gray-200"
labelClassName="font-semibold text-gray-800"
itemStyle={{ color: '#374151' }}
/>
<Legend wrapperStyle={{ paddingTop: '20px' }} />
<Bar dataKey="projects" fill="#8884d8" name="Projects" />
<Bar dataKey="tasks" fill="#82ca9d" name="Tasks" />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
</div>
);
};

export default ReportsPage;
