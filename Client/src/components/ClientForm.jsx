import React, { useState } from 'react';

function ClientForm() {
const [formData, setFormData] = useState({
name: '',
company: '',
email: '',
phone: '',
});

const handleChange = (e) => {
const { name, value } = e.target;
setFormData((prevData) => ({
...prevData,
[name]: value,
}));
};

const handleSubmit = (e) => {
e.preventDefault();
console.log('Client Form Data Submitted:', formData);
// In a real application, you would send this data to a backend or global state management
alert('Form submitted! Check console for data.');
// Optionally reset form fields after submission
// setFormData({ name: '', company: '', email: '', phone: '' });
};

return (
<form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6">
<div className="text-2xl font-bold text-gray-800 mb-6 text-center">New Client Information</div>

{/* Client Name */}
<div>
<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
Client Name
</label>
<input
type="text"
id="name"
name="name"
value={formData.name}
onChange={handleChange}
required
className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
placeholder="John Doe"
/>
</div>

{/* Company */}
<div>
<label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
Company
</label>
<input
type="text"
id="company"
name="company"
value={formData.company}
onChange={handleChange}
className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
placeholder="Acme Corp"
/>
</div>

{/* Email */}
<div>
<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
Email
</label>
<input
type="email"
id="email"
name="email"
value={formData.email}
onChange={handleChange}
required
className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
placeholder="john.doe@example.com"
/>
</div>

{/* Phone */}
<div>
<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
Phone
</label>
<input
type="tel"
id="phone"
name="phone"
value={formData.phone}
onChange={handleChange}
// Basic pattern for 10 digits for browser-side validation. Adjust as needed for international formats.
pattern="[0-9]{10}"
title="Phone number must be 10 digits (e.g., 1234567890)"
className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
placeholder="e.g., 1234567890"
/>
</div>

{/* Submit Button */}
<div className="flex justify-end">
<button
type="submit"
className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
>
Add Client
</button>
</div>
</form>
);
}

export default ClientForm;
