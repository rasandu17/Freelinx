import React from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
PieChart, Pie, Cell,
BarChart, Bar
} from 'recharts';

const incomeData = [
{ month: 'Jan', income: 4000 },
{ month: 'Feb', income: 3000 },
{ month: 'Mar', income: 5000 },
{ month: 'Apr', income: 4500 },
{ month: 'May', income: 6000 },
{ month: 'Jun', income: 5500 },
];

const projectStatusData = [
{ name: 'Completed', value: 12 },
{ name: 'In Progress', value: 8 },
{ name: 'Pending', value: 5 },
{ name: 'On Hold', value: 2 },
];
const COLORS = ['#82ca9d', '#8884d8', '#ffc658', '#FF8042'];

const clientActivityData = [
{ client: 'Client A', activityCount: 15 },
{ client: 'Client B', activityCount: 10 },
{ client: 'Client C', activityCount: 8 },
{ client: 'Client D', activityCount: 12 },
{ client: 'Client E', activityCount: 7 },
];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-100 p-8">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Reports Overview</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Income Chart */}
<div className="bg-white p-6 rounded-lg shadow-md col-span-full lg:col-span-1">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip />
<Legend />
<Line type="monotone" dataKey="income" stroke="#82ca9d" strokeWidth={2} activeDot={{ r: 8 }} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white p-6 rounded-lg shadow-md col-span-full md:col-span-1 lg:col-span-1">
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

{/* Client Activity Chart */}
<div className="bg-white p-6 rounded-lg shadow-md col-span-full md:col-span-1 lg:col-span-1">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Activity Count</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="client" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip />
<Legend />
<Bar dataKey="activityCount" fill="#8884d8" />
</BarChart>
</ResponsiveContainer>
</div>
</div>
</div>
);
};

export default ReportsPage;
