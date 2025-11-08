import React from 'react';
import {
LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area,
XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Sector, Cell
} from 'recharts';

// Mock Data for Charts
const incomeData = [
{ name: 'Jan', income: 4000, expenses: 2400 },
{ name: 'Feb', income: 3000, expenses: 1398 },
{ name: 'Mar', income: 2000, expenses: 9800 },
{ name: 'Apr', income: 2780, expenses: 3908 },
{ name: 'May', income: 1890, expenses: 4800 },
{ name: 'Jun', income: 2390, expenses: 3800 },
{ name: 'Jul', income: 3490, expenses: 4300 },
{ name: 'Aug', income: 4200, expenses: 2100 },
{ name: 'Sep', income: 3800, expenses: 2900 },
{ name: 'Oct', income: 4500, expenses: 2500 },
{ name: 'Nov', income: 3900, expenses: 3100 },
{ name: 'Dec', income: 5000, expenses: 2800 },
];

const projectStatusData = [
{ name: 'Completed', value: 400 },
{ name: 'In Progress', value: 300 },
{ name: 'Pending', value: 300 },
{ name: 'On Hold', value: 200 },
{ name: 'Cancelled', value: 100 },
];

const clientActivityData = [
{ name: 'Wk 1', newClients: 10, returningClients: 15 },
{ name: 'Wk 2', newClients: 8, returningClients: 18 },
{ name: 'Wk 3', newClients: 12, returningClients: 12 },
{ name: 'Wk 4', newClients: 15, returningClients: 20 },
{ name: 'Wk 5', newClients: 7, returningClients: 16 },
{ name: 'Wk 6', newClients: 11, returningClients: 19 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A100F8'];

const renderActiveShape = (props) => {
const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;

return (
<g>
<text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} className="text-sm font-bold">{payload.name}</text>
<Sector
cx={cx}
cy={cy}
innerRadius={innerRadius}
outerRadius={outerRadius + 10}
startAngle={startAngle}
endAngle={endAngle}
fill={fill}
/>
<Sector
cx={cx}
cy={cy}
startAngle={startAngle}
endAngle={endAngle}
innerRadius={outerRadius + 12}
outerRadius={outerRadius + 14}
fill={fill}
/>
<text x={cx} y={cy + 18} textAnchor="middle" fill="#333" className="text-xs">{`Value: ${value}`}</text>
<text x={cx} y={cy + 32} textAnchor="middle" fill="#333" className="text-xs">{`(Rate ${ (percent * 100).toFixed(2) }%)`}</text>
</g>
);
};

const ReportsPage = () => {
const [pieActiveIndex, setPieActiveIndex] = React.useState(0);

const onPieEnter = (_, index) => {
setPieActiveIndex(index);
};

return (
<div className="p-6 bg-gray-100 min-h-screen">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Analytics & Reports</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Income Overview Chart */}
<div className="bg-white p-6 rounded-lg shadow-md">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Income vs. Expenses</h2>
<ResponsiveContainer width="100%" height={300}>
<LineChart
data={incomeData}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Legend />
<Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} />
<Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
</LineChart>
</ResponsiveContainer>
</div>

{/* Project Status Distribution Chart */}
<div className="bg-white p-6 rounded-lg shadow-md">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Project Status Distribution</h2>
<ResponsiveContainer width="100%" height={300}>
<PieChart>
<Pie
activeIndex={pieActiveIndex}
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
<Tooltip />
<Legend />
</PieChart>
</ResponsiveContainer>
</div>

{/* Client Activity Chart */}
<div className="bg-white p-6 rounded-lg shadow-md">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Client Acquisition & Retention</h2>
<ResponsiveContainer width="100%" height={300}>
<AreaChart
data={clientActivityData}
margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Legend />
<Area type="monotone" dataKey="newClients" stackId="1" stroke="#8884d8" fill="#8884d8" />
<Area type="monotone" dataKey="returningClients" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
</AreaChart>
</ResponsiveContainer>
</div>
</div>

{/* Another Chart Example: Daily Sales Bar Chart */}
<div className="mt-6 bg-white p-6 rounded-lg shadow-md">
<h2 className="text-xl font-semibold text-gray-700 mb-4">Daily Sales Volume</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart
data={[
{ name: 'Mon', sales: 3000 },
{ name: 'Tue', sales: 4500 },
{ name: 'Wed', sales: 2500 },
{ name: 'Thu', sales: 4000 },
{ name: 'Fri', sales: 5500 },
{ name: 'Sat', sales: 6000 },
{ name: 'Sun', sales: 2000 },
]}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Legend />
<Bar dataKey="sales" fill="#ffc658" />
</BarChart>
</ResponsiveContainer>
</div>
</div>
);
};

export default ReportsPage;
