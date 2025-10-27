import React, { useState } from 'react';

const SignupPage = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleNameChange = (e) => {
setName(e.target.value);
};

const handleEmailChange = (e) => {
setEmail(e.target.value);
};

const handlePasswordChange = (e) => {
setPassword(e.target.value);
};

const handleSubmit = (e) => {
e.preventDefault();
// In a real application, you would send this data to your backend for registration
console.log('Registering with:', { name, email, password });
alert(`Attempting to register user: ${name} with email: ${email}`);
// Reset form fields after submission
setName('');
setEmail('');
setPassword('');
};

return (
<div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
<h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>

<form onSubmit={handleSubmit}>
<div className="mb-4">
<label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
Name
</label>
<input
type="text"
id="name"
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
placeholder="Your Full Name"
value={name}
onChange={handleNameChange}
required
/>
</div>

<div className="mb-4">
<label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
Email
</label>
<input
type="email"
id="email"
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
placeholder="your@example.com"
value={email}
onChange={handleEmailChange}
required
/>
</div>

<div className="mb-6">
<label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
Password
</label>
<input
type="password"
id="password"
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
placeholder="********"
value={password}
onChange={handlePasswordChange}
required
/>
</div>

<button
type="submit"
className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full transition duration-200 ease-in-out"
>
Register
</button>
</form>

<p className="text-center text-gray-600 text-sm mt-4">
Already have an account?
<a href="/login" className="text-blue-600 hover:text-blue-800 ml-1 font-bold">
Login here
</a>
</p>
</div>
</div>
);
};

export default SignupPage;
