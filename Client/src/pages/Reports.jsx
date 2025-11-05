import React, { useState } from 'react';
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

const PIE_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ReportsPage = () => {
const [incomeData] = useState([
{ month: 'Jan', income: 4000 },
{ month: 'Feb', income: 3000 },
{ month: 'Mar', income: 5000 },
{ month: 'Apr', income: 4500 },
{ month: 'May', income: 6000 },
{ month: 'Jun', income: 5500 },
{ month: 'Jul', income: 6500 },
{ month: 'Aug', income: 7000 },
{ month: 'Sep', income: 6200 },
{ month: 'Oct', income: 7500 },
{ month: 'Nov', income: 8000 },
{ month: 'Dec', income: 7800 },
]);

const [projectStatusData] = useState([
{ name: 'Completed', value: 12 },
{ name: 'In Progress', value: 8 },
{ name: 'Pending', value: 5 },
{ name: 'On Hold', value: 3 },
]);

const [clientActivityData] = useState([
{ client: 'Alpha Corp', projects: 7 },
{ client: 'Beta Innovations', projects: 5 },
{ client: 'Gamma Solutions', projects: 9 },
{ client: 'Delta Tech', projects: 4 },
{ client: 'Epsilon Enterprises', projects: 6 },
]);

return (
<div className="min-h-screen bg-gray-100 p-6">
<h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Income Chart */}
<div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" tick={{ fill: '#4b5563' }} />
<YAxis tick={{ fill: '#4b5563' }} />
<Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: '#fff', borderColor: '#e0e0e0', borderRadius: '4px' }} labelStyle={{ color: '#4b5563' }} itemStyle={{ color: '#4b5563' }} />
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
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
label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip contentStyle={{ backgroundColor: '#fff', borderColor: '#e0e0e0', borderRadius: '4px' }} labelStyle={{ color: '#4b5563' }} itemStyle={{ color: '#4b5563' }} />
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Top Client Activity</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="client" interval={0} angle={-30} textAnchor="end" height={60} tick={{ fill: '#4b5563' }} />
<YAxis tick={{ fill: '#4b5563' }} />
<Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} contentStyle={{ backgroundColor: '#fff', borderColor: '#e0e0e0', borderRadius: '4px' }} labelStyle={{ color: '#4b5563' }} itemStyle={{ color: '#4b5563' }} />
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="projects" fill="#82ca9d" name="Projects Completed" />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
