<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
<div class="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
<h2 class="text-3xl font-extrabold text-center text-gray-900 mb-8">Login to Your Account</h2>
<form class="space-y-6" action="#" method="POST">
<div>
<label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
<div class="mt-1">
<input id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out">
</div>
</div>

<div>
<label for="password" class="block text-sm font-medium text-gray-700">Password</label>
<div class="mt-1">
<input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out">
</div>
</div>

<div>
<button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ease-in-out">
Login
</button>
</div>
</form>
</div>
</body>
</html>
