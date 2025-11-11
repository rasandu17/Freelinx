import React from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
PieChart, Pie, Cell, BarChart, Bar
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
{ month: 'Sep', income: 7500 },
{ month: 'Oct', income: 8000 },
{ month: 'Nov', income: 7200 },
{ month: 'Dec', income: 9000 },
];

const projectStatusData = [
{ name: 'Completed', value: 12 },
{ name: 'In Progress', value: 8 },
{ name: 'Pending', value: 5 },
{ name: 'On Hold', value: 2 },
];
const PIE_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const clientActivityData = [
{ name: 'Client A', projects: 10, interactions: 30 },
{ name: 'Client B', projects: 7, interactions: 22 },
{ name: 'Client C', projects: 5, interactions: 18 },
{ name: 'Client D', projects: 8, interactions: 25 },
{ name: 'Client E', projects: 4, interactions: 15 },
];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-100 p-8">
<h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">Business Reports</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center">
<h2 className="text-2xl font-semibold text-gray-700 mb-6">Monthly Income Trend</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" className="text-sm text-gray-600" />
<YAxis className="text-sm text-gray-600" />
<Tooltip
contentStyle={{ borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', border: 'none' }}
labelStyle={{ fontWeight: 'bold', color: '#333' }}
itemStyle={{ color: '#555' }}
/>
<Legend wrapperStyle={{ paddingTop: '20px' }} />
<Line type="monotone" dataKey="income" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} name="Income" />
</LineChart>
</ResponsiveContainer>
</div>

<div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center">
<h2 className="text-2xl font-semibold text-gray-700 mb-6">Project Status Distribution</h2>
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
label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip
contentStyle={{ borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', border: 'none' }}
itemStyle={{ color: '#555' }}
/>
<Legend wrapperStyle={{ paddingTop: '20px' }} />
</PieChart>
</ResponsiveContainer>
</div>

<div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center">
<h2 className="text-2xl font-semibold text-gray-700 mb-6">Client Project Activity</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" className="text-sm text-gray-600" />
<YAxis className="text-sm text-gray-600" />
<Tooltip
contentStyle={{ borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', border: 'none' }}
labelStyle={{ fontWeight: 'bold', color: '#333' }}
itemStyle={{ color: '#555' }}
/>
<Legend wrapperStyle={{ paddingTop: '20px' }} />
<Bar dataKey="projects" fill="#82ca9d" name="Projects Completed" />
<Bar dataKey="interactions" fill="#8884d8" name="Client Interactions" />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
