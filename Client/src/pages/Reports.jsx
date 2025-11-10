import React, { useState, useEffect } from 'react';
import {
ResponsiveContainer,
BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
PieChart, Pie, Cell,
AreaChart, Area
} from 'recharts';

const ReportsPage = () => {
const [loading, setLoading] = useState(true);
const [incomeData, setIncomeData] = useState([]);
const [projectStatusData, setProjectStatusData] = useState([]);
const [clientActivityData, setClientActivityData] = useState([]);

useEffect(() => {
// Simulate API call for fetching report data
setTimeout(() => {
setIncomeData([
{ month: 'Jan', income: 12000 },
{ month: 'Feb', income: 15000 },
{ month: 'Mar', income: 10000 },
{ month: 'Apr', income: 18000 },
{ month: 'May', income: 14000 },
{ month: 'Jun', income: 20000 },
{ month: 'Jul', income: 16000 },
{ month: 'Aug', income: 19000 },
{ month: 'Sep', income: 17000 },
{ month: 'Oct', income: 21000 },
{ month: 'Nov', income: 18500 },
{ month: 'Dec', income: 22000 },
]);

setProjectStatusData([
{ name: 'In Progress', value: 40 },
{ name: 'Completed', value: 30 },
{ name: 'On Hold', value: 15 },
{ name: 'Pending', value: 15 },
]);

setClientActivityData([
{ month: 'Jan', activeClients: 15, newClients: 5 },
{ month: 'Feb', activeClients: 18, newClients: 7 },
{ month: 'Mar', activeClients: 17, newClients: 6 },
{ month: 'Apr', activeClients: 20, newClients: 8 },
{ month: 'May', activeClients: 22, newClients: 9 },
{ month: 'Jun', activeClients: 25, newClients: 10 },
{ month: 'Jul', activeClients: 23, newClients: 8 },
{ month: 'Aug', activeClients: 26, newClients: 11 },
{ month: 'Sep', activeClients: 24, newClients: 9 },
{ month: 'Oct', activeClients: 28, newClients: 12 },
{ month: 'Nov', activeClients: 27, newClients: 10 },
{ month: 'Dec', activeClients: 30, newClients: 13 },
]);

setLoading(false);
}, 1500); // Simulate 1.5 second loading time
}, []);

const PIE_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

if (loading) {
return (
<div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
<p className="ml-4 text-lg text-gray-700">Loading reports...</p>
</div>
);
}

return (
<div className="min-h-screen bg-gray-100 p-6">
<h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{/* Income Chart */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
<h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Income Over Time</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={incomeData}
margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" className="text-sm text-gray-600" />
<YAxis className="text-sm text-gray-600" />
<Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="income" fill="#8884d8" name="Monthly Income" />
</BarChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
<h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Project Status Distribution</h2>
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
{
projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))
}
</Pie>
<Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
<h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Client Activity</h2>
<ResponsiveContainer width="100%" height={300}>
<AreaChart
data={clientActivityData}
margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
>
<defs>
<linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
<stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
</linearGradient>
<linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
<stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
</linearGradient>
</defs>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" className="text-sm text-gray-600" />
<YAxis className="text-sm text-gray-600" />
<Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Area type="monotone" dataKey="activeClients" stroke="#8884d8" fillOpacity={1} fill="url(#colorActive)" name="Active Clients" />
<Area type="monotone" dataKey="newClients" stroke="#82ca9d" fillOpacity={1} fill="url(#colorNew)" name="New Clients" />
</AreaChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
