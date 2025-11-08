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

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const clientActivityData = [
{ client: 'Alpha Corp', activity: 75 },
{ client: 'Beta Innovations', activity: 120 },
{ client: 'Gamma Solutions', activity: 90 },
{ client: 'Delta Systems', activity: 60 },
{ client: 'Epsilon Tech', activity: 110 },
];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-100 p-6">
<h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Reports Dashboard</h1>

<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
{/* Income Chart */}
<div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center">
<h2 className="text-2xl font-semibold text-gray-700 mb-4">Monthly Income</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ fontWeight: 'bold', color: '#333' }}
itemStyle={{ color: '#555' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center">
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
nameKey="name"
label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))}
</Pie>
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ fontWeight: 'bold', color: '#333' }}
itemStyle={{ color: '#555' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center">
<h2 className="text-2xl font-semibold text-gray-700 mb-4">Client Activity Count</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="client" interval={0} angle={-30} textAnchor="end" height={60} className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ fontWeight: 'bold', color: '#333' }}
itemStyle={{ color: '#555' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="activity" fill="#82ca9d" />
</BarChart>
</ResponsiveContainer>
</div>
</div>
</div>
);
};

export default ReportsPage;
