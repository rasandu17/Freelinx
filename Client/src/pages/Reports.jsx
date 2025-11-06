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
BarChart,
Bar,
PieChart,
Pie,
Cell,
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
{ name: 'Completed', value: 120 },
{ name: 'In Progress', value: 80 },
{ name: 'Pending', value: 30 },
{ name: 'On Hold', value: 15 },
];

const clientActivityData = [
{ client: 'Alpha Corp', projects: 25 },
{ client: 'Beta Solutions', projects: 18 },
{ client: 'Gamma Inc', projects: 32 },
{ client: 'Delta Systems', projects: 10 },
{ client: 'Epsilon Tech', projects: 20 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF19A0'];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-100 p-6 sm:p-8">
<h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">Business Reports</h1>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

{/* Income Over Time Chart */}
<div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income</h2>
<ResponsiveContainer width="100%" height={350}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" tick={{ fill: '#555' }} />
<YAxis tick={{ fill: '#555' }} />
<Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperClassName="rounded-md shadow-lg" contentStyle={{ backgroundColor: '#fff', border: 'none' }} labelStyle={{ color: '#333', fontWeight: 'bold' }} itemStyle={{ color: '#555' }} />
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Project Status Distribution</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart>
<Pie
data={projectStatusData}
cx="50%"
cy="50%"
labelLine={false}
outerRadius={120}
fill="#8884d8"
dataKey="value"
nameKey="name"
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))}
</Pie>
<Tooltip wrapperClassName="rounded-md shadow-lg" contentStyle={{ backgroundColor: '#fff', border: 'none' }} labelStyle={{ color: '#333', fontWeight: 'bold' }} itemStyle={{ color: '#555' }} />
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Projects per Client</h2>
<ResponsiveContainer width="100%" height={350}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="client" interval={0} angle={-30} textAnchor="end" height={60} tick={{ fill: '#555' }} />
<YAxis tick={{ fill: '#555' }} />
<Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} wrapperClassName="rounded-md shadow-lg" contentStyle={{ backgroundColor: '#fff', border: 'none' }} labelStyle={{ color: '#333', fontWeight: 'bold' }} itemStyle={{ color: '#555' }} />
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="projects" fill="#82ca9d" barSize={30} />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
