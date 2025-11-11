import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

function ReportsPage() {
const incomeData = [
{ name: 'Jan', income: 4000, expenses: 2400 },
{ name: 'Feb', income: 3000, expenses: 1398 },
{ name: 'Mar', income: 2000, expenses: 9800 },
{ name: 'Apr', income: 2780, expenses: 3908 },
{ name: 'May', income: 1890, expenses: 4800 },
{ name: 'Jun', income: 2390, expenses: 3800 },
{ name: 'Jul', income: 3490, expenses: 4300 },
{ name: 'Aug', income: 3000, expenses: 2000 },
{ name: 'Sep', income: 3200, expenses: 2780 },
{ name: 'Oct', income: 3800, expenses: 2400 },
{ name: 'Nov', income: 4500, expenses: 3000 },
{ name: 'Dec', income: 4200, expenses: 2800 },
];

const projectStatusData = [
{ name: 'Completed', value: 30 },
{ name: 'In Progress', value: 20 },
{ name: 'Pending', value: 15 },
{ name: 'On Hold', value: 5 },
];
const PIE_COLORS = ['#82ca9d', '#8884d8', '#ffc658', '#FF8042'];

const clientActivityData = [
{ name: 'Client A', projects: 12 },
{ name: 'Client B', projects: 8 },
{ name: 'Client C', projects: 15 },
{ name: 'Client D', projects: 7 },
{ name: 'Client E', projects: 10 },
{ name: 'Client F', projects: 9 },
];

return (
<div className="min-h-screen bg-gray-100 p-8 font-sans">
<h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{/* Monthly Income & Expenses Chart */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
<h2 className="text-2xl font-semibold text-gray-700 mb-4">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" tickLine={false} axisLine={{ stroke: '#ccc' }} />
<YAxis tickLine={false} axisLine={{ stroke: '#ccc' }} />
<Tooltip cursor={{ strokeDasharray: '3 3' }} />
<Legend />
<Line type="monotone" dataKey="income" stroke="#4CAF50" activeDot={{ r: 8 }} strokeWidth={2} />
<Line type="monotone" dataKey="expenses" stroke="#FF5722" activeDot={{ r: 8 }} strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Overview Pie Chart */}
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
label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
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

{/* Client Project Count Bar Chart */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
<h2 className="text-2xl font-semibold text-gray-700 mb-4">Client Project Count</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" tickLine={false} axisLine={{ stroke: '#ccc' }} />
<YAxis allowDecimals={false} tickLine={false} axisLine={{ stroke: '#ccc' }} />
<Tooltip cursor={{ fill: 'transparent' }} />
<Legend />
<Bar dataKey="projects" fill="#8884d8" barSize={30} radius={[5, 5, 0, 0]} />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
}

export default ReportsPage;
