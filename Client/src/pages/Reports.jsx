import React, { useState, useEffect } from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
PieChart, Pie, Cell,
BarChart, Bar
} from 'recharts';

const initialIncomeData = [
{ name: 'Jan', income: 4000, projects: 2400 },
{ name: 'Feb', income: 3000, projects: 1398 },
{ name: 'Mar', income: 2000, projects: 9800 },
{ name: 'Apr', income: 2780, projects: 3908 },
{ name: 'May', income: 1890, projects: 4800 },
{ name: 'Jun', income: 2390, projects: 3800 },
{ name: 'Jul', income: 3490, projects: 4300 },
{ name: 'Aug', income: 3200, projects: 2900 },
{ name: 'Sep', income: 4100, projects: 3500 },
{ name: 'Oct', income: 3800, projects: 4000 },
{ name: 'Nov', income: 4500, projects: 3700 },
{ name: 'Dec', income: 5000, projects: 4900 },
];

const initialProjectStatusData = [
{ name: 'Completed', value: 12 },
{ name: 'In Progress', value: 8 },
{ name: 'Pending', value: 3 },
{ name: 'On Hold', value: 2 },
];

const PIE_COLORS = ['#00C49F', '#FFBB28', '#FF8042', '#0088FE'];

const initialClientActivityData = [
{ name: 'Client A', activities: 10, projects: 5 },
{ name: 'Client B', activities: 7, projects: 3 },
{ name: 'Client C', activities: 15, projects: 8 },
{ name: 'Client D', activities: 5, projects: 2 },
{ name: 'Client E', activities: 12, projects: 6 },
];

const ReportsPage = () => {
const [incomeData, setIncomeData] = useState([]);
const [projectStatusData, setProjectStatusData] = useState([]);
const [clientActivityData, setClientActivityData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
const fetchData = async () => {
setLoading(true);
await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API call delay
setIncomeData(initialIncomeData);
setProjectStatusData(initialProjectStatusData);
setClientActivityData(initialClientActivityData);
setLoading(false);
};

fetchData();
}, []);

if (loading) {
return (
<div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
<p className="text-lg font-medium text-gray-600">Loading reports...</p>
</div>
);
}

return (
<div className="p-6 bg-gray-100 min-h-screen">
<h1 className="text-3xl font-bold text-gray-800 mb-6">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-lg shadow-md col-span-1 lg:col-span-2">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income & Projects Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Legend />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
<Line type="monotone" dataKey="projects" stroke="#82ca9d" activeDot={{ r: 8 }} strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

<div className="bg-white p-6 rounded-lg shadow-md">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Project Status Distribution</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
<Pie
data={projectStatusData}
cx="50%"
cy="50%"
labelLine={false}
label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
outerRadius={100}
fill="#8884d8"
dataKey="value"
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip />
<Legend />
</PieChart>
</ResponsiveContainer>
</div>

<div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-3">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Activity & Project Count</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Legend />
<Bar dataKey="activities" fill="#8884d8" />
<Bar dataKey="projects" fill="#82ca9d" />
</BarChart>
</ResponsiveContainer>
</div>
</div>
</div>
);
};

export default ReportsPage;
