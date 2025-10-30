import React, { useState } from 'react';

const SettingsPage = () => {
const [userName, setUserName] = useState('John Doe');
const [userEmail, setUserEmail] = useState('john.doe@example.com');
const [theme, setTheme] = useState('system');
const [receiveNotifications, setReceiveNotifications] = useState(true);

const handleSubmit = (e) => {
e.preventDefault();
// In a real application, you would send this data to a backend API
console.log('Saving settings:', {
userName,
userEmail,
theme,
receiveNotifications,
});
alert('Settings saved successfully!');
};

return (
<div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 md:p-10">
<div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
<h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 border-b pb-4 border-gray-200 dark:border-gray-700">
Settings
</h1>

<form onSubmit={handleSubmit} className="space-y-8">
{/* Profile Section */}
<section>
<h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
Profile Information
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label
htmlFor="userName"
className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
>
Full Name
</label>
<input
type="text"
id="userName"
className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition duration-150 ease-in-out sm:text-sm"
value={userName}
onChange={(e) => setUserName(e.target.value)}
placeholder="Your full name"
required
/>
</div>
<div>
<label
htmlFor="userEmail"
className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
>
Email Address
</label>
<input
type="email"
id="userEmail"
className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition duration-150 ease-in-out sm:text-sm"
value={userEmail}
onChange={(e) => setUserEmail(e.target.value)}
placeholder="your@example.com"
required
/>
</div>
</div>
</section>

{/* Preferences Section */}
<section>
<h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
Preferences
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label
htmlFor="theme"
className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
>
Theme
</label>
<select
id="theme"
className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition duration-150 ease-in-out sm:text-sm"
value={theme}
onChange={(e) => setTheme(e.target.value)}
>
<option value="light">Light</option>
<option value="dark">Dark</option>
<option value="system">System</option>
</select>
</div>

<div className="flex items-center pt-8 md:pt-0">
<input
id="receiveNotifications"
type="checkbox"
className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:checked:bg-blue-600 transition duration-150 ease-in-out"
checked={receiveNotifications}
onChange={(e) => setReceiveNotifications(e.target.checked)}
/>
<label
htmlFor="receiveNotifications"
className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300"
>
Receive email notifications
</label>
</div>
</div>
</section>

{/* Save Button */}
<div className="flex justify-end pt-6 border-t border-gray-200 dark:border-gray-700">
<button
type="submit"
className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out dark:focus:ring-offset-gray-800"
>
Save Changes
</button>
</div>
</form>
</div>
</div>
);
};

export default SettingsPage;
