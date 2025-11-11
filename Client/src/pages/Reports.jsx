import React from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
PieChart, Pie, Cell,
BarChart, Bar
} from 'recharts';

// Mock Data
const incomeData = [
{ name: 'Jan', income: 4000 },
{ name: 'Feb', income: 3000 },
{ name: 'Mar', income: 5000 },
{ name: 'Apr', income: 4500 },
{ name: 'May', income: 6000 },
{ name: 'Jun', income: 5500 },
{ name: 'Jul', income: 6200 },
{ name: 'Aug', income: 5800 },
{ name: 'Sep', income: 7000 },
{ name: 'Oct', income: 6500 },
{ name: 'Nov', income: 7200 },
{ name: 'Dec', income: 8000 },
];

const projectStatusData = [
{ name: 'Completed', value: 70 },
{ name: 'In Progress', value: 35 },
{ name: 'Pending', value: 15 },
{ name: 'On Hold', value: 5 },
];
const PIE_COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

const clientActivityData = [
{ name: 'Client A', projects: 12, revenue: 150000 },
{ name: 'Client B', projects: 8, revenue: 90000 },
{ name: 'Client C', projects: 15, revenue: 200000 },
{ name: 'Client D', projects: 5, revenue: 75000 },
{ name: 'Client E', projects: 10, revenue: 120000 },
];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-100 p-6 sm:p-8">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Income Chart */}
<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
<XAxis dataKey="name" className="text-sm text-gray-600" />
<YAxis className="text-sm text-gray-600" />
<Tooltip
contentStyle={{ backgroundColor: '#fff', borderColor: '#ccc', borderRadius: '4px' }}
labelStyle={{ fontWeight: 'bold' }}
/>
<Legend />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
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
label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip
contentStyle={{ backgroundColor: '#fff', borderColor: '#ccc', borderRadius: '4px' }}
labelStyle={{ fontWeight: 'bold' }}
/>
<Legend />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Top Client Activity</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
<XAxis dataKey="name" className="text-sm text-gray-600" />
<YAxis yAxisId="left" orientation="left" stroke="#8884d8" className="text-sm text-gray-600" />
<YAxis yAxisId="right" orientation="right" stroke="#82ca9d" className="text-sm text-gray-600" />
<Tooltip
contentStyle={{ backgroundColor: '#fff', borderColor: '#ccc', borderRadius: '4px' }}
labelStyle={{ fontWeight: 'bold' }}
/>
<Legend />
<Bar yAxisId="left" dataKey="projects" fill="#8884d8" name="Projects Count" />
<Bar yAxisId="right" dataKey="revenue" fill="#82ca9d" name="Revenue" />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
