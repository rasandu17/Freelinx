import React from 'react';
import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer,
} from 'recharts';

const data = [
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

const CustomTooltip = ({ active, payload, label }) => {
if (active && payload && payload.length) {
return (
<div className="p-3 bg-white border border-gray-200 shadow-lg rounded-md text-sm">
<p className="font-semibold text-gray-800 mb-1">{`Month: ${label}`}</p>
<p className="text-gray-700">{`Income: $${payload[0].value.toLocaleString()}`}</p>
</div>
);
}

return null;
};

const MonthlyIncomeChart = () => {
return (
<div className="w-full h-80 p-4 bg-white rounded-lg shadow-md flex flex-col items-center justify-center">
<h2 className="text-xl font-semibold text-gray-800 mb-4">Monthly Income Overview</h2>
<ResponsiveContainer width="100%" height="100%">
<LineChart
data={data}
margin={{
top: 5,
right: 30,
left: 20,
bottom: 5,
}}
>
<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
<XAxis dataKey="month" tickLine={false} axisLine={{ stroke: '#e0e0e0' }} tick={{ fill: '#6b7280', fontSize: 12 }} />
<YAxis
tickFormatter={(value) => `$${value.toLocaleString()}`}
tickLine={false}
axisLine={{ stroke: '#e0e0e0' }}
tick={{ fill: '#6b7280', fontSize: 12 }}
label={{ value: 'Income', angle: -90, position: 'insideLeft', fill: '#6b7280', dx: -10 }}
/>
<Tooltip content={<CustomTooltip />} />
<Line
type="monotone"
dataKey="income"
stroke="#4f46e5"
activeDot={{ r: 8, fill: '#4f46e5', stroke: '#c7d2fe', strokeWidth: 2 }}
strokeWidth={2}
/>
</LineChart>
</ResponsiveContainer>
</div>
);
};

export default MonthlyIncomeChart;
