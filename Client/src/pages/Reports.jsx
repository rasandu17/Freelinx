import React from 'react';
import {
ResponsiveContainer,
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
Legend,
PieChart,
Pie,
Cell,
LineChart,
Line,
CartesianGrid,
} from 'recharts';

const incomeData = [
{ month: 'Jan', income: 4000, expenses: 2400 },
{ month: 'Feb', income: 3000, expenses: 1398 },
{ month: 'Mar', income: 5000, expenses: 2800 },
{ month: 'Apr', income: 4780, expenses: 3908 },
{ month: 'May', income: 5890, expenses: 4800 },
{ month: 'Jun', income: 6000, expenses: 3800 },
{ month: 'Jul', income: 4500, expenses: 2300 },
{ month: 'Aug', income: 5500, expenses: 3200 },
{ month: 'Sep', income: 6200, expenses: 4100 },
{ month: 'Oct', income: 5100, expenses: 3500 },
{ month: 'Nov', income: 6500, expenses: 4000 },
{ month: 'Dec', income: 7000, expenses: 4500 },
];

const projectStatusData = [
{ name: 'Active', value: 12 },
{ name: 'Completed', value: 25 },
{ name: 'Pending', value: 8 },
{ name: 'On Hold', value: 3 },
{ name: 'Cancelled', value: 2 },
];
const PROJECT_COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#0088fe'];

const clientActivityData = [
{ month: 'Jan', newClients: 5, activeClients: 50 },
{ month: 'Feb', newClients: 7, activeClients: 55 },
{ month: 'Mar', newClients: 6, activeClients: 60 },
{ month: 'Apr', newClients: 8, activeClients: 65 },
{ month: 'May', newClients: 10, activeClients: 70 },
{ month: 'Jun', newClients: 9, activeClients: 72 },
{ month: 'Jul', newClients: 11, activeClients: 75 },
{ month: 'Aug', newClients: 12, activeClients: 80 },
{ month: 'Sep', newClients: 10, activeClients: 78 },
{ month: 'Oct', newClients: 13, activeClients: 82 },
{ month: 'Nov', newClients: 15, activeClients: 88 },
{ month: 'Dec', newClients: 14, activeClients: 90 },
];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-100 p-8">
<h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
Reports Dashboard
</h1>

<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
{/* Income Report Chart */}
<div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center">
<h2 className="text-2xl font-semibold text-gray-700 mb-4">
Monthly Income & Expenses
</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={incomeData}
margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="month" />
<YAxis />
<Tooltip
cursor={{ fill: 'transparent' }}
wrapperClassName="rounded-lg shadow-md bg-white p-2"
labelClassName="font-bold text-gray-800"
itemStyle={{ color: '#333' }}
/>
<Legend />
<Bar dataKey="income" fill="#8884d8" name="Income" />
<Bar dataKey="expenses" fill="#82ca9d" name="Expenses" />
</BarChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center">
<h2 className="text-2xl font-semibold text-gray-700 mb-4">
Project Status Distribution
</h2>
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
label={({ name, percent }) =>
`${name} ${(percent * 100).toFixed(0)}%`
}
>
{projectStatusData.map((entry, index) => (
<Cell
key={`cell-${index}`}
fill={PROJECT_COLORS[index % PROJECT_COLORS.length]}
/>
))}
</Pie>
<Tooltip
wrapperClassName="rounded-lg shadow-md bg-white p-2"
labelClassName="font-bold text-gray-800"
itemStyle={{ color: '#333' }}
/>
<Legend />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center">
<h2 className="text-2xl font-semibold text-gray-700 mb-4">
Client Activity Trends
</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={clientActivityData}
margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="month" />
<YAxis />
<Tooltip
wrapperClassName="rounded-lg shadow-md bg-white p-2"
labelClassName="font-bold text-gray-800"
itemStyle={{ color: '#333' }}
/>
<Legend />
<Line
type="monotone"
dataKey="newClients"
stroke="#ff7300"
activeDot={{ r: 8 }}
name="New Clients"
/>
<Line
type="monotone"
dataKey="activeClients"
stroke="#0088fe"
name="Total Active Clients"
/>
</LineChart>
</ResponsiveContainer>
</div>
</div>
</div>
);
};

export default ReportsPage;
