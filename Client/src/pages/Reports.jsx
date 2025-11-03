import React, { useState, useEffect } from 'react';
import {
ResponsiveContainer,
BarChart,
PieChart,
LineChart,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
Bar,
Pie,
Line,
Cell
} from 'recharts';

const mockIncomeData = [
{ month: 'Jan', income: 4000 },
{ month: 'Feb', income: 3000 },
{ month: 'Mar', income: 5000 },
{ month: 'Apr', income: 4500 },
{ month: 'May', income: 6000 },
{ month: 'Jun', income: 5500 },
{ month: 'Jul', income: 6500 },
{ month: 'Aug', income: 7000 },
{ month: 'Sep', income: 6200 },
{ month: 'Oct', income: 7500 },
{ month: 'Nov', income: 8000 },
{ month: 'Dec', income: 7800 },
];

const mockProjectStatusData = [
{ name: 'Completed', value: 12 },
{ name: 'In Progress', value: 8 },
{ name: 'Pending', value: 5 },
{ name: 'On Hold', value: 3 },
];

const mockClientActivityData = [
{ client: 'Alpha Corp', projects: 7 },
{ client: 'Beta Innovations', projects: 5 },
{ client: 'Gamma Solutions', projects: 9 },
{ client: 'Delta Systems', projects: 4 },
{ client: 'Epsilon Tech', projects: 6 },
];

const PIE_COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#FF8042'];

function ReportsPage() {
const [incomeData, setIncomeData] = useState([]);
const [projectStatusData, setProjectStatusData] = useState([]);
const [clientActivityData, setClientActivityData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
const fetchData = async () => {
try {
setLoading(true);
await new Promise(resolve => setTimeout(resolve, 1000)); 
setIncomeData(mockIncomeData);
setProjectStatusData(mockProjectStatusData);
setClientActivityData(mockClientActivityData);
setError(null);
} catch (err) {
setError('Failed to load reports data.');
console.error(err);
} finally {
setLoading(false);
}
};

fetchData();
}, []);

if (loading) {
return (
<div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
<div className="text-xl font-semibold text-gray-700">Loading reports...</div>
</div>
);
}

if (error) {
return (
<div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
<div className="text-xl font-semibold text-red-600">{error}</div>
</div>
);
}

return (
<div className="min-h-screen bg-gray-100 p-6">
<h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Reports Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ color: '#333' }}
itemStyle={{ color: '#666' }}
formatter={(value) => `$${value.toLocaleString()}`}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} name="Income" />
</LineChart>
</ResponsiveContainer>
</div>

<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Project Status Distribution</h2>
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
<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
))}
</Pie>
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ color: '#333' }}
itemStyle={{ color: '#666' }}
formatter={(value, name) => [`${value} projects`, name]}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
</PieChart>
</ResponsiveContainer>
</div>

<div className="bg-white rounded-lg shadow-md p-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Project Activity</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="client" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
labelStyle={{ color: '#333' }}
itemStyle={{ color: '#666' }}
formatter={(value) => `${value} projects`}
/>
<Legend wrapperStyle={{ paddingTop: '10px' }} />
<Bar dataKey="projects" fill="#82ca9d" name="Projects" barSize={30} />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
}

export default ReportsPage;
