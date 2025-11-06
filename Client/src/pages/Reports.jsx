import React from 'react';
import {
ResponsiveContainer,
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
BarChart, Bar,
PieChart, Pie, Cell
} from 'recharts';

const ReportsPage = () => {
const incomeData = [
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

const projectStatusData = [
{ name: 'Completed', value: 15 },
{ name: 'In Progress', value: 10 },
{ name: 'Pending', value: 5 },
{ name: 'On Hold', value: 3 },
];
const PIE_COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#FF8042'];

const clientActivityData = [
{ client: 'Client A', projects: 12, invoices: 25 },
{ client: 'Client B', projects: 8, invoices: 18 },
{ client: 'Client C', projects: 5, invoices: 10 },
{ client: 'Client D', projects: 3, invoices: 7 },
{ client: 'Client E', projects: 7, invoices: 15 },
];

return (
<div className="p-6 bg-gray-100 min-h-screen">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Monthly Income Chart */}
<div className="bg-white p-6 rounded-lg shadow-md col-span-full lg:col-span-2">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart data={incomeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} />
<YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px' }}
labelStyle={{ color: '#333' }}
itemStyle={{ color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} name="Income ($)" />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Overview Chart */}
<div className="bg-white p-6 rounded-lg shadow-md col-span-full md:col-span-1 lg:col-span-1">
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
label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
animationDuration={500}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px' }}
labelStyle={{ color: '#333' }}
itemStyle={{ color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white p-6 rounded-lg shadow-md col-span-full md:col-span-1 lg:col-span-3">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Activity</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart data={clientActivityData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="client" tick={{ fill: '#6b7280', fontSize: 12 }} />
<YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px' }}
labelStyle={{ color: '#333' }}
itemStyle={{ color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="projects" fill="#82ca9d" name="Projects" />
<Bar dataKey="invoices" fill="#ffc658" name="Invoices" />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
