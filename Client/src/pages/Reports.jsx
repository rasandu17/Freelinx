import React from 'react';
import {
ResponsiveContainer,
LineChart,
Line,
BarChart,
Bar,
PieChart,
Pie,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
Cell,
} from 'recharts';

const incomeData = [
{ month: 'Jan', income: 4000, expenses: 2400 },
{ month: 'Feb', income: 3000, expenses: 1398 },
{ month: 'Mar', income: 2000, expenses: 9800 },
{ month: 'Apr', income: 2780, expenses: 3908 },
{ month: 'May', income: 1890, expenses: 4800 },
{ month: 'Jun', income: 2390, expenses: 3800 },
{ month: 'Jul', income: 3490, expenses: 4300 },
];

const projectStatusData = [
{ status: 'Pending', count: 8 },
{ status: 'In Progress', count: 15 },
{ status: 'Completed', count: 25 },
{ status: 'On Hold', count: 3 },
{ status: 'Cancelled', count: 2 },
];

const clientActivityData = [
{ name: 'Client A', projects: 12, value: 12 },
{ name: 'Client B', projects: 8, value: 8 },
{ name: 'Client C', projects: 5, value: 5 },
{ name: 'Client D', projects: 3, value: 3 },
{ name: 'Client E', projects: 2, value: 2 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF19A3'];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-100 p-6">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Reports Overview</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" className="text-sm text-gray-600" />
<YAxis className="text-sm text-gray-600" />
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
<Line type="monotone" dataKey="expenses" stroke="#82ca9d" strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Project Status Distribution</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={projectStatusData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="status" className="text-sm text-gray-600" />
<YAxis className="text-sm text-gray-600" />
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="count" fill="#8884d8" radius={[10, 10, 0, 0]} />
</BarChart>
</ResponsiveContainer>
</div>

<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Project Activity</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart>
<Pie
data={clientActivityData}
dataKey="value"
nameKey="name"
cx="50%"
cy="50%"
outerRadius={100}
fill="#8884d8"
label
>
{clientActivityData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))}
</Pie>
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ color: '#333' }}
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
