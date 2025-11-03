import React from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
PieChart, Pie, BarChart, Bar, Cell
} from 'recharts';

const incomeData = [
{ month: 'Jan', income: 4000 },
{ month: 'Feb', income: 3000 },
{ month: 'Mar', income: 5000 },
{ month: 'Apr', income: 4500 },
{ month: 'May', income: 6000 },
{ month: 'Jun', income: 5500 },
{ month: 'Jul', income: 7000 },
{ month: 'Aug', income: 6500 },
{ month: 'Sep', income: 8000 },
{ month: 'Oct', income: 7500 },
{ month: 'Nov', income: 9000 },
{ month: 'Dec', income: 8500 },
];

const projectStatusData = [
{ name: 'Completed', value: 12 },
{ name: 'In Progress', value: 8 },
{ name: 'Pending', value: 5 },
{ name: 'On Hold', value: 3 },
];

const COLORS = ['#82ca9d', '#8884d8', '#ffc658', '#FF8042'];

const clientActivityData = [
{ client: 'Client A', projects: 10 },
{ client: 'Client B', projects: 7 },
{ client: 'Client C', projects: 5 },
{ client: 'Client D', projects: 8 },
{ client: 'Client E', projects: 6 },
];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-100 p-6">
<h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Business Reports</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Income Chart */}
<div className="bg-white rounded-lg shadow-xl p-6">
<h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Monthly Income Trend</h2>
<div className="w-full h-80">
<ResponsiveContainer width="100%" height="100%">
<LineChart
data={incomeData}
margin={{
top: 5,
right: 30,
left: 20,
bottom: 5,
}}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" tick={{ fill: '#555' }} />
<YAxis tick={{ fill: '#555' }} />
<Tooltip
formatter={(value) => `$${value}`}
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px', color: '#555' }} />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>
</div>

{/* Project Status Chart */}
<div className="bg-white rounded-lg shadow-xl p-6">
<h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Project Status Overview</h2>
<div className="w-full h-80 flex justify-center items-center">
<ResponsiveContainer width="100%" height="100%">
<PieChart>
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
<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))}
</Pie>
<Tooltip
formatter={(value) => `${value} Projects`}
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px', color: '#555' }} />
</PieChart>
</ResponsiveContainer>
</div>
</div>

{/* Client Activity Chart */}
<div className="bg-white rounded-lg shadow-xl p-6">
<h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Client Activity by Projects</h2>
<div className="w-full h-80">
<ResponsiveContainer width="100%" height="100%">
<BarChart
data={clientActivityData}
margin={{
top: 5,
right: 30,
left: 20,
bottom: 5,
}}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="client" tick={{ fill: '#555' }} />
<YAxis tick={{ fill: '#555' }} />
<Tooltip
formatter={(value) => `${value} Projects`}
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px', color: '#555' }} />
<Bar dataKey="projects" fill="#82ca9d" barSize={30} />
</BarChart>
</ResponsiveContainer>
</div>
</div>
</div>
</div>
);
};

export default ReportsPage;
