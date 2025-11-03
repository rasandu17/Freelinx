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
BarChart,
Bar,
Cell
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28FEE', '#FF6B6B'];

const ReportsPage = () => {
const [incomeData, setIncomeData] = useState([]);
const [projectStatusData, setProjectStatusData] = useState([]);
const [clientActivityData, setClientActivityData] = useState([]);

useEffect(() => {
// Simulate fetching data
const fetchReportsData = () => {
// Mock data
const mockIncomeData = [
{ month: 'Jan', income: 4000 },
{ month: 'Feb', income: 3000 },
{ month: 'Mar', income: 5000 },
{ month: 'Apr', income: 4500 },
{ month: 'May', income: 6000 },
{ month: 'Jun', income: 5500 },
{ month: 'Jul', income: 7000 },
{ month: 'Aug', income: 6500 },
{ month: 'Sep', income: 8000 },
{ month: 'Oct', income: 7500 },
{ month: 'Nov', income: 9000 },
{ month: 'Dec', income: 8500 },
];

const mockProjectStatusData = [
{ name: 'Completed', value: 20 },
{ name: 'In Progress', value: 15 },
{ name: 'Pending', value: 8 },
{ name: 'Cancelled', value: 3 },
];

const mockClientActivityData = [
{ client: 'Client A', projects: 12, meetings: 25 },
{ client: 'Client B', projects: 8, meetings: 18 },
{ client: 'Client C', projects: 15, meetings: 30 },
{ client: 'Client D', projects: 6, meetings: 10 },
{ client: 'Client E', projects: 10, meetings: 20 },
];

setIncomeData(mockIncomeData);
setProjectStatusData(mockProjectStatusData);
setClientActivityData(mockClientActivityData);
};

fetchReportsData();
}, []);

return (
<div className="p-6 min-h-screen bg-gray-100">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Income Chart */}
<div className="bg-white shadow-md rounded-lg p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" className="text-sm text-gray-600" />
<YAxis className="text-sm text-gray-600" />
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ color: '#333' }}
itemStyle={{ color: '#666' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} name="Income" />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white shadow-md rounded-lg p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Project Status Breakdown</h2>
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
label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))}
</Pie>
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ color: '#333' }}
itemStyle={{ color: '#666' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white shadow-md rounded-lg p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Activity Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="client" className="text-sm text-gray-600" />
<YAxis className="text-sm text-gray-600" />
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ color: '#333' }}
itemStyle={{ color: '#666' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="projects" fill="#82ca9d" name="Projects" />
<Bar dataKey="meetings" fill="#ffc658" name="Meetings" />
</BarChart>
</ResponsiveContainer>
</div>
</div>
</div>
);
};

export default ReportsPage;
