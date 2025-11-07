import React from 'react';
import {
ResponsiveContainer,
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
PieChart,
Pie,
Cell,
BarChart,
Bar,
} from 'recharts';

const incomeData = [
{ name: 'Jan', income: 4000 },
{ name: 'Feb', income: 3000 },
{ name: 'Mar', income: 2000 },
{ name: 'Apr', income: 2780 },
{ name: 'May', income: 1890 },
{ name: 'Jun', income: 2390 },
{ name: 'Jul', income: 3490 },
{ name: 'Aug', income: 4200 },
{ name: 'Sep', income: 3800 },
{ name: 'Oct', income: 4500 },
{ name: 'Nov', income: 3900 },
{ name: 'Dec', income: 5000 },
];

const projectStatusData = [
{ name: 'Completed', value: 400 },
{ name: 'In Progress', value: 300 },
{ name: 'Pending', value: 300 },
{ name: 'Cancelled', value: 200 },
];

const clientActivityData = [
{ name: 'Client A', projects: 12 },
{ name: 'Client B', projects: 9 },
{ name: 'Client C', projects: 7 },
{ name: 'Client D', projects: 5 },
{ name: 'Client E', projects: 3 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-100 p-6">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Reports Overview</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Income Chart */}
<div className="bg-white p-6 rounded-lg shadow-md">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income</h2>
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
<XAxis dataKey="name" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip />
<Legend />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white p-6 rounded-lg shadow-md">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Project Status</h2>
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
<div className="bg-white p-6 rounded-lg shadow-md">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Activity (Projects)</h2>
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
<XAxis dataKey="name" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip />
<Legend />
<Bar dataKey="projects" fill="#82ca9d" />
</BarChart>
</ResponsiveContainer>
</div>
</div>
</div>
);
};

export default ReportsPage;
