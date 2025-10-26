import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const LoginPage = () => {
return (
<div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
<div className="text-center bg-white p-8 rounded-lg shadow-xl">
<h1 className="text-4xl font-extrabold text-blue-600 mb-4">Login Page</h1>
<p className="text-lg text-gray-700">Access your account.</p>
</div>
</div>
);
};

const SignupPage = () => {
return (
<div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
<div className="text-center bg-white p-8 rounded-lg shadow-xl">
<h1 className="text-4xl font-extrabold text-green-600 mb-4">Signup Page</h1>
<p className="text-lg text-gray-700">Create a new account.</p>
</div>
</div>
);
};

const DashboardPage = () => {
return (
<div className="min-h-screen bg-gray-50 p-8">
<div className="bg-white p-8 rounded-lg shadow-xl">
<h1 className="text-4xl font-extrabold text-gray-800 mb-4">Dashboard</h1>
<p className="text-lg text-gray-600">Welcome to your dashboard!</p>
</div>
</div>
);
};

const ClientsPage = () => {
return (
<div className="min-h-screen bg-white p-8">
<div className="bg-gray-50 p-8 rounded-lg shadow-xl">
<h1 className="text-4xl font-extrabold text-purple-600 mb-4">Clients</h1>
<p className="text-lg text-gray-600">Manage your clients here.</p>
</div>
</div>
);
};

const ProjectsPage = () => {
return (
<div className="min-h-screen bg-white p-8">
<div className="bg-gray-50 p-8 rounded-lg shadow-xl">
<h1 className="text-4xl font-extrabold text-orange-600 mb-4">Projects</h1>
<p className="text-lg text-gray-600">Oversee your projects.</p>
</div>
</div>
);
};

const InvoicesPage = () => {
return (
<div className="min-h-screen bg-white p-8">
<div className="bg-gray-50 p-8 rounded-lg shadow-xl">
<h1 className="text-4xl font-extrabold text-pink-600 mb-4">Invoices</h1>
<p className="text-lg text-gray-600">Handle billing and payments.</p>
</div>
</div>
);
};

const ReportsPage = () => {
return (
<div className="min-h-screen bg-white p-8">
<div className="bg-gray-50 p-8 rounded-lg shadow-xl">
<h1 className="text-4xl font-extrabold text-teal-600 mb-4">Reports</h1>
<p className="text-lg text-gray-600">View your business reports.</p>
</div>
</div>
);
};

const SettingsPage = () => {
return (
<div className="min-h-screen bg-white p-8">
<div className="bg-gray-50 p-8 rounded-lg shadow-xl">
<h1 className="text-4xl font-extrabold text-gray-700 mb-4">Settings</h1>
<p className="text-lg text-gray-600">Configure your application.</p>
</div>
</div>
);
};

const App = () => {
return (
<BrowserRouter>
<Routes>
<Route path="/login" element={<LoginPage />} />
<Route path="/signup" element={<SignupPage />} />
<Route path="/dashboard" element={<DashboardPage />} />
<Route path="/" element={<DashboardPage />} /> {/* Default route */}
<Route path="/clients" element={<ClientsPage />} />
<Route path="/projects" element={<ProjectsPage />} />
<Route path="/invoices" element={<InvoicesPage />} />
<Route path="/reports" element={<ReportsPage />} />
<Route path="/settings" element={<SettingsPage />} />
{/* Optional: Add a 404 Not Found page */}
<Route
path="*"
element={
<div className="min-h-screen bg-red-100 flex items-center justify-center p-4">
<div className="text-center bg-white p-8 rounded-lg shadow-xl">
<h1 className="text-4xl font-extrabold text-red-600 mb-4">404 - Page Not Found</h1>
<p className="text-lg text-gray-700">The page you are looking for does not exist.</p>
</div>
</div>
}
/>
</Routes>
</BrowserRouter>
);
};

export default App;
