import React from 'react';
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

// Mock Data
const incomeData = [
{ month: 'Jan', income: 4000, expenses: 2400 },
{ month: 'Feb', income: 3000, expenses: 1398 },
{ month: 'Mar', income: 5000, expenses: 2000 },
{ month: 'Apr', income: 4780, expenses: 2908 },
{ month: 'May', income: 5890, expenses: 3800 },
{ month: 'Jun', income: 6390, expenses: 4800 },
{ month: 'Jul', income: 7490, expenses: 5300 },
{ month: 'Aug', income: 6800, expenses: 4900 },
{ month: 'Sep', income: 7200, expenses: 5500 },
{ month: 'Oct', income: 8000, expenses: 6000 },
{ month: 'Nov', income: 7500, expenses: 5800 },
{ month: 'Dec', income: 9000, expenses: 7000 },
];

const projectStatusData = [
{ name: 'Completed', value: 75 },
{ name: 'In Progress', value: 45 },
{ name: 'Pending', value: 20 },
{ name: 'On Hold', value: 10 },
];

const clientActivityData = [
{ clientName: 'Client A', activityCount: 15 },
{ clientName: 'Client B', activityCount: 22 },
{ clientName: 'Client C', activityCount: 18 },
{ clientName: 'Client D', activityCount: 9 },
{ clientName: 'Client E', activityCount: 30 },
{ clientName: 'Client F', activityCount: 12 },
];

const PIE_CHART_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-100 p-8">
<h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">Reports Dashboard</h1>

{/* Income & Expenses Overview */}
<div className="bg-white rounded-lg shadow-xl p-6 mb-8">
<h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Income & Expenses Overview</h2>
<div className="h-96">
<ResponsiveContainer width="100%" height="100%">
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="month" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip />
<Legend />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
<Line type="monotone" dataKey="expenses" stroke="#82ca9d" strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{/* Project Status Distribution */}
<div className="bg-white rounded-lg shadow-xl p-6">
<h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Project Status Distribution</h2>
<div className="h-96">
<ResponsiveContainer width="100%" height="100%">
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
<Cell key={`cell-${index}`} fill={PIE_CHART_COLORS[index % PIE_CHART_COLORS.length]} />
))}
</Pie>
<Tooltip />
<Legend />
</PieChart>
</ResponsiveContainer>
</div>
</div>

{/* Client Activity Trends */}
<div className="bg-white rounded-lg shadow-xl p-6">
<h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Client Activity Trends</h2>
<div className="h-96">
<ResponsiveContainer width="100%" height="100%">
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="clientName" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip />
<Legend />
<Bar dataKey="activityCount" fill="#8884d8" />
</BarChart>
</ResponsiveContainer>
</div>
</div>
</div>
</div>
);
};

export default ReportsPage;
