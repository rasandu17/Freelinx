import React from 'react';
import {
ResponsiveContainer,
BarChart,
Bar,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
LineChart,
Line,
PieChart,
Pie,
Cell
} from 'recharts';

const incomeData = [
{ month: 'Jan', income: 4000, expenses: 2400 },
{ month: 'Feb', income: 3000, expenses: 1398 },
{ month: 'Mar', income: 5000, expenses: 3200 },
{ month: 'Apr', income: 4500, expenses: 3908 },
{ month: 'May', income: 6000, expenses: 4800 },
{ month: 'Jun', income: 5500, expenses: 3800 },
{ month: 'Jul', income: 6200, expenses: 4300 },
{ month: 'Aug', income: 5800, expenses: 3900 },
{ month: 'Sep', income: 6500, expenses: 4500 },
{ month: 'Oct', income: 7000, expenses: 5000 },
{ month: 'Nov', income: 6800, expenses: 4700 },
{ month: 'Dec', income: 7500, expenses: 5200 },
];

const projectStatusData = [
{ name: 'Completed', value: 15 },
{ name: 'In Progress', value: 20 },
{ name: 'Pending', value: 10 },
{ name: 'On Hold', value: 5 },
];
const PROJECT_STATUS_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const clientActivityData = [
{ client: 'Alpha Corp', projects: 12, value: 50000 },
{ client: 'Beta Ltd', projects: 8, value: 30000 },
{ client: 'Gamma Inc', projects: 5, value: 20000 },
{ client: 'Delta LLC', projects: 7, value: 25000 },
{ client: 'Epsilon Co', projects: 9, value: 35000 },
];

const ReportsPage = () => {
return (
<div className="min-h-screen bg-gray-100 p-8">
<h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">Business Reports Overview</h1>

<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
{/* Income & Expenses Chart */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
<h2 className="text-2xl font-semibold text-gray-800 mb-4">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '4px' }}
labelStyle={{ fontWeight: 'bold' }}
itemStyle={{ color: '#333333' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#82ca9d" activeDot={{ r: 8 }} strokeWidth={2} />
<Line type="monotone" dataKey="expenses" stroke="#FF6B6B" strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
<h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Status Distribution</h2>
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
<Cell key={`cell-${index}`} fill={PROJECT_STATUS_COLORS[index % PROJECT_STATUS_COLORS.length]} />
))}
</Pie>
<Tooltip
contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '4px' }}
labelStyle={{ fontWeight: 'bold' }}
itemStyle={{ color: '#333333' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
<h2 className="text-2xl font-semibold text-gray-800 mb-4">Client Projects Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="client" className="text-sm" angle={-15} textAnchor="end" height={50} />
<YAxis />
<Tooltip
contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '4px' }}
labelStyle={{ fontWeight: 'bold' }}
itemStyle={{ color: '#333333' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="projects" fill="#8884d8" name="Number of Projects" barSize={30} />
</BarChart>
</ResponsiveContainer>
</div>
</div>
</div>
);
};

export default ReportsPage;
