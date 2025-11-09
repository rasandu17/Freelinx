import React from 'react';
import {
ResponsiveContainer,
LineChart,
Line,
BarChart,
Bar,
PieChart,
Pie,
Tooltip,
Legend,
XAxis,
YAxis,
CartesianGrid,
Cell
} from 'recharts';

const incomeData = [
{ month: 'Jan', income: 4000, expenses: 2400 },
{ month: 'Feb', income: 3000, expenses: 1398 },
{ month: 'Mar', income: 5000, expenses: 2800 },
{ month: 'Apr', income: 4780, expenses: 3908 },
{ month: 'May', income: 5890, expenses: 4800 },
{ month: 'Jun', income: 6390, expenses: 3800 },
{ month: 'Jul', income: 5490, expenses: 4300 },
{ month: 'Aug', income: 6800, expenses: 5400 },
{ month: 'Sep', income: 7200, expenses: 4900 },
{ month: 'Oct', income: 6100, expenses: 3700 },
{ month: 'Nov', income: 7500, expenses: 5200 },
{ month: 'Dec', income: 8000, expenses: 6000 },
];

const projectStatusData = [
{ name: 'Completed', value: 30 },
{ name: 'In Progress', value: 45 },
{ name: 'Pending', value: 15 },
{ name: 'Cancelled', value: 10 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const clientActivityData = [
{ client: 'Alpha Corp', projects: 12, value: 120000 },
{ client: 'Beta Solutions', projects: 8, value: 85000 },
{ client: 'Gamma Inc', projects: 15, value: 150000 },
{ client: 'Delta LLC', projects: 5, value: 60000 },
{ client: 'Epsilon Tech', projects: 10, value: 110000 },
];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-100 p-8">
<h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">Business Reports Overview</h1>

<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">

{/* Income Report Chart */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
<h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
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
<XAxis dataKey="month" tickLine={false} axisLine={{ stroke: '#cccccc' }} />
<YAxis tickLine={false} axisLine={{ stroke: '#cccccc' }} />
<Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperClassName="shadow-md rounded-lg" />
<Legend verticalAlign="top" height={36} />
<Line type="monotone" dataKey="income" stroke="#82ca9d" strokeWidth={3} activeDot={{ r: 8 }} />
<Line type="monotone" dataKey="expenses" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
<h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Project Status Distribution</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart>
<Pie
data={projectStatusData}
cx="50%"
cy="50%"
labelLine={false}
outerRadius={120}
fill="#8884d8"
dataKey="value"
nameKey="name"
label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))}
</Pie>
<Tooltip wrapperClassName="shadow-md rounded-lg" />
<Legend />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
<h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Client Project Activity</h2>
<ResponsiveContainer width="100%" height={300}>
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
<XAxis dataKey="client" interval={0} angle={-30} textAnchor="end" height={60} tickLine={false} axisLine={{ stroke: '#cccccc' }} />
<YAxis tickLine={false} axisLine={{ stroke: '#cccccc' }} />
<Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} wrapperClassName="shadow-md rounded-lg" />
<Legend />
<Bar dataKey="projects" fill="#4a90e2" name="Projects" barSize={30} />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
