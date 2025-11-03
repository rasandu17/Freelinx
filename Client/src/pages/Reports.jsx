import React, { useState, useEffect } from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
PieChart, Pie, BarChart, Bar, Cell
} from 'recharts';

const ReportsPage = () => {
const [incomeData, setIncomeData] = useState([]);
const [projectStatusData, setProjectStatusData] = useState([]);
const [clientActivityData, setClientActivityData] = useState([]);
const [loading, setLoading] = useState(true);

const PIE_COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#FF8042'];

useEffect(() => {
const fetchReportsData = async () => {
setLoading(true);
// Simulate API call delay
await new Promise(resolve => setTimeout(resolve, 1000));

const generateIncomeData = () => {
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
return months.map(month => ({
name: month,
Income: Math.floor(Math.random() * 5000) + 1000,
Expenses: Math.floor(Math.random() * 2000) + 500,
}));
};

const generateProjectStatusData = () => [
{ name: 'Completed', value: Math.floor(Math.random() * 20) + 5 },
{ name: 'In Progress', value: Math.floor(Math.random() * 10) + 3 },
{ name: 'On Hold', value: Math.floor(Math.random() * 5) + 1 },
{ name: 'Pending', value: Math.floor(Math.random() * 3) + 1 },
];

const generateClientActivityData = () => {
const clients = ['Client A', 'Client B', 'Client C', 'Client D', 'Client E'];
return clients.map(client => ({
name: client,
Projects: Math.floor(Math.random() * 10) + 1,
Hours: Math.floor(Math.random() * 100) + 20,
}));
};

setIncomeData(generateIncomeData());
setProjectStatusData(generateProjectStatusData());
setClientActivityData(generateClientActivityData());
setLoading(false);
};

fetchReportsData();
}, []);

return (
<div className="p-6 bg-gray-100 min-h-screen">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Reports Overview</h1>

{loading ? (
<div className="flex justify-center items-center h-64">
<p className="text-lg text-gray-600">Loading reports...</p>
</div>
) : (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Income & Expenses Chart */}
<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart data={incomeData}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" stroke="#6b7280" />
<YAxis stroke="#6b7280" />
<Tooltip wrapperClassName="rounded-md shadow-lg" contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e0e0e0' }} />
<Legend />
<Line type="monotone" dataKey="Income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
<Line type="monotone" dataKey="Expenses" stroke="#82ca9d" strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Distribution Chart */}
<div className="bg-white rounded-lg shadow-md p-6">
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
label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip wrapperClassName="rounded-md shadow-lg" contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e0e0e0' }} />
<Legend />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Project & Hours Chart */}
<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Project & Hours</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart data={clientActivityData}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" stroke="#6b7280" />
<YAxis yAxisId="left" orientation="left" stroke="#8884d8" label={{ value: 'Projects', angle: -90, position: 'insideLeft', fill: '#6b7280' }} />
<YAxis yAxisId="right" orientation="right" stroke="#82ca9d" label={{ value: 'Hours', angle: 90, position: 'insideRight', fill: '#6b7280' }} />
<Tooltip wrapperClassName="rounded-md shadow-lg" contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e0e0e0' }} />
<Legend />
<Bar yAxisId="left" dataKey="Projects" fill="#8884d8" />
<Bar yAxisId="right" dataKey="Hours" fill="#82ca9d" />
</BarChart>
</ResponsiveContainer>
</div>

</div>
)}
</div>
);
};

export default ReportsPage;
