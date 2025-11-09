import React, { useState, useEffect } from 'react';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
PieChart, Pie, Cell, Sector, BarChart, Bar
} from 'recharts';

// Dummy data for the charts
const incomeData = [
{ month: 'Jan', income: 4000, expenses: 2400 },
{ month: 'Feb', income: 3000, expenses: 1398 },
{ month: 'Mar', income: 5000, expenses: 2800 },
{ month: 'Apr', income: 4780, expenses: 3908 },
{ month: 'May', income: 5890, expenses: 4800 },
{ month: 'Jun', income: 6390, expenses: 4300 },
];

const projectStatusData = [
{ name: 'Completed', value: 25 },
{ name: 'In Progress', value: 18 },
{ name: 'Pending', value: 10 },
{ name: 'Cancelled', value: 5 },
];

const clientActivityData = [
{ client: 'Client A', projects: 12 },
{ client: 'Client B', projects: 8 },
{ client: 'Client C', projects: 15 },
{ client: 'Client D', projects: 7 },
{ client: 'Client E', projects: 9 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderActiveShape = (props) => {
const RADIAN = Math.PI / 180;
const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
const sin = Math.sin(-RADIAN * midAngle);
const cos = Math.cos(-RADIAN * midAngle);
const sx = cx + (outerRadius + 10) * cos;
const sy = cy + (outerRadius + 10) * sin;
const mx = cx + (outerRadius + 30) * cos;
const my = cy + (outerRadius + 30) * sin;
const ex = mx + (cos >= 0 ? 1 : -1) * 22;
const ey = my;
const textAnchor = cos >= 0 ? 'start' : 'end';

return (
<g>
<text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
{payload.name}
</text>
<Sector
cx={cx}
cy={cy}
innerRadius={innerRadius}
outerRadius={outerRadius}
startAngle={startAngle}
endAngle={endAngle}
fill={fill}
/>
<Sector
cx={cx}
cy={cy}
startAngle={startAngle}
endAngle={endAngle}
innerRadius={outerRadius + 6}
outerRadius={outerRadius + 10}
fill={fill}
/>
<path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
<circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
<text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Projects ${value}`}</text>
<text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
{`(Rate ${(percent * 100).toFixed(2)}%)`}
</text>
</g>
);
};

const ReportsPage = () => {
const [activePieIndex, setActivePieIndex] = useState(0);

const onPieEnter = (_, index) => {
setActivePieIndex(index);
};

return (
<div className="min-h-screen bg-gray-100 p-8">
<h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">Reports Dashboard</h1>

<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">

{/* Income Chart */}
<div className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center justify-center">
<h2 className="text-2xl font-semibold text-gray-800 mb-4">Monthly Income & Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
contentStyle={{ backgroundColor: '#f9fafb', borderColor: '#e0e0e0', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
labelStyle={{ fontWeight: 'bold', color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '16px' }} />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
<Line type="monotone" dataKey="expenses" stroke="#82ca9d" strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Chart */}
<div className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center justify-center">
<h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Status Overview</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
<Pie
activeIndex={activePieIndex}
activeShape={renderActiveShape}
data={projectStatusData}
cx="50%"
cy="50%"
innerRadius={60}
outerRadius={80}
fill="#8884d8"
dataKey="value"
onMouseEnter={onPieEnter}
>
{projectStatusData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))}
</Pie>
<Tooltip
contentStyle={{ backgroundColor: '#f9fafb', borderColor: '#e0e0e0', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
labelStyle={{ fontWeight: 'bold', color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '16px' }} />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center justify-center">
<h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects Per Client</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={clientActivityData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="client" className="text-sm" />
<YAxis className="text-sm" />
<Tooltip
contentStyle={{ backgroundColor: '#f9fafb', borderColor: '#e0e0e0', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
labelStyle={{ fontWeight: 'bold', color: '#333' }}
/>
<Legend wrapperStyle={{ paddingTop: '16px' }} />
<Bar dataKey="projects" fill="#8884d8" radius={[4, 4, 0, 0]} />
</BarChart>
</ResponsiveContainer>
</div>

</div>
</div>
);
};

export default ReportsPage;
