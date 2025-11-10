import React, { useState, useEffect } from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
BarChart, Bar,
PieChart, Pie, Cell
} from 'recharts';

const ReportsPage = () => {
const [incomeData, setIncomeData] = useState([]);
const [projectStatusData, setProjectStatusData] = useState([]);
const [clientActivityData, setClientActivityData] = useState([]);

// Mock data for charts
useEffect(() => {
// Monthly Income Data
setIncomeData([
{ name: 'Jan', income: 4000, expenses: 2400 },
{ name: 'Feb', income: 3000, expenses: 1398 },
{ name: 'Mar', income: 5000, expenses: 2800 },
{ name: 'Apr', income: 4780, expenses: 3908 },
{ name: 'May', income: 5890, expenses: 4800 },
{ name: 'Jun', income: 6000, expenses: 3800 },
{ name: 'Jul', income: 5500, expenses: 4300 },
{ name: 'Aug', income: 6200, expenses: 3900 },
{ name: 'Sep', income: 5900, expenses: 4500 },
{ name: 'Oct', income: 7000, expenses: 4100 },
{ name: 'Nov', income: 6500, expenses: 3700 },
{ name: 'Dec', income: 7500, expenses: 4900 },
]);

// Project Status Data
setProjectStatusData([
{ name: 'Pending', projects: 5 },
{ name: 'In Progress', projects: 12 },
{ name: 'Completed', projects: 20 },
{ name: 'On Hold', projects: 3 },
]);

// Client Activity Data (e.g., contribution to total projects/revenue)
setClientActivityData([
{ name: 'Client A', value: 400 },
{ name: 'Client B', value: 300 },
{ name: 'Client C', value: 200 },
{ name: 'Client D', value: 150 },
{ name: 'Other', value: 100 },
]);
}, []);

const PIE_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A155B9'];

return (
<div className="p-6 bg-gray-50 min-h-screen">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Monthly Income Chart */}
<div className="bg-white p-6 rounded-lg shadow-md col-span-full lg:col-span-2">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={350}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ fontWeight: 'bold', color: '#333' }}
itemStyle={{ color: '#555' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
<Line type="monotone" dataKey="expenses" stroke="#82ca9d" strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white p-6 rounded-lg shadow-md col-span-1">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Project Status Overview</h2>
<ResponsiveContainer width="100%" height={350}>
<BarChart
data={projectStatusData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ fontWeight: 'bold', color: '#333' }}
itemStyle={{ color: '#555' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="projects" fill="#8884d8" />
</BarChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-1">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Top Client Activity</h2>
<ResponsiveContainer width="100%" height={350}>
<PieChart>
<Pie
data={clientActivityData}
cx="50%"
cy="50%"
labelLine={false}
outerRadius={100}
fill="#8884d8"
dataKey="value"
label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
>
{clientActivityData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip
contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ fontWeight: 'bold', color: '#333' }}
itemStyle={{ color: '#555' }}
formatter={(value, name) => [`${value}`, name]}
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
