import React from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

const incomeData = [
{ month: 'Jan', income: 4000 },
{ month: 'Feb', income: 3000 },
{ month: 'Mar', income: 5000 },
{ month: 'Apr', income: 4500 },
{ month: 'May', income: 6000 },
{ month: 'Jun', income: 5500 },
{ month: 'Jul', income: 7000 },
{ month: 'Aug', income: 6500 },
{ month: 'Sep', income: 8000 },
{ month: 'Oct', income: 7500 },
{ month: 'Nov', income: 9000 },
{ month: 'Dec', income: 8500 },
];

const projectStatusData = [
{ status: 'Pending', count: 12 },
{ status: 'In Progress', count: 25 },
{ status: 'Completed', count: 48 },
{ status: 'On Hold', count: 5 },
];

const clientActivityData = [
{ name: 'New Clients', value: 300 },
{ name: 'Active Clients', value: 700 },
{ name: 'Inactive Clients', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF19A3'];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-100 p-8">
<h1 className="text-4xl font-bold text-gray-800 mb-8">Reports Overview</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Income Chart */}
<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-2xl font-semibold text-gray-700 mb-4">Monthly Income</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ fontWeight: 'bold' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-2xl font-semibold text-gray-700 mb-4">Project Status</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={projectStatusData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="status" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ fontWeight: 'bold' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="count" fill="#82ca9d" barSize={30}>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))}
</Bar>
</BarChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-2xl font-semibold text-gray-700 mb-4">Client Activity</h2>
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
label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
>
{clientActivityData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))}
</Pie>
<Tooltip
contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ fontWeight: 'bold' }}
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
