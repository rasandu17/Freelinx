import React, { useState, useEffect } from 'react';
import {
ResponsiveContainer,
LineChart,
Line,
BarChart,
Bar,
PieChart,
Pie,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
Cell,
} from 'recharts';

const ReportsPage = () => {
// Dummy data for charts
const incomeData = [
{ month: 'Jan', income: 4000, expenses: 2400 },
{ month: 'Feb', income: 3000, expenses: 1398 },
{ month: 'Mar', income: 2000, expenses: 9800 },
{ month: 'Apr', income: 2780, expenses: 3908 },
{ month: 'May', income: 1890, expenses: 4800 },
{ month: 'Jun', income: 2390, expenses: 3800 },
{ month: 'Jul', income: 3490, expenses: 4300 },
{ month: 'Aug', income: 4200, expenses: 3500 },
{ month: 'Sep', income: 3800, expenses: 2900 },
{ month: 'Oct', income: 4500, expenses: 3100 },
{ month: 'Nov', income: 5000, expenses: 4000 },
{ month: 'Dec', income: 6000, expenses: 4500 },
];

const projectStatusData = [
{ name: 'In Progress', value: 12 },
{ name: 'Completed', value: 35 },
{ name: 'Pending', value: 5 },
{ name: 'On Hold', value: 3 },
{ name: 'Cancelled', value: 1 },
];
const PIE_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A100F8'];

const clientActivityData = [
{ client: 'Alpha Corp', projects: 8, invoices: 15 },
{ client: 'Beta LLC', projects: 5, invoices: 10 },
{ client: 'Gamma Inc', projects: 3, invoices: 7 },
{ client: 'Delta Co', projects: 2, invoices: 4 },
{ client: 'Epsilon Ltd', projects: 6, invoices: 12 },
];

// In a real application, you might use useState and useEffect for data fetching:
// const [incomeData, setIncomeData] = useState([]);
// useEffect(() => {
//   fetch('/api/income')
//     .then(res => res.json())
//     .then(data => setIncomeData(data));
// }, []);

return (
<div className="min-h-screen bg-gray-100 p-8 font-sans">
<h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center tracking-tight">
Reports Dashboard
</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Monthly Income & Expenses Chart */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
<h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart data={incomeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" className="text-sm text-gray-600" />
<YAxis className="text-sm text-gray-600" />
<Tooltip
wrapperClassName="rounded-md shadow-md bg-white p-2 border border-gray-300"
contentStyle={{ border: 'none', fontSize: '14px' }}
labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px', fontSize: '14px' }} />
<Line
type="monotone"
dataKey="income"
stroke="#4CAF50"
activeDot={{ r: 8 }}
strokeWidth={2}
name="Income"
/>
<Line
type="monotone"
dataKey="expenses"
stroke="#FF6347"
activeDot={{ r: 8 }}
strokeWidth={2}
name="Expenses"
/>
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Distribution Chart */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
<h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Project Status Distribution</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
<Tooltip
wrapperClassName="rounded-md shadow-md bg-white p-2 border border-gray-300"
contentStyle={{ border: 'none', fontSize: '14px' }}
labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px', fontSize: '14px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Overview Chart */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
<h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Client Activity Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart data={clientActivityData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="client" className="text-sm text-gray-600" />
<YAxis className="text-sm text-gray-600" />
<Tooltip
wrapperClassName="rounded-md shadow-md bg-white p-2 border border-gray-300"
contentStyle={{ border: 'none', fontSize: '14px' }}
labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px', fontSize: '14px' }} />
<Bar dataKey="projects" fill="#8884d8" name="Active Projects" />
<Bar dataKey="invoices" fill="#82ca9d" name="Invoices Sent" />
</BarChart>
</ResponsiveContainer>
</div>
</div>
</div>
);
};

export default ReportsPage;
