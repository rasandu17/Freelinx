import React, { useState } from 'react';

const AddInvoiceModal = ({ isOpen, onClose, onSave }) => {
const [client, setClient] = useState('');
const [amount, setAmount] = useState('');
const [date, setDate] = useState('');

const clients = [
{ id: '1', name: 'Acme Corp' },
{ id: '2', name: 'Globex Inc.' },
{ id: '3', name: 'Soylent Corp' },
{ id: '4', name: 'Cyberdyne Systems' },
];

const handleSubmit = (e) => {
e.preventDefault();
if (client && amount && date) {
onSave({ client, amount: parseFloat(amount), date });
setClient('');
setAmount('');
setDate('');
onClose();
} else {
// In a real application, you'd show a more user-friendly validation message.
alert('Please fill in all fields.');
}
};

if (!isOpen) return null;

return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
<div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-xl">
<button
onClick={onClose}
className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-full p-1"
aria-label="Close modal"
>
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>
</button>

<h2 className="mb-6 text-2xl font-bold text-gray-800">Add New Invoice</h2>

<form onSubmit={handleSubmit}>
<div className="mb-4">
<label htmlFor="client" className="block text-sm font-medium text-gray-700 mb-1">Client</label>
<select
id="client"
name="client"
value={client}
onChange={(e) => setClient(e.target.value)}
className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
required
>
<option value="">Select a client</option>
{clients.map((c) => (
<option key={c.id} value={c.name}>{c.name}</option>
))}
</select>
</div>

<div className="mb-4">
<label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
<input
type="number"
id="amount"
name="amount"
value={amount}
onChange={(e) => setAmount(e.target.value)}
step="0.01"
min="0"
className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
placeholder="e.g., 1200.50"
required
/>
</div>

<div className="mb-6">
<label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
<input
type="date"
id="date"
name="date"
value={date}
onChange={(e) => setDate(e.target.value)}
className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
required
/>
</div>

<div className="flex justify-end space-x-3">
<button
type="button"
onClick={onClose}
className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
Cancel
</button>
<button
type="submit"
className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
Add Invoice
</button>
</div>
</form>
</div>
</div>
);
};

export default AddInvoiceModal;
