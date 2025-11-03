import React, { useState, useEffect } from 'react';
import {
ResponsiveContainer,
AreaChart,
Area,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
PieChart,
Pie,
Cell,
BarChart,
Bar,
Legend,
} from 'recharts';

const ReportsPage = () => {
const [incomeReport, setIncomeReport] = useState([]);
const [projectReport, setProjectReport] = useState([]);
const [clientReport, setClientReport] = useState([]);

// Dummy Data
const incomeData = [
{ name: 'Jan', income: 4000, expenses: 2400 },
{ name: 'Feb', income: 3000, expenses: 1398 },
{ name: 'Mar', income: 5000, expenses: 2800 },
{ name: 'Apr', income: 4500, expenses: 3908 },
{ name: 'May', income: 6000, expenses: 4800 },
{ name: 'Jun', income: 5500, expenses: 3800 },
{ name: 'Jul', income: 7000, expenses: 4300 },
{ name: 'Aug', income: 6500, expenses: 3900 },
{ name: 'Sep', income: 7200, expenses: 4500 },
{ name: 'Oct', income: 6800, expenses: 4200 },
{ name: 'Nov', income: 7500, expenses: 4800 },
{ name: 'Dec', income: 8000, expenses: 5000 },
];

const projectStatusData = [
{ name: 'Completed', value: 30 },
{ name: 'In Progress', value: 25 },
{ name: 'Pending', value: 15 },
{ name: 'On Hold', value: 10 },
{ name: 'Cancelled', value: 5 },
];

const clientActivityData = [
{ name: 'Client A', activities: 12 },
{ name: 'Client B', activities: 8 },
{ name: 'Client C', activities: 15 },
{ name: 'Client D', activities: 7 },
{ name: 'Client E', activities: 10 },
];

const PIE_COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#a4de6c'];

useEffect(() => {
// Simulate fetching data from an API
setIncomeReport(incomeData);
setProjectReport(projectStatusData);
setClientReport(clientActivityData);
}, []);

return (
<div className="min-h-screen bg-gray-100 p-6">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Income Chart */}
<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<AreaChart data={incomeReport} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Area type="monotone" dataKey="income" stroke="#8884d8" fillOpacity={1} fill="url(#colorIncome)" />
<Area type="monotone" dataKey="expenses" stroke="#82ca9d" fillOpacity={1} fill="url(#colorExpenses)" />
<defs>
<linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
</linearGradient>
<linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
<stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
</linearGradient>
</defs>
</AreaChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Project Status Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart>
<Pie
data={projectReport}
cx="50%"
cy="50%"
labelLine={false}
outerRadius={100}
fill="#8884d8"
dataKey="value"
label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
>
{projectReport.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip />
<Legend />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Activity</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart data={clientReport} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Legend />
<Bar dataKey="activities" fill="#8884d8" />
</BarChart>
</ResponsiveContainer>
</div>
</div>
</div>
);
};

export default ReportsPage;
