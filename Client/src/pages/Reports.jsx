import React, { useState, useEffect } from 'react';
import {
ResponsiveContainer,
BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
LineChart, Line,
PieChart, Pie, Cell
} from 'recharts';

const ReportsPage = () => {
const [incomeData, setIncomeData] = useState([]);
const [projectStatusData, setProjectStatusData] = useState([]);
const [clientActivityData, setClientActivityData] = useState([]);

const PIE_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28F00', '#B04BDB'];

useEffect(() => {
const fetchReportsData = () => {
setIncomeData([
{ name: 'Jan', income: 4000, expenses: 2400 },
{ name: 'Feb', income: 3000, expenses: 1398 },
{ name: 'Mar', income: 5000, expenses: 2800 },
{ name: 'Apr', income: 4500, expenses: 3908 },
{ name: 'May', income: 6000, expenses: 4800 },
{ name: 'Jun', income: 5500, expenses: 3800 },
{ name: 'Jul', income: 7000, expenses: 4300 },
{ name: 'Aug', income: 6200, expenses: 3500 },
{ name: 'Sep', income: 7500, expenses: 4800 },
{ name: 'Oct', income: 6800, expenses: 4100 },
{ name: 'Nov', income: 8000, expenses: 5200 },
{ name: 'Dec', income: 9000, expenses: 5800 },
]);

setProjectStatusData([
{ name: 'Completed', value: 400 },
{ name: 'In Progress', value: 300 },
{ name: 'Pending', value: 200 },
{ name: 'On Hold', value: 100 },
]);

setClientActivityData([
{ name: 'Client A', projects: 12, revenue: 80000 },
{ name: 'Client B', projects: 8, revenue: 60000 },
{ name: 'Client C', projects: 10, revenue: 75000 },
{ name: 'Client D', projects: 5, revenue: 40000 },
{ name: 'Client E', projects: 7, revenue: 55000 },
{ name: 'Client F', projects: 9, revenue: 68000 },
]);
};

fetchReportsData();
}, []);

return (
<div className="p-6 bg-gray-50 min-h-screen">
<h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Reports Dashboard</h1>

<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">

{/* Monthly Income Overview */}
<div className="bg-white rounded-xl shadow-lg p-6">
<h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" stroke="#6b7280" />
<YAxis stroke="#6b7280" />
<Tooltip
wrapperClassName="rounded-lg shadow-md p-2 bg-white border border-gray-200"
contentStyle={{ border: 'none' }}
labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
itemStyle={{ fontSize: '14px' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
<Line type="monotone" dataKey="expenses" stroke="#82ca9d" strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Distribution */}
<div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
<h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Project Status Distribution</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
<Pie
data={projectStatusData}
cx="50%"
cy="50%"
labelLine={false}
outerRadius={100}
fill="#8884d8"
dataKey="value"
nameKey="name"
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip
wrapperClassName="rounded-lg shadow-md p-2 bg-white border border-gray-200"
contentStyle={{ border: 'none' }}
labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
itemStyle={{ fontSize: '14px' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Overview */}
<div className="bg-white rounded-xl shadow-lg p-6">
<h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Client Activity Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" stroke="#6b7280" />
<YAxis yAxisId="left" orientation="left" stroke="#8884d8" label={{ value: 'Projects', angle: -90, position: 'insideLeft', fill: '#6b7280' }} />
<YAxis yAxisId="right" orientation="right" stroke="#82ca9d" label={{ value: 'Revenue', angle: 90, position: 'insideRight', fill: '#6b7280' }} />
<Tooltip
wrapperClassName="rounded-lg shadow-md p-2 bg-white border border-gray-200"
contentStyle={{ border: 'none' }}
labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
itemStyle={{ fontSize: '14px' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar yAxisId="left" dataKey="projects" fill="#8884d8" name="Projects" />
<Bar yAxisId="right" dataKey="revenue" fill="#82ca9d" name="Revenue" />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
