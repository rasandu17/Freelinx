import React, { useState, useEffect } from 'react';
import {
LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';

const ReportsPage = () => {
const [incomeData, setIncomeData] = useState([]);
const [projectStatusData, setProjectStatusData] = useState([]);
const [clientActivityData, setClientActivityData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
const fetchReportData = async () => {
try {
// Simulate API call with a delay
await new Promise(resolve => setTimeout(resolve, 800));

const fetchedIncomeData = [
{ month: 'Jan', income: 4000 },
{ month: 'Feb', income: 3000 },
{ month: 'Mar', income: 5000 },
{ month: 'Apr', income: 4500 },
{ month: 'May', income: 6000 },
{ month: 'Jun', income: 5500 },
{ month: 'Jul', income: 7000 },
{ month: 'Aug', income: 6500 },
{ month: 'Sep', income: 8000 },
{ month: 'Oct', income: 7500 },
{ month: 'Nov', income: 9000 },
{ month: 'Dec', income: 8500 },
];

const fetchedProjectStatusData = [
{ name: 'Completed', value: 30, color: '#82ca9d' },
{ name: 'In Progress', value: 20, color: '#8884d8' },
{ name: 'Pending', value: 10, color: '#ffc658' },
{ name: 'On Hold', value: 5, color: '#ff7300' },
];

const fetchedClientActivityData = [
{ client: 'Client A', projects: 12 },
{ client: 'Client B', projects: 8 },
{ client: 'Client C', projects: 15 },
{ client: 'Client D', projects: 5 },
{ client: 'Client E', projects: 10 },
];

setIncomeData(fetchedIncomeData);
setProjectStatusData(fetchedProjectStatusData);
setClientActivityData(fetchedClientActivityData);
} catch (err) {
setError("Failed to load report data. Please try again.");
console.error("Error fetching report data:", err);
} finally {
setLoading(false);
}
};

fetchReportData();
}, []);

if (loading) {
return (
<div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
<p className="text-lg text-gray-700 font-medium">Loading reports...</p>
</div>
);
}

if (error) {
return (
<div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
<p className="text-lg text-red-600 font-medium">{error}</p>
</div>
);
}

return (
<div className="p-6 bg-gray-100 min-h-screen">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Income Report Card */}
<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart data={incomeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" tickFormatter={(value) => value.substring(0, 3)} />
<YAxis tickFormatter={(value) => `$${value/1000}k`} />
<Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Report Card */}
<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Project Status Distribution</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart>
<Pie
data={projectStatusData}
cx="50%"
cy="50%"
outerRadius={100}
fill="#8884d8"
dataKey="value"
labelLine={false}
label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={entry.color} />
))}
</Pie>
<Tooltip formatter={(value, name, props) => [`${value} projects`, props.payload.name]} />
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Report Card */}
<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Activity (Active Projects)</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart data={clientActivityData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="client" />
<YAxis />
<Tooltip formatter={(value) => `${value} projects`} />
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="projects" fill="#82ca9d" barSize={30} />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
