import React, { useState, useEffect } from 'react';
import {
LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const ReportsPage = () => {
const [incomeData, setIncomeData] = useState([]);
const [projectStatusData, setProjectStatusData] = useState([]);
const [clientActivityData, setClientActivityData] = useState([]);

useEffect(() => {
// Simulate fetching data from an API
const fetchReportData = () => {
// Mock Income Data (Line Chart)
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
const mockIncome = months.map(month => ({
month,
income: Math.floor(Math.random() * 6000) + 18000,
expenses: Math.floor(Math.random() * 3000) + 7000,
}));
setIncomeData(mockIncome);

// Mock Project Status Data (Bar Chart)
const mockProjectStatus = [
{ status: 'Pending', count: Math.floor(Math.random() * 4) + 2 },
{ status: 'In Progress', count: Math.floor(Math.random() * 7) + 5 },
{ status: 'Completed', count: Math.floor(Math.random() * 10) + 12 },
{ status: 'On Hold', count: Math.floor(Math.random() * 3) + 1 },
];
setProjectStatusData(mockProjectStatus);

// Mock Client Activity Data (Pie Chart)
const mockClientActivity = [
{ name: 'Active Clients', value: Math.floor(Math.random() * 30) + 25 },
{ name: 'New Clients', value: Math.floor(Math.random() * 15) + 8 },
{ name: 'Inactive Clients', value: Math.floor(Math.random() * 10) + 5 },
];
setClientActivityData(mockClientActivity);
};

fetchReportData();
}, []);

const PIE_COLORS = ['#6366f1', '#fbbf24', '#ef4444', '#10b981']; // Tailwind-inspired colors

return (
<div className="p-6 bg-gray-50 min-h-screen">
<h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Reports Dashboard</h1>

<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">

{/* Income Chart */}
<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
<h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-3">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart data={incomeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
<XAxis dataKey="month" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
contentStyle={{ borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
itemStyle={{ color: '#374151' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#6366f1" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
<Line type="monotone" dataKey="expenses" stroke="#fbbf24" strokeWidth={2} dot={{ r: 4 }} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
<h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-3">Project Status Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart data={projectStatusData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
<XAxis dataKey="status" className="text-sm" />
<YAxis allowDecimals={false} className="text-sm" />
<Tooltip
contentStyle={{ borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
itemStyle={{ color: '#374151' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="count" fill="#10b981" barSize={30} radius={[5, 5, 0, 0]} />
</BarChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 xl:col-span-1 lg:col-span-2">
<h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-3">Client Activity Distribution</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart>
<Pie
data={clientActivityData}
cx="50%"
cy="50%"
labelLine={false}
outerRadius={100}
fill="#8884d8"
dataKey="value"
label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
>
{clientActivityData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip
contentStyle={{ borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
itemStyle={{ color: '#374151' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
