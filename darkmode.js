document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Check user's preferred mode from localStorage
    const userPreferredMode = localStorage.getItem('userPreferredMode');
    
    // Apply the user's preferred mode or default to light mode
    document.body.classList.toggle('dark-mode', userPreferredMode === 'dark');
    
    // Add transition duration after applying initial styles
    document.body.style.transition = 'background-color 0.3s, color 0.3s';

    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        
        // Store the user's preferred mode in localStorage
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('userPreferredMode', isDarkMode ? 'dark' : 'light');
    });
});
