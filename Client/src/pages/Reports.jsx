import React, { useState, useEffect } from 'react';
import {
ResponsiveContainer,
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
Legend,
PieChart,
Pie,
Cell,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF', '#FF6666'];

const ReportsPage = () => {
const [incomeData, setIncomeData] = useState([]);
const [projectStatusData, setProjectStatusData] = useState([]);
const [clientActivityData, setClientActivityData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
const fetchReportsData = async () => {
try {
// Simulate API call delay
await new Promise((resolve) => setTimeout(resolve, 800));

const dummyIncomeData = [
{ name: 'Jan', income: 4000 },
{ name: 'Feb', income: 3000 },
{ name: 'Mar', income: 5000 },
{ name: 'Apr', income: 4500 },
{ name: 'May', income: 6000 },
{ name: 'Jun', income: 5500 },
{ name: 'Jul', income: 7000 },
{ name: 'Aug', income: 6500 },
{ name: 'Sep', income: 8000 },
{ name: 'Oct', income: 7500 },
{ name: 'Nov', income: 9000 },
{ name: 'Dec', income: 8500 },
];

const dummyProjectStatusData = [
{ name: 'Pending', count: 8 },
{ name: 'In Progress', count: 15 },
{ name: 'Completed', count: 30 },
{ name: 'On Hold', count: 5 },
];

const dummyClientActivityData = [
{ name: 'Active', value: 120 },
{ name: 'New', value: 45 },
{ name: 'Inactive', value: 30 },
{ name: 'Churned', value: 15 },
];

setIncomeData(dummyIncomeData);
setProjectStatusData(dummyProjectStatusData);
setClientActivityData(dummyClientActivityData);
} catch (err) {
setError('Failed to fetch report data.');
console.error('Error fetching reports:', err);
} finally {
setLoading(false);
}
};

fetchReportsData();
}, []);

if (loading) {
return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
<div className="text-xl font-semibold text-gray-700">Loading reports...</div>
</div>
);
}

if (error) {
return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
<div className="text-xl font-semibold text-red-600">{error}</div>
</div>
);
}

return (
<div className="container mx-auto p-6 bg-gray-100 min-h-screen">
<h1 className="text-3xl font-bold mb-8 text-gray-800">Reports Dashboard</h1>

<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
{/* Income Chart */}
<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold mb-4 text-gray-700">Monthly Income</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart data={incomeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<XAxis dataKey="name" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
contentStyle={{
backgroundColor: '#fff',
border: '1px solid #ccc',
borderRadius: '4px',
padding: '8px',
}}
/>
<Legend />
<Bar dataKey="income" fill="#8884d8" name="Income" />
</BarChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold mb-4 text-gray-700">Project Status Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart data={projectStatusData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<XAxis dataKey="name" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
contentStyle={{
backgroundColor: '#fff',
border: '1px solid #ccc',
borderRadius: '4px',
padding: '8px',
}}
/>
<Legend />
<Bar dataKey="count" fill="#82ca9d" name="Number of Projects" />
</BarChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold mb-4 text-gray-700">Client Activity Breakdown</h2>
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
nameKey="name"
>
{clientActivityData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))}
</Pie>
<Tooltip
contentStyle={{
backgroundColor: '#fff',
border: '1px solid #ccc',
borderRadius: '4px',
padding: '8px',
}}
formatter={(value, name, props) => [`${value} clients`, props.payload.name]}
/>
<Legend />
</PieChart>
</ResponsiveContainer>
</div>
</div>
</div>
);
};

export default ReportsPage;
