import React from 'react';
import {
ResponsiveContainer,
LineChart,
Line,
PieChart,
Pie,
BarChart,
Bar,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
Cell
} from 'recharts';

const incomeData = [
{ month: 'Jan', income: 4000 },
{ month: 'Feb', income: 3000 },
{ month: 'Mar', income: 5000 },
{ month: 'Apr', income: 4500 },
{ month: 'May', income: 6000 },
{ month: 'Jun', income: 5500 },
{ month: 'Jul', income: 6200 },
{ month: 'Aug', income: 5800 },
{ month: 'Sep', income: 7000 },
{ month: 'Oct', income: 6800 },
{ month: 'Nov', income: 7500 },
{ month: 'Dec', income: 8000 },
];

const projectStatusData = [
{ name: 'Completed', value: 45 },
{ name: 'In Progress', value: 30 },
{ name: 'Pending', value: 15 },
{ name: 'On Hold', value: 10 },
{ name: 'Cancelled', value: 5 },
];

const clientActivityData = [
{ client: 'Client A', projects: 12, revenue: 75000 },
{ client: 'Client B', projects: 8, revenue: 60000 },
{ client: 'Client C', projects: 15, revenue: 90000 },
{ client: 'Client D', projects: 5, revenue: 35000 },
{ client: 'Client E', projects: 10, revenue: 80000 },
];

const PIE_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF'];

const ReportsPage = () => {
return (
<div className="p-6 bg-gray-100 min-h-screen">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Monthly Income Overview Chart */}
<div className="bg-white p-6 rounded-lg shadow-md">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="month" />
<YAxis />
<Tooltip />
<Legend />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Distribution Chart */}
<div className="bg-white p-6 rounded-lg shadow-md">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Project Status Distribution</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart>
<Pie
data={projectStatusData}
dataKey="value"
nameKey="name"
cx="50%"
cy="50%"
outerRadius={100}
fill="#8884d8"
labelLine={false}
label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip />
<Legend />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Revenue Activity Chart */}
<div className="bg-white p-6 rounded-lg shadow-md">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Revenue Activity</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="client" />
<YAxis />
<Tooltip />
<Legend />
<Bar dataKey="revenue" fill="#82ca9d" />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
