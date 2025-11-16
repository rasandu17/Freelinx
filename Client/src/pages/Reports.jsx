import React from 'react';
import {
LineChart, Line, BarChart, Bar, PieChart, Pie, Sector, Cell,
XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const incomeData = [
{ name: 'Jan', income: 4000, expenses: 2400 },
{ name: 'Feb', income: 3000, expenses: 1398 },
{ name: 'Mar', income: 2000, expenses: 9800 },
{ name: 'Apr', income: 2780, expenses: 3908 },
{ name: 'May', income: 1890, expenses: 4800 },
{ name: 'Jun', income: 2390, expenses: 3800 },
{ name: 'Jul', income: 3490, expenses: 4300 },
{ name: 'Aug', income: 4200, expenses: 2800 },
{ name: 'Sep', income: 3800, expenses: 3100 },
{ name: 'Oct', income: 4500, expenses: 2900 },
{ name: 'Nov', income: 3900, expenses: 3200 },
{ name: 'Dec', income: 5000, expenses: 2500 },
];

const projectStatusData = [
{ name: 'Completed', value: 30 },
{ name: 'In Progress', value: 20 },
{ name: 'Pending', value: 10 },
{ name: 'On Hold', value: 5 },
{ name: 'Cancelled', value: 3 },
];

const clientActivityData = [
{ name: 'Client A', projects: 8, tickets: 12 },
{ name: 'Client B', projects: 5, tickets: 7 },
{ name: 'Client C', projects: 10, tickets: 15 },
{ name: 'Client D', projects: 3, tickets: 5 },
{ name: 'Client E', projects: 7, tickets: 9 },
];

const PIE_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-100 p-6">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Income & Expenses Chart */}
<div className="bg-white p-6 rounded-lg shadow-md col-span-1">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
wrapperClassName="rounded-lg shadow-lg"
contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e0e0e0', borderRadius: '8px' }}
labelStyle={{ fontWeight: 'bold' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
<Line type="monotone" dataKey="expenses" stroke="#82ca9d" strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white p-6 rounded-lg shadow-md col-span-1">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Project Status Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
<Pie
data={projectStatusData}
cx="50%"
cy="50%"
labelLine={false}
outerRadius={100}
fill="#8884d8"
dataKey="value"
nameKey="name"
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip
wrapperClassName="rounded-lg shadow-lg"
contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e0e0e0', borderRadius: '8px' }}
labelStyle={{ fontWeight: 'bold' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white p-6 rounded-lg shadow-md col-span-1">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Activity (Projects & Tickets)</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
wrapperClassName="rounded-lg shadow-lg"
contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e0e0e0', borderRadius: '8px' }}
labelStyle={{ fontWeight: 'bold' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="projects" fill="#8884d8" barSize={30} />
<Bar dataKey="tickets" fill="#82ca9d" barSize={30} />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
