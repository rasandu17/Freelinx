<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Collapsible Sidebar</title>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.2/dist/alpine.min.js" defer></script>
<style>
/* Optional: Custom icon for menu button (could be SVG or font icon) */
.menu-icon-open::before {
content: "\2261"; /* Hamburger icon */
}
.menu-icon-close::before {
content: "\00d7"; /* Close icon (X) */
}
.rotated-arrow::before {
content: "\25B6"; /* Right triangle */
transition: transform 0.3s ease-in-out;
display: inline-block;
}
.rotated-arrow.rotated::before {
transform: rotate(90deg); /* Down triangle */
}
</style>
</head>
<body class="bg-gray-100 flex">

<div x-data="{ isCollapsed: false }" 
class="flex h-screen bg-gray-800 text-white transition-all duration-300 ease-in-out"
:class="{ 'w-64': !isCollapsed, 'w-20': isCollapsed }">

<div class="flex flex-col flex-grow p-4 overflow-y-auto">
<div class="flex items-center justify-between mb-8">
<h1 class="text-2xl font-semibold" x-show="!isCollapsed">My App</h1>
<h1 class="text-2xl font-semibold" x-show="isCollapsed">MA</h1>
<button @click="isCollapsed = !isCollapsed" 
class="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600">
<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
:d="isCollapsed ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'"></path>
</svg>
</button>
</div>

<nav class="flex-grow space-y-2">
<a href="#" class="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
</svg>
<span x-show="!isCollapsed">Dashboard</span>
</a>

<a href="#" class="flex items-center space-x-3 p-2 rounded-md bg-gray-700 text-blue-300 transition-colors duration-200">
<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.19-1.264-.525-1.782m0 0A2.995 2.995 0 0012 16a2.995 2.995 0 00-4.475 2.218C7.19 18.736 7 19.347 7 20h10M7 20h5a2 2 0 002-2v-2a3 3 0 00-3-3H6a3 3 0 00-3 3v2a2 2 0 002 2z"></path>
</svg>
<span x-show="!isCollapsed">Users</span>
</a>

<a href="#" class="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
</svg>
<span x-show="!isCollapsed">Analytics</span>
</a>

<a href="#" class="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
</svg>
<span x-show="!isCollapsed">Calendar</span>
</a>
</nav>

<div class="mt-auto pt-4 border-t border-gray-700">
<a href="#" class="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.527.288 1.144.376 1.723.282z"></path>
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
</svg>
<span x-show="!isCollapsed">Settings</span>
</a>
<a href="#" class="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
</svg>
<span x-show="!isCollapsed">Logout</span>
</a>
</div>
</div>
</div>

<div class="flex-grow p-8">
<h1 class="text-3xl font-bold text-gray-800 mb-6">Welcome to the Dashboard!</h1>
<p class="text-gray-700">This is the main content area. The sidebar on the left is collapsible.</p>
<p class="text-gray-700 mt-4">Click the menu icon to expand or collapse the sidebar.</p>
<p class="text-gray-700 mt-4">The "Users" link is highlighted as the active state.</p>
</div>

</body>
</html>
