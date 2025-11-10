import React, { useState, useEffect } from 'react';
import {
ResponsiveContainer,
LineChart,
Line,
BarChart,
Bar,
PieChart,
Pie,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
Cell,
} from 'recharts';

const initialIncomeData = [
{ month: 'Jan', income: 4000, expenses: 2400 },
{ month: 'Feb', income: 3000, expenses: 1398 },
{ month: 'Mar', income: 5000, expenses: 2800 },
{ month: 'Apr', income: 4500, expenses: 3908 },
{ month: 'May', income: 6000, expenses: 4800 },
{ month: 'Jun', income: 5500, expenses: 3800 },
{ month: 'Jul', income: 6500, expenses: 4300 },
{ month: 'Aug', income: 7000, expenses: 5000 },
{ month: 'Sep', income: 6200, expenses: 4500 },
{ month: 'Oct', income: 7500, expenses: 5800 },
{ month: 'Nov', income: 8000, expenses: 6200 },
{ month: 'Dec', income: 7200, expenses: 5500 },
];

const initialProjectStatusData = [
{ name: 'Completed', value: 40 },
{ name: 'In Progress', value: 30 },
{ name: 'Pending', value: 20 },
{ name: 'Cancelled', value: 10 },
];

const initialClientActivityData = [
{ client: 'Alpha Corp', projects: 12, value: 120000 },
{ client: 'Beta Innovations', projects: 9, value: 90000 },
{ client: 'Gamma Solutions', projects: 7, value: 75000 },
{ client: 'Delta Systems', projects: 11, value: 110000 },
{ client: 'Epsilon Tech', projects: 8, value: 80000 },
{ client: 'Zeta Holdings', projects: 5, value: 50000 },
];

const PIE_CHART_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ReportsPage = () => {
const [incomeData, setIncomeData] = useState([]);
const [projectStatusData, setProjectStatusData] = useState([]);
const [clientActivityData, setClientActivityData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
const fetchData = setTimeout(() => {
setIncomeData(initialIncomeData);
setProjectStatusData(initialProjectStatusData);
setClientActivityData(initialClientActivityData);
setLoading(false);
}, 800);

return () => clearTimeout(fetchData);
}, []);

if (loading) {
return (
<div className="flex items-center justify-center min-h-screen bg-gray-100 text-2xl font-medium text-gray-700">
<svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
</svg>
Loading reports...
</div>
);
}

return (
<div className="p-6 bg-gray-100 min-h-screen font-sans">
<h1 className="text-4xl font-extrabold text-gray-900 mb-8 pb-4 border-b-2 border-indigo-200">
Analytics Dashboard
</h1>

<section className="bg-white p-6 rounded-xl shadow-lg mb-8 transition-all hover:shadow-xl border border-gray-200">
<h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 text-indigo-700">Monthly Financial Overview</h2>
<div className="h-80">
<ResponsiveContainer width="100%" height="100%">
<LineChart data={incomeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" tickLine={false} axisLine={false} />
<YAxis tickLine={false} axisLine={false} />
<Tooltip cursor={{ fill: 'rgba(243, 244, 246, 0.8)' }} />
<Legend verticalAlign="top" height={36} iconType="circle" />
<Line
type="monotone"
dataKey="income"
stroke="#4F46E5"
activeDot={{ r: 8 }}
strokeWidth={3}
dot={{ strokeWidth: 2, r: 4 }}
name="Income"
/>
<Line
type="monotone"
dataKey="expenses"
stroke="#EF4444"
activeDot={{ r: 8 }}
strokeWidth={3}
dot={{ strokeWidth: 2, r: 4 }}
name="Expenses"
/>
</LineChart>
</ResponsiveContainer>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
<section className="bg-white p-6 rounded-xl shadow-lg transition-all hover:shadow-xl border border-gray-200">
<h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 text-indigo-700">Project Status Distribution</h2>
<div className="h-80 flex items-center justify-center">
<ResponsiveContainer width="100%" height="100%">
<PieChart>
<Pie
data={projectStatusData}
cx="50%"
cy="50%"
labelLine={false}
outerRadius={110}
fill="#8884d8"
dataKey="value"
label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={PIE_CHART_COLORS[index % PIE_CHART_COLORS.length]} />
))}
</Pie>
<Tooltip />
<Legend iconType="circle" />
</PieChart>
</ResponsiveContainer>
</div>
</section>

<section className="bg-white p-6 rounded-xl shadow-lg transition-all hover:shadow-xl border border-gray-200">
<h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 text-indigo-700">Client Activity Volume</h2>
<div className="h-80">
<ResponsiveContainer width="100%" height="100%">
<BarChart data={clientActivityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="client" tickLine={false} axisLine={false} angle={-30} textAnchor="end" height={60} />
<YAxis tickLine={false} axisLine={false} />
<Tooltip cursor={{ fill: 'rgba(243, 244, 246, 0.8)' }} />
<Legend verticalAlign="top" height={36} iconType="circle" />
<Bar dataKey="projects" fill="#10B981" name="Number of Projects" barSize={30} />
<Bar dataKey="value" fill="#6366F1" name="Project Value" barSize={30} />
</BarChart>
</ResponsiveContainer>
</div>
</section>
</div>

<footer className="text-center text-gray-600 text-sm mt-12 pt-8 border-t border-gray-300">
<p>&copy; {new Date().getFullYear()} Reporting System. All rights reserved.</p>
</footer>
</div>
);
};

export default ReportsPage;
