import React, { useState, useEffect } from 'react';
import {
ResponsiveContainer,
LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

const PIE_COLORS = ['#0f766e', '#10b981', '#fcd34d', '#ef4444']; // Teal-700, Green-500, Yellow-300, Red-500

const ReportsPage = () => {
const [incomeData, setIncomeData] = useState([]);
const [projectStatusData, setProjectStatusData] = useState([]);
const [clientActivityData, setClientActivityData] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
// Simulate fetching data from an API
const fetchReportsData = setTimeout(() => {
const initialIncomeData = [
{ month: 'Jan', income: 4000, expenses: 2400 },
{ month: 'Feb', income: 3000, expenses: 1398 },
{ month: 'Mar', income: 5000, expenses: 2800 },
{ month: 'Apr', income: 4780, expenses: 3908 },
{ month: 'May', income: 5890, expenses: 4800 },
{ month: 'Jun', income: 6390, expenses: 3800 },
{ month: 'Jul', income: 5900, expenses: 3500 },
{ month: 'Aug', income: 6500, expenses: 4200 },
];

const initialProjectStatusData = [
{ name: 'Completed', value: 70 },
{ name: 'In Progress', value: 30 },
{ name: 'Pending', value: 20 },
{ name: 'On Hold', value: 10 },
];

const initialClientActivityData = [
{ quarter: 'Q1', newClients: 30, activeClients: 70 },
{ quarter: 'Q2', newClients: 45, activeClients: 85 },
{ quarter: 'Q3', newClients: 60, activeClients: 90 },
{ quarter: 'Q4', newClients: 50, activeClients: 80 },
];

setIncomeData(initialIncomeData);
setProjectStatusData(initialProjectStatusData);
setClientActivityData(initialClientActivityData);
setIsLoading(false);
}, 1000); // Simulate 1 second network delay

return () => clearTimeout(fetchReportsData);
}, []);

if (isLoading) {
return (
<div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-700 text-xl font-medium">
Loading reports...
</div>
);
}

return (
<div className="p-6 min-h-screen bg-gray-100">
<h2 className="text-3xl font-bold text-gray-800 mb-8">Reports Dashboard</h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Income vs. Expenses Report */}
<div className="bg-white p-6 rounded-lg shadow-md">
<h3 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income vs. Expenses</h3>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" className="text-sm text-gray-600" />
<YAxis className="text-sm text-gray-600" />
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ fontWeight: 'bold', color: '#333' }}
itemStyle={{ color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} activeDot={{ r: 8 }} name="Income" />
<Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} activeDot={{ r: 8 }} name="Expenses" />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Report */}
<div className="bg-white p-6 rounded-lg shadow-md">
<h3 className="text-xl font-semibold text-gray-700 mb-4">Project Status Overview</h3>
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
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ fontWeight: 'bold', color: '#333' }}
itemStyle={{ color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Report */}
<div className="bg-white p-6 rounded-lg shadow-md">
<h3 className="text-xl font-semibold text-gray-700 mb-4">Quarterly Client Activity</h3>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="quarter" className="text-sm text-gray-600" />
<YAxis className="text-sm text-gray-600" />
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ fontWeight: 'bold', color: '#333' }}
itemStyle={{ color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="newClients" fill="#3b82f6" name="New Clients" /> {/* Blue-500 */}
<Bar dataKey="activeClients" fill="#a855f7" name="Active Clients" /> {/* Purple-500 */}
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
