import React from 'react';
import {
ResponsiveContainer,
BarChart,
Bar,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
LineChart,
Line,
PieChart,
Pie,
Cell,
} from 'recharts';

const monthlyIncomeData = [
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
{ name: 'Completed', value: 30 },
{ name: 'In Progress', value: 25 },
{ name: 'Pending', value: 15 },
{ name: 'On Hold', value: 5 },
];

const COLORS = ['#0284c7', '#22c55e', '#f97316', '#ef4444']; // sky-600, green-500, orange-500, red-500

const clientActivityData = [
{ name: 'New Clients', count: 12 },
{ name: 'Active Clients', count: 80 },
{ name: 'Inactive Clients', count: 25 },
{ name: 'Churned Clients', count: 8 },
];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-100 p-6">
<h1 className="text-4xl font-bold text-gray-800 mb-8">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Income Chart */}
<div className="bg-white rounded-lg shadow-lg p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income Trend</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={monthlyIncomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
<XAxis dataKey="name" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
wrapperClassName="rounded-md shadow-md bg-white p-2 border border-gray-200"
labelClassName="font-bold text-gray-800"
itemStyle={{ color: '#374151' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} activeDot={{ r: 8 }} name="Income" />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white rounded-lg shadow-lg p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Project Status Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
<Pie
data={projectStatusData}
cx="50%"
cy="50%"
labelLine={false}
outerRadius={100}
fill="#8884d8"
dataKey="value"
nameKey="name"
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))}
</Pie>
<Tooltip
wrapperClassName="rounded-md shadow-md bg-white p-2 border border-gray-200"
labelClassName="font-bold text-gray-800"
itemStyle={{ color: '#374151' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white rounded-lg shadow-lg p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Activity Breakdown</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
<XAxis dataKey="name" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
wrapperClassName="rounded-md shadow-md bg-white p-2 border border-gray-200"
labelClassName="font-bold text-gray-800"
itemStyle={{ color: '#374151' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="count" fill="#3b82f6" name="Clients" />
</BarChart>
</ResponsiveContainer>
</div>
</div>
</div>
);
};

export default ReportsPage;
