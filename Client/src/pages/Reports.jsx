import React, { useState, useEffect } from 'react';
import {
ResponsiveContainer,
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
Legend,
LineChart,
Line,
PieChart,
Pie,
Cell,
} from 'recharts';

const ReportsPage = () => {
const [incomeData, setIncomeData] = useState([]);
const [projectStatusData, setProjectStatusData] = useState([]);
const [clientActivityData, setClientActivityData] = useState([]);
const [loading, setLoading] = useState(true);

// Dummy data generation
useEffect(() => {
const generateData = () => {
// Income Data (monthly)
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const income = months.map(month => ({
month,
income: Math.floor(Math.random() * 10000) + 5000,
expenses: Math.floor(Math.random() * 4000) + 1000,
}));
setIncomeData(income);

// Project Status Data
const statusData = [
{ name: 'Completed', value: Math.floor(Math.random() * 20) + 10 },
{ name: 'In Progress', value: Math.floor(Math.random() * 15) + 5 },
{ name: 'Pending', value: Math.floor(Math.random() * 10) + 2 },
{ name: 'On Hold', value: Math.floor(Math.random() * 5) + 1 },
];
setProjectStatusData(statusData);

// Client Activity Data (over months)
const clients = ['Client A', 'Client B', 'Client C'];
const activity = months.map(month => {
const entry = { month };
clients.forEach(client => {
entry[client] = Math.floor(Math.random() * 8) + 1; // Projects completed
});
return entry;
});
setClientActivityData(activity);

setLoading(false);
};

// Simulate API call
setTimeout(generateData, 1000);
}, []);

const PIE_COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#FF8042'];

if (loading) {
return (
<div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-700">
<div className="text-2xl font-semibold">Loading Reports...</div>
</div>
);
}

return (
<div className="min-h-screen bg-gray-100 p-8">
<h1 className="text-4xl font-extrabold mb-10 text-gray-800">Analytics & Reports</h1>

<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
{/* Income Report */}
<div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
<h2 className="text-2xl font-bold mb-5 text-gray-700">Monthly Income & Expenses</h2>
<div className="flex-grow">
<ResponsiveContainer width="100%" height={300}>
<BarChart data={incomeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
<XAxis dataKey="month" className="text-xs" />
<YAxis className="text-xs" />
<Tooltip cursor={{ fill: 'transparent' }} />
<Legend />
<Bar dataKey="income" fill="#82ca9d" name="Total Income" />
<Bar dataKey="expenses" fill="#ff7300" name="Total Expenses" />
</BarChart>
</ResponsiveContainer>
</div>
</div>

{/* Project Status Report */}
<div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
<h2 className="text-2xl font-bold mb-5 text-gray-700">Project Status Distribution</h2>
<div className="flex-grow flex items-center justify-center">
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
label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip />
<Legend />
</PieChart>
</ResponsiveContainer>
</div>
</div>

{/* Client Activity Report */}
<div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
<h2 className="text-2xl font-bold mb-5 text-gray-700">Client Project Activity (Monthly)</h2>
<div className="flex-grow">
<ResponsiveContainer width="100%" height={300}>
<LineChart data={clientActivityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
<XAxis dataKey="month" className="text-xs" />
<YAxis className="text-xs" />
<Tooltip />
<Legend />
<Line type="monotone" dataKey="Client A" stroke="#8884d8" activeDot={{ r: 8 }} />
<Line type="monotone" dataKey="Client B" stroke="#82ca9d" activeDot={{ r: 8 }} />
<Line type="monotone" dataKey="Client C" stroke="#ffc658" activeDot={{ r: 8 }} />
</LineChart>
</ResponsiveContainer>
</div>
</div>
</div>
</div>
);
};

export default ReportsPage;
