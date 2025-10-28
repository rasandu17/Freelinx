import React, { useState } from 'react';

const ProjectsPage = () => {
const [projects] = useState([
{ id: 1, name: 'Website Redesign', client: 'Acme Corp', deadline: '2023-12-31', status: 'In Progress' },
{ id: 2, name: 'Mobile App Development', client: 'Globex Inc', deadline: '2024-03-15', status: 'Pending' },
{ id: 3, name: 'API Integration', client: 'Stark Industries', deadline: '2023-11-01', status: 'Completed' },
{ id: 4, name: 'CRM Customization', client: 'Wayne Enterprises', deadline: '2024-01-20', status: 'On Hold' },
{ id: 5, name: 'Cloud Migration', client: 'Cyberdyne Systems', deadline: '2024-06-30', status: 'In Progress' },
{ id: 6, name: 'Data Analytics Dashboard', client: 'Omni Consumer Products', deadline: '2023-10-15', status: 'Completed' },
]);

const getStatusClasses = (status) => {
switch (status) {
case 'Completed':
return 'bg-green-100 text-green-800';
case 'In Progress':
return 'bg-blue-100 text-blue-800';
case 'Pending':
return 'bg-yellow-100 text-yellow-800';
case 'On Hold':
return 'bg-red-100 text-red-800';
default:
return 'bg-gray-100 text-gray-800';
}
};

return (
<div className="min-h-screen bg-gray-50 p-6">
<div className="max-w-7xl mx-auto">
<h1 className="text-3xl font-bold text-gray-800 mb-6">Projects</h1>

<div className="bg-white shadow-md rounded-lg overflow-hidden">
<div className="overflow-x-auto">
<table className="min-w-full divide-y divide-gray-200">
<thead className="bg-gray-50">
<tr>
<th
scope="col"
className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
>
Project Name
</th>
<th
scope="col"
className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
>
Client
</th>
<th
scope="col"
className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
>
Deadline
</th>
<th
scope="col"
className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
>
Status
</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200">
{projects.map((project) => (
<tr key={project.id} className="hover:bg-gray-50">
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
{project.name}
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
{project.client}
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
{project.deadline}
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
<span
className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(
project.status
)}`}
>
{project.status}
</span>
</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
</div>
</div>
);
};

export default ProjectsPage;
