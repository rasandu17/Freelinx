import React, { useState, useEffect } from 'react';
import {
ResponsiveContainer,
BarChart,
Bar,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
PieChart,
Pie,
Cell,
LineChart,
Line,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC72C'];

const ReportsPage = () => {
const [incomeData, setIncomeData] = useState([]);
const [projectStatusData, setProjectStatusData] = useState([]);
const [clientActivityData, setClientActivityData] = useState([]);

useEffect(() => {
const fetchReportsData = async () => {
await new Promise(resolve => setTimeout(resolve, 500)); 

setIncomeData([
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
{ month: 'Dec', income: 9000 },
]);

setProjectStatusData([
{ name: 'Completed', value: 12 },
{ name: 'In Progress', value: 8 },
{ name: 'Pending', value: 3 },
{ name: 'On Hold', value: 2 },
{ name: 'Cancelled', value: 1 },
]);

setClientActivityData([
{ client: 'Client A', projects: 5 },
{ client: 'Client B', projects: 3 },
{ client: 'Client C', projects: 7 },
{ client: 'Client D', projects: 2 },
{ client: 'Client E', projects: 4 },
{ client: 'Client F', projects: 6 },
]);
};

fetchReportsData();
}, []);

return (
<div className="p-6 bg-gray-50 min-h-screen text-gray-900">
<h1 className="text-4xl font-extrabold text-gray-800 mb-8 pb-4 border-b border-gray-200">Business Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-xl shadow-lg p-7">
<h2 className="text-2xl font-bold text-gray-800 mb-5">Monthly Income Trend</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 15, right: 30, left: 20, bottom: 15 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
wrapperClassName="rounded-lg shadow-lg bg-white p-2"
labelClassName="font-bold text-gray-800"
itemStyle={{ color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '20px' }} />
<Line
type="monotone"
dataKey="income"
stroke="#8884d8"
activeDot={{ r: 8 }}
strokeWidth={2}
name="Income ($)"
/>
</LineChart>
</ResponsiveContainer>
</div>

<div className="bg-white rounded-xl shadow-lg p-7 flex flex-col justify-between">
<div>
<h2 className="text-2xl font-bold text-gray-800 mb-5">Project Status Distribution</h2>
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
label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))}
</Pie>
<Tooltip
wrapperClassName="rounded-lg shadow-lg bg-white p-2"
labelClassName="font-bold text-gray-800"
itemStyle={{ color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '20px' }} />
</PieChart>
</ResponsiveContainer>
</div>
</div>

<div className="bg-white rounded-xl shadow-lg p-7">
<h2 className="text-2xl font-bold text-gray-800 mb-5">Client Project Count</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 15, right: 30, left: 20, bottom: 15 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="client" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
wrapperClassName="rounded-lg shadow-lg bg-white p-2"
labelClassName="font-bold text-gray-800"
itemStyle={{ color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '20px' }} />
<Bar dataKey="projects" fill="#82ca9d" name="Projects" />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
