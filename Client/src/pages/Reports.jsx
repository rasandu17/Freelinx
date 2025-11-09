import React, { useState, useEffect } from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
PieChart, Pie, Cell, BarChart, Bar
} from 'recharts';

const ReportsPage = () => {
const [incomeData, setIncomeData] = useState([]);
const [projectStatusData, setProjectStatusData] = useState([]);
const [clientActivityData, setClientActivityData] = useState([]);

useEffect(() => {
// Simulate fetching data from an API
const fetchReportsData = () => {
// Dummy data for Monthly Income & Expenses
const dummyIncomeData = [
{ month: 'Jan', income: 4000, expenses: 2400 },
{ month: 'Feb', income: 3000, expenses: 1398 },
{ month: 'Mar', income: 5000, expenses: 2800 },
{ month: 'Apr', income: 4780, expenses: 3908 },
{ month: 'May', income: 5890, expenses: 4800 },
{ month: 'Jun', income: 6390, expenses: 3800 },
{ month: 'Jul', income: 5490, expenses: 4300 },
{ month: 'Aug', income: 6800, expenses: 5000 },
{ month: 'Sep', income: 7200, expenses: 4500 },
{ month: 'Oct', income: 6000, expenses: 4200 },
{ month: 'Nov', income: 7500, expenses: 5500 },
{ month: 'Dec', income: 8000, expenses: 6000 },
];
setIncomeData(dummyIncomeData);

// Dummy data for Project Status Overview
const dummyProjectStatusData = [
{ name: 'Completed', value: 30 },
{ name: 'In Progress', value: 20 },
{ name: 'Pending', value: 15 },
{ name: 'On Hold', value: 5 },
];
setProjectStatusData(dummyProjectStatusData);

// Dummy data for Client Project Activity
const dummyClientActivityData = [
{ client: 'Alpha Corp', projects: 12, activityScore: 90 },
{ client: 'Beta Solutions', projects: 8, activityScore: 75 },
{ client: 'Gamma Inc', projects: 5, activityScore: 60 },
{ client: 'Delta Services', projects: 10, activityScore: 85 },
{ client: 'Epsilon Tech', projects: 7, activityScore: 70 },
];
setClientActivityData(dummyClientActivityData);
};

fetchReportsData();
}, []);

const PIE_CHART_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

return (
<div className="container mx-auto p-6 bg-gray-50 min-h-screen">
<h1 className="text-4xl font-extrabold text-gray-800 mb-8">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Monthly Income & Expenses Report */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
<h2 className="text-2xl font-semibold text-gray-700 mb-4">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" tick={{ fill: '#6b7280' }} />
<YAxis tick={{ fill: '#6b7280' }} />
<Tooltip
contentStyle={{ backgroundColor: '#fff', borderColor: '#e0e0e0', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
labelStyle={{ color: '#374151', fontWeight: 'bold' }}
itemStyle={{ color: '#374151' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#82ca9d" activeDot={{ r: 8 }} strokeWidth={2} />
<Line type="monotone" dataKey="expenses" stroke="#ffc658" activeDot={{ r: 8 }} strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Overview Report */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
<h2 className="text-2xl font-semibold text-gray-700 mb-4">Project Status Overview</h2>
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
<Cell key={`cell-${index}`} fill={PIE_CHART_COLORS[index % PIE_CHART_COLORS.length]} />
))}
</Pie>
<Tooltip
contentStyle={{ backgroundColor: '#fff', borderColor: '#e0e0e0', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
labelStyle={{ color: '#374151', fontWeight: 'bold' }}
itemStyle={{ color: '#374151' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Project Activity Report */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
<h2 className="text-2xl font-semibold text-gray-700 mb-4">Client Project Activity</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="client" interval={0} angle={-30} textAnchor="end" height={60} tick={{ fill: '#6b7280' }} />
<YAxis tick={{ fill: '#6b7280' }} />
<Tooltip
contentStyle={{ backgroundColor: '#fff', borderColor: '#e0e0e0', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
labelStyle={{ color: '#374151', fontWeight: 'bold' }}
itemStyle={{ color: '#374151' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="projects" fill="#8884d8" name="Total Projects" />
<Bar dataKey="activityScore" fill="#82ca9d" name="Activity Score" />
</BarChart>
</ResponsiveContainer>
</div>
</div>
</div>
);
};

export default ReportsPage;
