import React, { useState, useEffect } from 'react';
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

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DED'];

const ReportsPage = () => {
const [incomeData, setIncomeData] = useState([]);
const [projectStatusData, setProjectStatusData] = useState([]);
const [clientActivityData, setClientActivityData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
const fetchReportsData = async () => {
setLoading(true);
// Simulate API call
await new Promise(resolve => setTimeout(resolve, 800));

const mockIncomeData = [
{ name: 'Jan', Income: 4000, Expenses: 2400 },
{ name: 'Feb', Income: 3000, Expenses: 1398 },
{ name: 'Mar', Income: 5000, Expenses: 3200 },
{ name: 'Apr', Income: 4500, Expenses: 2800 },
{ name: 'May', Income: 6000, Expenses: 4000 },
{ name: 'Jun', Income: 5500, Expenses: 3500 },
{ name: 'Jul', Income: 6200, Expenses: 4200 },
];

const mockProjectStatusData = [
{ name: 'Completed', value: 30 },
{ name: 'In Progress', value: 20 },
{ name: 'Pending', value: 10 },
{ name: 'On Hold', value: 5 },
];

const mockClientActivityData = [
{ name: 'Client A', Projects: 15, Invoices: 20 },
{ name: 'Client B', Projects: 10, Invoices: 12 },
{ name: 'Client C', Projects: 8, Invoices: 10 },
{ name: 'Client D', Projects: 5, Invoices: 7 },
];

setIncomeData(mockIncomeData);
setProjectStatusData(mockProjectStatusData);
setClientActivityData(mockClientActivityData);
setLoading(false);
};

fetchReportsData();
}, []);

if (loading) {
return (
<div className="flex justify-center items-center min-h-screen bg-gray-100">
<div className="text-xl font-semibold text-gray-700">Loading reports...</div>
</div>
);
}

return (
<div className="p-6 bg-gray-100 min-h-screen">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Income Chart */}
<div className="bg-white rounded-lg shadow-md p-4">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" stroke="#666" />
<YAxis stroke="#666" />
<Tooltip
cursor={{ stroke: '#9ca3af', strokeWidth: 1 }}
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
itemStyle={{ color: '#333' }}
/>
<Legend />
<Line type="monotone" dataKey="Income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
<Line type="monotone" dataKey="Expenses" stroke="#82ca9d" strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white rounded-lg shadow-md p-4">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Project Status Overview</h2>
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
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
itemStyle={{ color: '#333' }}
/>
<Legend />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white rounded-lg shadow-md p-4">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Activity</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" stroke="#666" />
<YAxis stroke="#666" />
<Tooltip
cursor={{ fill: 'rgba(0,0,0,0.1)' }}
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
itemStyle={{ color: '#333' }}
/>
<Legend />
<Bar dataKey="Projects" fill="#8884d8" />
<Bar dataKey="Invoices" fill="#82ca9d" />
</BarChart>
</ResponsiveContainer>
</div>
</div>
</div>
);
};

export default ReportsPage;
