// Welcome message
console.log("Welcome to your SaaS landing page!");

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all buttons on the page
    const buttons = document.querySelectorAll('button');
    
    // Add click event listeners to all buttons
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Prevent any default behavior
            event.preventDefault();
            
            // Show demo alert
            alert('Demo only');
        });
    });
    
    // Future extension: smooth scrolling or slide animation can be added here
    
});
