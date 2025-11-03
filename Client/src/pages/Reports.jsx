import React from 'react';
import {
LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';

const ReportsPage = () => {
// Dummy data for monthly income over a year
const incomeData = [
{ month: 'January', income: 4200 },
{ month: 'February', income: 3800 },
{ month: 'March', income: 5100 },
{ month: 'April', income: 4700 },
{ month: 'May', income: 6300 },
{ month: 'June', income: 5900 },
{ month: 'July', income: 6800 },
{ month: 'August', income: 7200 },
{ month: 'September', income: 6500 },
{ month: 'October', income: 7800 },
{ month: 'November', income: 8300 },
{ month: 'December', income: 7900 },
];

// Dummy data for project status distribution
const projectStatusData = [
{ name: 'Completed', value: 120 },
{ name: 'In Progress', value: 80 },
{ name: 'Pending', value: 30 },
{ name: 'On Hold', value: 15 },
{ name: 'Cancelled', value: 5 },
];

// Dummy data for client activity overview
const clientActivityData = [
{ client: 'Client A', activityCount: 150 },
{ client: 'Client B', activityCount: 120 },
{ client: 'Client C', activityCount: 90 },
{ client: 'Client D', activityCount: 70 },
{ client: 'Client E', activityCount: 60 },
{ client: 'Client F', activityCount: 40 },
];

// Custom colors for Pie Chart segments
const PIE_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

return (
<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8 sm:p-10 md:p-12 font-sans">
<h1 className="text-5xl font-extrabold text-gray-900 mb-12 text-center drop-shadow-lg">Business Reports Dashboard</h1>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10">

{/* Monthly Income Trend Card */}
<div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 ease-in-out border border-gray-100 transform hover:-translate-y-1">
<h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Monthly Income Trend</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart data={incomeData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" tickFormatter={(value) => value.substring(0, 3)} className="text-sm" axisLine={false} tickLine={false} />
<YAxis unit="$" tickFormatter={(value) => (value / 1000) + 'k'} className="text-sm" axisLine={false} tickLine={false} />
<Tooltip cursor={{ strokeDasharray: '3 3', stroke: '#cbd5e1' }} formatter={(value) => `$${value.toLocaleString()}`} />
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line
type="monotone"
dataKey="income"
stroke="#6366f1" // Indigo-500
activeDot={{ r: 8, fill: '#6366f1', stroke: '#a5b4fc', strokeWidth: 2 }}
strokeWidth={3}
dot={{ r: 4, fill: '#818cf8' }}
/>
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Distribution Card */}
<div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 ease-in-out border border-gray-100 transform hover:-translate-y-1">
<h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Project Status Distribution</h2>
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
label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip formatter={(value, name) => [`${value} projects`, name]} />
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Overview Card */}
<div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 ease-in-out border border-gray-100 transform hover:-translate-y-1">
<h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Client Activity Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart data={clientActivityData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" vertical={false} />
<XAxis dataKey="client" className="text-sm" axisLine={false} tickLine={false} />
<YAxis className="text-sm" axisLine={false} tickLine={false} />
<Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} formatter={(value, name) => [`${value} activities`, name]} />
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar
dataKey="activityCount"
fill="#22d3ee" // Cyan-400
barSize={30}
radius={[8, 8, 0, 0]}
/>
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
