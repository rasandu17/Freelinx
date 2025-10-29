import React, { useState, useEffect } from 'react';

const InvoicesPage = () => {
const [invoices, setInvoices] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
const fetchInvoices = async () => {
try {
// Simulate API call
await new Promise(resolve => setTimeout(resolve, 500)); 
const dummyInvoices = [
{ id: 'INV-001', client: 'Acme Corp', date: '2023-01-15', amount: 1250.00 },
{ id: 'INV-002', client: 'Globex Inc', date: '2023-01-20', amount: 800.50 },
{ id: 'INV-003', client: 'Soylent Corp', date: '2023-02-01', amount: 3200.00 },
{ id: 'INV-004', client: 'Initech', date: '2023-02-10', amount: 450.75 },
{ id: 'INV-005', client: 'Umbrella Corp', date: '2023-02-15', amount: 1800.00 },
{ id: 'INV-006', client: 'Stark Industries', date: '2023-02-28', amount: 5000.00 },
{ id: 'INV-007', client: 'Wayne Enterprises', date: '2023-03-05', amount: 210.25 },
{ id: 'INV-008', client: 'Cyberdyne Systems', date: '2023-03-12', amount: 950.00 },
{ id: 'INV-009', client: 'Weyland-Yutani', date: '2023-03-20', amount: 1500.00 },
{ id: 'INV-010', client: 'Tyrell Corporation', date: '2023-03-25', amount: 750.00 },
];
setInvoices(dummyInvoices);
} catch (err) {
setError('Failed to fetch invoices.');
} finally {
setLoading(false);
}
};

fetchInvoices();
}, []);

if (loading) {
return (
<div className="container mx-auto p-6 text-center text-gray-700">
Loading invoices...
</div>
);
}

if (error) {
return (
<div className="container mx-auto p-6 text-center text-red-600">
Error: {error}
</div>
);
}

return (
<div className="container mx-auto p-6">
<h1 className="text-3xl font-bold text-gray-800 mb-8">Invoices</h1>

<div className="overflow-x-auto bg-white shadow-md rounded-lg">
<table className="min-w-full border-collapse text-left">
<thead>
<tr>
<th className="py-3 px-4 bg-gray-100 font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
Invoice Number
</th>
<th className="py-3 px-4 bg-gray-100 font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
Client
</th>
<th className="py-3 px-4 bg-gray-100 font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
Date
</th>
<th className="py-3 px-4 bg-gray-100 font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200 text-right">
Amount
</th>
</tr>
</thead>
<tbody>
{invoices.length > 0 ? (
invoices.map((invoice) => (
<tr key={invoice.id} className="hover:bg-gray-50 transition-colors duration-200">
<td className="py-3 px-4 border-b border-gray-200 whitespace-nowrap">
{invoice.id}
</td>
<td className="py-3 px-4 border-b border-gray-200 whitespace-nowrap">
{invoice.client}
</td>
<td className="py-3 px-4 border-b border-gray-200 whitespace-nowrap">
{new Date(invoice.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
</td>
<td className="py-3 px-4 border-b border-gray-200 whitespace-nowrap text-right">
{invoice.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
</td>
</tr>
))
) : (
<tr>
<td colSpan="4" className="py-8 px-4 text-center text-gray-500">
No invoices found.
</td>
</tr>
)}
</tbody>
</table>
</div>
</div>
);
};

export default InvoicesPage;
