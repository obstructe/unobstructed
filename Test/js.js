document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check local storage or system configuration rules
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateToggleIcon(savedTheme);
    } else if (systemPrefersDark.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateToggleIcon('dark');
    }

    // Toggle event processing pipeline
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleIcon(newTheme);
    });

    function updateToggleIcon(theme) {
        const iconSpan = themeToggle.querySelector('.icon');
        iconSpan.textContent = theme === 'dark' ? '🌙' : '✨';
        
        // Add programmatic subtle physics animations
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => themeToggle.style.transform = 'scale(1)', 150);
    }
});
