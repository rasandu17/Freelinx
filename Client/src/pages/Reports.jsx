import React from 'react';
import {
LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF'];

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
{ name: 'Completed', value: 40 },
{ name: 'In Progress', value: 25 },
{ name: 'Pending', value: 15 },
{ name: 'On Hold', value: 10 },
{ name: 'Cancelled', value: 5 },
];

const clientActivityData = [
{ client: 'Alpha Corp', projects: 12 },
{ client: 'Beta Solutions', projects: 8 },
{ client: 'Gamma Group', projects: 15 },
{ client: 'Delta Innovations', projects: 7 },
{ client: 'Epsilon Tech', projects: 10 },
];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-50 p-6">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Income Over Time Chart */}
<div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Income Over Time</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="month" />
<YAxis />
<Tooltip />
<Legend />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
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
<Tooltip />
<Legend />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Project Activity</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="client" interval={0} angle={-30} textAnchor="end" height={60} />
<YAxis />
<Tooltip />
<Legend />
<Bar dataKey="projects" fill="#82ca9d" />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
