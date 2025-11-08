import React from 'react';
import {
ResponsiveContainer,
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
BarChart, Bar,
PieChart, Pie, Cell
} from 'recharts';

// Dummy Data
const incomeData = [
{ name: 'Jan', income: 4000, expenses: 2400 },
{ name: 'Feb', income: 3000, expenses: 1398 },
{ name: 'Mar', income: 5000, expenses: 2800 },
{ name: 'Apr', income: 4780, expenses: 3908 },
{ name: 'May', income: 5890, expenses: 4800 },
{ name: 'Jun', income: 6390, expenses: 3800 },
{ name: 'Jul', income: 7490, expenses: 4300 },
{ name: 'Aug', income: 6300, expenses: 3500 },
{ name: 'Sep', income: 7200, expenses: 4200 },
{ name: 'Oct', income: 6800, expenses: 3900 },
{ name: 'Nov', income: 7900, expenses: 4500 },
{ name: 'Dec', income: 8000, expenses: 4800 },
];

const projectStatusData = [
{ name: 'Completed', value: 12 },
{ name: 'In Progress', value: 8 },
{ name: 'Pending', value: 5 },
{ name: 'On Hold', value: 3 },
];

const clientActivityData = [
{ name: 'Client A', projects: 5, interactions: 15 },
{ name: 'Client B', projects: 3, interactions: 10 },
{ name: 'Client C', projects: 7, interactions: 22 },
{ name: 'Client D', projects: 4, interactions: 18 },
{ name: 'Client E', projects: 6, interactions: 20 },
];

const PIE_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A284D8', '#FF69B4'];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-100 p-6 sm:p-8 lg:p-10">
<h1 className="text-3xl font-bold text-gray-800 mb-8 sm:mb-10">Reports Dashboard</h1>

<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

{/* Monthly Income & Expenses Chart */}
<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" stroke="#555" />
<YAxis stroke="#555" />
<Tooltip
wrapperClassName="rounded-lg shadow-md border border-gray-200 p-2 text-sm bg-white"
labelClassName="font-bold text-gray-800 mb-1"
itemStyle={{ padding: 0, margin: 0, color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
<Line type="monotone" dataKey="expenses" stroke="#82ca9d" strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Distribution Chart */}
<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip
wrapperClassName="rounded-lg shadow-md border border-gray-200 p-2 text-sm bg-white"
itemStyle={{ padding: 0, margin: 0, color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Project & Interaction Counts Chart */}
<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Project & Interaction Counts</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="name" stroke="#555" />
<YAxis stroke="#555" />
<Tooltip
wrapperClassName="rounded-lg shadow-md border border-gray-200 p-2 text-sm bg-white"
labelClassName="font-bold text-gray-800 mb-1"
itemStyle={{ padding: 0, margin: 0, color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="projects" fill="#8884d8" name="Projects" />
<Bar dataKey="interactions" fill="#82ca9d" name="Interactions" />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
