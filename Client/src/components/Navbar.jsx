<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Responsive Navbar</title>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>

<nav class="bg-gray-800 p-4 text-white relative">
<div class="container mx-auto flex justify-between items-center">
<!-- Logo -->
<a href="#" class="text-2xl font-bold text-purple-400">YourLogo</a>

<!-- Navigation Links (Desktop) -->
<div class="hidden md:flex space-x-4">
<a href="#" class="hover:text-purple-400">Dashboard</a>
<a href="#" class="hover:text-purple-400">Clients</a>
<a href="#" class="hover:text-purple-400">Projects</a>
<a href="#" class="hover:text-purple-400">Invoices</a>
</div>

<!-- Mobile Menu Button -->
<button id="mobile-menu-button" class="md:hidden focus:outline-none">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
</button>

<!-- Profile Icon (Desktop) -->
<div class="hidden md:block">
<a href="#" class="hover:text-purple-400">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
</svg>
</a>
</div>
</div>

<!-- Mobile Menu (Hidden by default) -->
<div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 right-0 bg-gray-700 p-4 flex flex-col space-y-2 z-10">
<a href="#" class="block px-4 py-2 hover:bg-gray-600 rounded">Dashboard</a>
<a href="#" class="block px-4 py-2 hover:bg-gray-600 rounded">Clients</a>
<a href="#" class="block px-4 py-2 hover:bg-gray-600 rounded">Projects</a>
<a href="#" class="block px-4 py-2 hover:bg-gray-600 rounded">Invoices</a>
<!-- Profile link in mobile menu -->
<a href="#" class="block px-4 py-2 hover:bg-gray-600 rounded">
<div class="flex items-center">
<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
</svg>
Profile
</div>
</a>
</div>
</nav>

<script>
document.addEventListener('DOMContentLoaded', () => {
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', (event) => {
event.stopPropagation(); // Prevent document click listener from firing immediately
mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
link.addEventListener('click', () => {
if (!mobileMenu.classList.contains('hidden')) {
mobileMenu.classList.add('hidden');
}
});
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
if (!mobileMenu.classList.contains('hidden') && !mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
mobileMenu.classList.add('hidden');
}
});
});
</script>

</body>
</html>
