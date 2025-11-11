import React from 'react';
import {
ResponsiveContainer,
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
BarChart, Bar,
PieChart, Pie, Cell
} from 'recharts';

const incomeData = [
{ name: 'Jan', Income: 4000 },
{ name: 'Feb', Income: 3000 },
{ name: 'Mar', Income: 2000 },
{ name: 'Apr', Income: 2780 },
{ name: 'May', Income: 1890 },
{ name: 'Jun', Income: 2390 },
{ name: 'Jul', Income: 3490 },
{ name: 'Aug', Income: 4500 },
{ name: 'Sep', Income: 3800 },
{ name: 'Oct', Income: 4200 },
{ name: 'Nov', Income: 3900 },
{ name: 'Dec', Income: 4700 },
];

const projectStatusData = [
{ name: 'Pending', count: 24 },
{ name: 'In Progress', count: 18 },
{ name: 'Completed', count: 32 },
{ name: 'On Hold', count: 10 },
{ name: 'Cancelled', count: 5 },
];

const clientActivityData = [
{ name: 'New Clients', value: 300 },
{ name: 'Active Clients', value: 700 },
{ name: 'Inactive Clients', value: 200 },
{ name: 'Churned Clients', value: 150 },
];

const PIE_CHART_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-100 p-8">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Income Report Chart */}
<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart data={incomeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" stroke="#6b7280" />
<YAxis stroke="#6b7280" />
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ color: '#333' }}
itemStyle={{ color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="Income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Report Chart */}
<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Project Status Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart data={projectStatusData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" stroke="#6b7280" />
<YAxis stroke="#6b7280" />
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ color: '#333' }}
itemStyle={{ color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="count" fill="#82ca9d" barSize={30} radius={[5, 5, 0, 0]} />
</BarChart>
</ResponsiveContainer>
</div>

{/* Client Activity Report Chart */}
<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Activity Distribution</h2>
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
>
{clientActivityData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_CHART_COLORS[index % PIE_CHART_COLORS.length]} />
))}
</Pie>
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ color: '#333' }}
itemStyle={{ color: '#333' }}
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
