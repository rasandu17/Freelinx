import React, { useState, useEffect } from 'react';
import {
ResponsiveContainer,
LineChart, Line,
BarChart, Bar,
PieChart, Pie, Cell,
XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

const ReportsPage = () => {
const [incomeData, setIncomeData] = useState([]);
const [projectStatusData, setProjectStatusData] = useState([]);
const [clientActivityData, setClientActivityData] = useState([]);

useEffect(() => {
setIncomeData([
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
{ month: 'Dec', income: 7200 },
]);

setProjectStatusData([
{ name: 'Completed', value: 40 },
{ name: 'In Progress', value: 30 },
{ name: 'Pending', value: 20 },
{ name: 'Cancelled', value: 10 },
]);

setClientActivityData([
{ client: 'Alpha Corp', projects: 12 },
{ client: 'Beta Ltd', projects: 8 },
{ client: 'Gamma Inc', projects: 15 },
{ client: 'Delta Co', projects: 7 },
{ client: 'Epsilon Grp', projects: 10 },
]);
}, []);

const PIE_COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

return (
<div className="min-h-screen bg-gray-100 p-8">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{/* Income Chart */}
<div className="bg-white shadow-lg rounded-lg p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{
top: 5, right: 30, left: 20, bottom: 5,
}}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
contentStyle={{ backgroundColor: '#f9fafb', border: '1px solid #d1d5db', borderRadius: '4px' }}
labelStyle={{ color: '#1f2937' }}
itemStyle={{ color: '#374151' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white shadow-lg rounded-lg p-6">
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
nameKey="name"
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip
contentStyle={{ backgroundColor: '#f9fafb', border: '1px solid #d1d5db', borderRadius: '4px' }}
labelStyle={{ color: '#1f2937' }}
itemStyle={{ color: '#374151' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white shadow-lg rounded-lg p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Project Activity</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{
top: 5, right: 30, left: 20, bottom: 5,
}}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="client" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
contentStyle={{ backgroundColor: '#f9fafb', border: '1px solid #d1d5db', borderRadius: '4px' }}
labelStyle={{ color: '#1f2937' }}
itemStyle={{ color: '#374151' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="projects" fill="#82ca9d" />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
