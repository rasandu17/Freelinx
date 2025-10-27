import React, { useState } from 'react';

const LoginPage = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleEmailChange = (e) => {
setEmail(e.target.value);
};

const handlePasswordChange = (e) => {
setPassword(e.target.value);
};

const handleSubmit = (e) => {
e.preventDefault();
// In a real application, you would send email and password to an API here
console.log('Login attempt:', { email, password });
// Example: alert('Login functionality not implemented yet!');
};

return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
<div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
<h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Welcome Back!</h2>
<form onSubmit={handleSubmit} className="space-y-6">
<div>
<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
<input
type="email"
id="email"
name="email"
value={email}
onChange={handleEmailChange}
required
className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 transition duration-150 ease-in-out"
placeholder="you@example.com"
aria-label="Email Address"
/>
</div>
<div>
<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
<input
type="password"
id="password"
name="password"
value={password}
onChange={handlePasswordChange}
required
className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 transition duration-150 ease-in-out"
placeholder="••••••••"
aria-label="Password"
/>
</div>
<button
type="submit"
className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
>
Log In
</button>
</form>
<div className="mt-6 text-center text-sm">
<a href="#" className="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</a>
</div>
</div>
</div>
);
};

export default LoginPage;
