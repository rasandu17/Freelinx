import React, { useState, useEffect } from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

const ReportsPage = () => {
const [incomeData, setIncomeData] = useState([]);
const [projectStatusData, setProjectStatusData] = useState([]);
const [clientActivityData, setClientActivityData] = useState([]);

useEffect(() => {
// Simulate fetching data
const fetchReportsData = () => {
// Mock data for Income Chart
const mockIncomeData = [
{ month: 'Jan', income: 4000, expenses: 2400 },
{ month: 'Feb', income: 3000, expenses: 1398 },
{ month: 'Mar', income: 5000, expenses: 3200 },
{ month: 'Apr', income: 4780, expenses: 2908 },
{ month: 'May', income: 5890, expenses: 3800 },
{ month: 'Jun', income: 4900, expenses: 2500 },
];
setIncomeData(mockIncomeData);

// Mock data for Project Status Chart
const mockProjectStatusData = [
{ status: 'Active', count: 12 },
{ status: 'Completed', count: 25 },
{ status: 'Pending', count: 7 },
{ status: 'On Hold', count: 3 },
];
setProjectStatusData(mockProjectStatusData);

// Mock data for Client Activity Chart
const mockClientActivityData = [
{ name: 'New Clients', value: 8 },
{ name: 'Returning Clients', value: 18 },
{ name: 'Inactive Clients', value: 5 },
];
setClientActivityData(mockClientActivityData);
};

fetchReportsData();
}, []);

const PIE_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

return (
<div className="min-h-screen bg-gray-100 p-6">
<div className="container mx-auto">
<h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Reports Dashboard</h1>

<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

{/* Income Chart */}
<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income & Expenses</h2>
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
<XAxis dataKey="month" tickLine={false} axisLine={{ stroke: '#cccccc' }} />
<YAxis />
<Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperClassName="rounded-md shadow-lg" contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }} />
<Legend />
<Line type="monotone" dataKey="income" stroke="#82ca9d" activeDot={{ r: 8 }} strokeWidth={2} />
<Line type="monotone" dataKey="expenses" stroke="#8884d8" strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Project Status Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={projectStatusData}
margin={{
top: 5,
right: 30,
left: 20,
bottom: 5,
}}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="status" tickLine={false} axisLine={{ stroke: '#cccccc' }} />
<YAxis />
<Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} wrapperClassName="rounded-md shadow-lg" contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }} />
<Legend />
<Bar dataKey="count" fill="#8884d8" barSize={30} radius={[5, 5, 0, 0]} />
</BarChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Activity Distribution</h2>
<ResponsiveContainer width="100%" height={300}>
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
<Tooltip wrapperClassName="rounded-md shadow-lg" contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }} />
<Legend />
</PieChart>
</ResponsiveContainer>
</div>

</div>
</div>
</div>
);
};

export default ReportsPage;
