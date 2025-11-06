import React, { useState, useEffect } from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF194C', '#FF6384']; // Extended for more categories

const ReportsPage = () => {
const [incomeData, setIncomeData] = useState([]);
const [projectStatusData, setProjectStatusData] = useState([]);
const [clientActivityData, setClientActivityData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
// Simulate API call for fetching report data
const fetchReportsData = async () => {
setLoading(true);
try {
// Using setTimeout to simulate network delay
await new Promise(resolve => setTimeout(resolve, 1000));

const mockIncomeData = [
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
{ month: 'Dec', income: 9000 },
];

const mockProjectStatusData = [
{ name: 'Completed', value: 40 },
{ name: 'In Progress', value: 25 },
{ name: 'Pending', value: 15 },
{ name: 'On Hold', value: 10 },
{ name: 'Cancelled', value: 5 },
];

const mockClientActivityData = [
{ client: 'Alpha Corp', projects: 12, invoices: 25 },
{ client: 'Beta Solutions', projects: 8, invoices: 18 },
{ client: 'Gamma Tech', projects: 5, invoices: 10 },
{ client: 'Delta Systems', projects: 3, invoices: 7 },
{ client: 'Epsilon Inc', projects: 6, invoices: 14 },
];

setIncomeData(mockIncomeData);
setProjectStatusData(mockProjectStatusData);
setClientActivityData(mockClientActivityData);
} catch (error) {
console.error("Failed to fetch report data:", error);
// In a real application, you might set an error state here
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

return (
<div className="min-h-screen bg-gray-100 p-6">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Reports Overview</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Monthly Income Chart */}
<div className="bg-white p-6 rounded-lg shadow-lg">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{
top: 5, right: 30, left: 20, bottom: 5,
}}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="month" />
<YAxis />
<Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
<Legend />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Distribution Chart */}
<div className="bg-white p-6 rounded-lg shadow-lg">
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
<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))}
</Pie>
<Tooltip formatter={(value) => value.toLocaleString()} />
<Legend layout="horizontal" align="center" verticalAlign="bottom" />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white p-6 rounded-lg shadow-lg">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Activity</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{
top: 5, right: 30, left: 20, bottom: 5,
}}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="client" />
<YAxis />
<Tooltip />
<Legend />
<Bar dataKey="projects" fill="#82ca9d" name="Total Projects" />
<Bar dataKey="invoices" fill="#8884d8" name="Total Invoices" />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
