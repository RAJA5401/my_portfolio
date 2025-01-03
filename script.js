// Create and style the "Back to Top" button
const backToTopBtn = document.createElement('button');
backToTopBtn.id = 'backToTopBtn';
backToTopBtn.textContent = 'Back to Top';
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '20px';
backToTopBtn.style.right = '20px';
backToTopBtn.style.backgroundColor = '#007BFF';
backToTopBtn.style.color = 'white';
backToTopBtn.style.border = 'none';
backToTopBtn.style.padding = '10px 20px';
backToTopBtn.style.fontSize = '16px';
backToTopBtn.style.borderRadius = '5px';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
backToTopBtn.style.display = 'none'; // Initially hidden

// Add hover effect
backToTopBtn.addEventListener('mouseover', () => {
    backToTopBtn.style.backgroundColor = '#0056b3';
});
backToTopBtn.addEventListener('mouseout', () => {
    backToTopBtn.style.backgroundColor = '#007BFF';
});

// Append the button to the body
document.body.appendChild(backToTopBtn);

// Show/hide the button based on scroll position
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
};

// Scroll to top functionality
backToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
