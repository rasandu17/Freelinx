import React, { useState, useEffect } from 'react';
import {
ResponsiveContainer,
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
PieChart, Pie, Cell,
BarChart, Bar
} from 'recharts';

const ReportsPage = () => {
const [reportsData, setReportsData] = useState({
income: [],
projectStatus: [],
clientActivity: [],
});
const [loading, setLoading] = useState(true);

// Recharts Pie Chart specific colors for better distinction
const PIE_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF', '#3D3D3D'];

useEffect(() => {
// Simulate fetching data from an API
const fetchReportsData = async () => {
setLoading(true);
// Simulate network delay
await new Promise(resolve => setTimeout(resolve, 1000));

const mockIncomeData = [
{ month: 'Jan', income: 4500 },
{ month: 'Feb', income: 3800 },
{ month: 'Mar', income: 5200 },
{ month: 'Apr', income: 4700 },
{ month: 'May', income: 6100 },
{ month: 'Jun', income: 5500 },
{ month: 'Jul', income: 6800 },
{ month: 'Aug', income: 7200 },
{ month: 'Sep', income: 6500 },
{ month: 'Oct', income: 7800 },
{ month: 'Nov', income: 8100 },
{ month: 'Dec', income: 7500 },
];

const mockProjectStatusData = [
{ name: 'Completed', value: 25 },
{ name: 'In Progress', value: 18 },
{ name: 'Pending', value: 10 },
{ name: 'On Hold', value: 5 },
];

const mockClientActivityData = [
{ client: 'Alpha Corp', projects: 15 },
{ client: 'Beta Innovations', projects: 10 },
{ client: 'Gamma Solutions', projects: 8 },
{ client: 'Delta Systems', projects: 6 },
{ client: 'Epsilon Tech', projects: 4 },
];

setReportsData({
income: mockIncomeData,
projectStatus: mockProjectStatusData,
clientActivity: mockClientActivityData,
});
setLoading(false);
};

fetchReportsData();
}, []); // Empty dependency array means this runs once on mount

if (loading) {
return (
<div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
<p className="ml-4 text-lg text-gray-700">Loading reports...</p>
</div>
);
}

return (
<div className="p-6 bg-gray-100 min-h-screen font-sans">
<h1 className="text-3xl font-extrabold text-gray-800 mb-8 border-b pb-4">Reports Overview</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Monthly Income Report Card */}
<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income Trend</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart data={reportsData.income} margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" className="text-sm font-medium" />
<YAxis className="text-sm font-medium" tickFormatter={(value) => `$${value}`} />
<Tooltip
cursor={{ strokeDasharray: '3 3', stroke: '#a0aec0' }}
contentStyle={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderColor: '#e2e8f0' }}
itemStyle={{ padding: '4px 0', color: '#4a5568' }}
labelStyle={{ color: '#2d3748', fontWeight: 'bold' }}
/>
<Legend verticalAlign="top" height={36} align="right" iconType="circle" />
<Line type="monotone" dataKey="income" stroke="#4a90e2" activeDot={{ r: 8, fill: '#4a90e2' }} strokeWidth={2} name="Income" />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Report Card */}
<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Current Project Status</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart>
<Pie
data={reportsData.projectStatus}
cx="50%"
cy="50%"
labelLine={false}
outerRadius={100}
fill="#8884d8"
dataKey="value"
nameKey="name"
label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
>
{reportsData.projectStatus.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip
contentStyle={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderColor: '#e2e8f0' }}
itemStyle={{ padding: '4px 0', color: '#4a5568' }}
labelStyle={{ color: '#2d3748', fontWeight: 'bold' }}
/>
<Legend iconType="circle" />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Report Card */}
<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Project Count</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart data={reportsData.clientActivity} margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis
dataKey="client"
className="text-sm font-medium"
angle={-15} // Rotate labels to prevent overlap for longer names
textAnchor="end"
height={50} // Adjust height to accommodate rotated labels
/>
<YAxis className="text-sm font-medium" allowDecimals={false} />
<Tooltip
cursor={{ fill: 'rgba(0,0,0,0.05)' }}
contentStyle={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderColor: '#e2e8f0' }}
itemStyle={{ padding: '4px 0', color: '#4a5568' }}
labelStyle={{ color: '#2d3748', fontWeight: 'bold' }}
/>
<Legend verticalAlign="top" height={36} align="right" iconType="circle" />
<Bar dataKey="projects" fill="#82ca9d" name="Projects" />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
