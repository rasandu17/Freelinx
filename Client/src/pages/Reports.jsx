import React from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

const incomeData = [
{ month: 'Jan', income: 4000, expenses: 2400 },
{ month: 'Feb', income: 3000, expenses: 1398 },
{ month: 'Mar', income: 5000, expenses: 3200 },
{ month: 'Apr', income: 4500, expenses: 2800 },
{ month: 'May', income: 6000, expenses: 4000 },
{ month: 'Jun', income: 5500, expenses: 3500 },
{ month: 'Jul', income: 4800, expenses: 3000 },
{ month: 'Aug', income: 5200, expenses: 3300 },
{ month: 'Sep', income: 5800, expenses: 3700 },
{ month: 'Oct', income: 6500, expenses: 4200 },
{ month: 'Nov', income: 6200, expenses: 3900 },
{ month: 'Dec', income: 7000, expenses: 4500 },
];

const projectStatusData = [
{ name: 'New', value: 25 },
{ name: 'In Progress', value: 45 },
{ name: 'Completed', value: 70 },
{ name: 'On Hold', value: 10 },
{ name: 'Cancelled', value: 5 },
];

const projectStatusColors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#E74C3C'];

const clientActivityData = [
{ week: 'Wk 1', emails: 30, calls: 15, meetings: 5 },
{ week: 'Wk 2', emails: 25, calls: 10, meetings: 3 },
{ week: 'Wk 3', emails: 35, calls: 20, meetings: 7 },
{ week: 'Wk 4', emails: 20, calls: 12, meetings: 4 },
{ week: 'Wk 5', emails: 28, calls: 18, meetings: 6 },
{ week: 'Wk 6', emails: 32, calls: 14, meetings: 5 },
];

function ReportsPage() {
return (
<div className="p-6 bg-gray-100 min-h-screen">
<h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Analytics Reports Overview</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Monthly Income Overview Chart */}
<div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
<h2 className="text-2xl font-semibold text-gray-700 mb-5">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart data={incomeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" className="text-sm text-gray-600" />
<YAxis className="text-sm text-gray-600" />
<Tooltip
contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ddd', borderRadius: '8px', padding: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
labelStyle={{ fontWeight: 'bold', marginBottom: '6px', color: '#333' }}
itemStyle={{ fontSize: '14px', marginBottom: '3px', color: '#555' }}
/>
<Legend wrapperStyle={{ paddingTop: '15px', fontSize: '14px' }} />
<Line type="monotone" dataKey="income" stroke="#4F46E5" activeDot={{ r: 8 }} strokeWidth={2} name="Income" />
<Line type="monotone" dataKey="expenses" stroke="#10B981" strokeWidth={2} name="Expenses" />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Distribution Chart */}
<div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
<h2 className="text-2xl font-semibold text-gray-700 mb-5">Project Status Distribution</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
<Pie
data={projectStatusData}
cx="50%"
cy="50%"
labelLine={false}
outerRadius={100}
fill="#8884d8"
dataKey="value"
label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
animationDuration={800}
animationEasing="ease-out"
>
{
projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={projectStatusColors[index % projectStatusColors.length]} />
))
}
</Pie>
<Tooltip
contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ddd', borderRadius: '8px', padding: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
labelStyle={{ fontWeight: 'bold', marginBottom: '6px', color: '#333' }}
itemStyle={{ fontSize: '14px', marginBottom: '3px', color: '#555' }}
/>
<Legend wrapperStyle={{ paddingTop: '15px', fontSize: '14px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Weekly Client Activity Chart */}
<div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
<h2 className="text-2xl font-semibold text-gray-700 mb-5">Weekly Client Activity</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart data={clientActivityData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="week" className="text-sm text-gray-600" />
<YAxis className="text-sm text-gray-600" />
<Tooltip
contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ddd', borderRadius: '8px', padding: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
labelStyle={{ fontWeight: 'bold', marginBottom: '6px', color: '#333' }}
itemStyle={{ fontSize: '14px', marginBottom: '3px', color: '#555' }}
/>
<Legend wrapperStyle={{ paddingTop: '15px', fontSize: '14px' }} />
<Bar dataKey="emails" fill="#3B82F6" name="Emails Sent" />
<Bar dataKey="calls" fill="#F59E0B" name="Calls Made" />
<Bar dataKey="meetings" fill="#EF4444" name="Meetings" />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
}

export default ReportsPage;
