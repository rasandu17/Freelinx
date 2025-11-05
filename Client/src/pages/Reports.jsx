import React from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
PieChart, Pie, Cell, BarChart, Bar
} from 'recharts';

// Mock data for the reports
const incomeData = [
{ month: 'Jan', income: 4000 },
{ month: 'Feb', income: 3000 },
{ month: 'Mar', income: 5000 },
{ month: 'Apr', income: 4500 },
{ month: 'May', income: 6000 },
{ month: 'Jun', income: 5500 },
{ month: 'Jul', income: 7000 },
{ month: 'Aug', income: 6200 },
{ month: 'Sep', income: 7500 },
{ month: 'Oct', income: 6800 },
{ month: 'Nov', income: 8000 },
{ month: 'Dec', income: 9000 },
];

const projectStatusData = [
{ name: 'Completed', value: 12 },
{ name: 'In Progress', value: 8 },
{ name: 'Pending', value: 5 },
{ name: 'Cancelled', value: 2 },
];
const PROJECT_STATUS_COLORS = ['#00C49F', '#FFBB28', '#0088FE', '#FF8042'];

const clientActivityData = [
{ client: 'Client A', projects: 8, interactions: 15 },
{ client: 'Client B', projects: 5, interactions: 10 },
{ client: 'Client C', projects: 3, interactions: 7 },
{ client: 'Client D', projects: 2, interactions: 4 },
{ client: 'Client E', projects: 1, interactions: 2 },
];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-100 p-6 sm:p-8">
<h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 text-center sm:text-left">
Reports Overview
</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Monthly Income Chart */}
<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income Trend</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{
top: 5,
right: 30,
left: 20,
bottom: 5,
}}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" tickLine={false} axisLine={false} />
<YAxis tickLine={false} axisLine={false} />
<Tooltip
formatter={(value) => `$${value.toLocaleString()}`}
wrapperClassName="rounded-md shadow-lg border border-gray-200"
labelClassName="font-bold text-gray-800"
/>
<Legend />
<Line
type="monotone"
dataKey="income"
stroke="#8884d8"
activeDot={{ r: 8 }}
strokeWidth={2}
name="Income"
/>
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Distribution Chart */}
<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
<h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Project Status Distribution</h2>
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
<Cell key={`cell-${index}`} fill={PROJECT_STATUS_COLORS[index % PROJECT_STATUS_COLORS.length]} />
))}
</Pie>
<Tooltip wrapperClassName="rounded-md shadow-lg border border-gray-200" />
<Legend />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Top Client Activity</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{
top: 5,
right: 30,
left: 20,
bottom: 5,
}}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="client" tickLine={false} axisLine={false} />
<YAxis tickLine={false} axisLine={false} />
<Tooltip
wrapperClassName="rounded-md shadow-lg border border-gray-200"
labelClassName="font-bold text-gray-800"
cursor={{ fill: 'rgba(0,0,0,0.05)' }}
/>
<Legend />
<Bar dataKey="projects" fill="#82ca9d" name="Active Projects" barSize={30} radius={[5, 5, 0, 0]} />
</BarChart>
</ResponsiveContainer>
</div>
</div>
</div>
);
};

export default ReportsPage;
