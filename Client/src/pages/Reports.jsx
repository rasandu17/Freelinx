import React from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
PieChart, Pie, Cell,
BarChart, Bar
} from 'recharts';

// Mock data for the charts
const incomeData = [
{ month: 'Jan', income: 4000 },
{ month: 'Feb', income: 3000 },
{ month: 'Mar', income: 5000 },
{ month: 'Apr', income: 4500 },
{ month: 'May', income: 6000 },
{ month: 'Jun', income: 5500 },
{ month: 'Jul', income: 7000 },
{ month: 'Aug', income: 6200 },
{ month: 'Sep', income: 6800 },
{ month: 'Oct', income: 7500 },
{ month: 'Nov', income: 7200 },
{ month: 'Dec', income: 8000 },
];

const projectStatusData = [
{ name: 'Completed', value: 12 },
{ name: 'In Progress', value: 8 },
{ name: 'Pending', value: 4 },
{ name: 'Cancelled', value: 2 },
];

const PIE_CHART_COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#FF8042'];

const clientActivityData = [
{ client: 'Client A', projectsCompleted: 5 },
{ client: 'Client B', projectsCompleted: 3 },
{ client: 'Client C', projectsCompleted: 7 },
{ client: 'Client D', projectsCompleted: 2 },
{ client: 'Client E', projectsCompleted: 4 },
];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-100 p-6">
<h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Monthly Income Chart */}
<div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income</h2>
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

{/* Project Status Overview Chart */}
<div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
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
nameKey="name"
label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_CHART_COLORS[index % PIE_CHART_COLORS.length]} />
))}
</Pie>
<Tooltip />
<Legend />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Project Activity Chart */}
<div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Project Activity</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="client" />
<YAxis />
<Tooltip />
<Legend />
<Bar dataKey="projectsCompleted" fill="#82ca9d" />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
