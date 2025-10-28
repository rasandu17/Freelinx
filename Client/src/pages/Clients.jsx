import React, { useState } from 'react';

const ClientsPage = () => {
const [clients, setClients] = useState([
{ id: 1, name: 'John Doe', company: 'Acme Corp', contact: 'john.doe@example.com' },
{ id: 2, name: 'Jane Smith', company: 'Globex Inc', contact: 'jane.smith@example.com' },
{ id: 3, name: 'Peter Jones', company: 'Stark Industries', contact: 'peter.j@example.com' },
{ id: 4, name: 'Alice Brown', company: 'Wayne Enterprises', contact: 'alice.b@example.com' },
{ id: 5, name: 'Bob Johnson', company: 'Cyberdyne Systems', contact: 'bob.j@example.com' },
]);

const handleAddClient = () => {
// In a real application, this would typically open a modal or navigate
// to a client creation form. For this example, we'll just log an action.
console.log('Add Client button clicked!');
// Example: Add a new dummy client to demonstrate state update
// setClients(prevClients => [
//   ...prevClients,
//   { id: Date.now(), name: 'New Client', company: 'New Co.', contact: 'new@example.com' }
// ]);
};

return (
<div className="min-h-screen bg-gray-100 p-6">
<div className="max-w-7xl mx-auto">
<h1 className="text-3xl font-extrabold text-gray-900 mb-6">Clients Overview</h1>

<div className="flex justify-end mb-6">
<button
onClick={handleAddClient}
className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
>
Add Client
</button>
</div>

<div className="bg-white shadow-lg rounded-lg overflow-hidden">
<table className="min-w-full divide-y divide-gray-200">
<thead className="bg-gray-50">
<tr>
<th
scope="col"
className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
>
Name
</th>
<th
scope="col"
className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
>
Company
</th>
<th
scope="col"
className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
>
Contact Info
</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200">
{clients.map((client) => (
<tr key={client.id} className="hover:bg-gray-50">
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm font-medium text-gray-900">{client.name}</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm text-gray-900">{client.company}</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm text-gray-900">{client.contact}</div>
</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
</div>
);
};

export default ClientsPage;
