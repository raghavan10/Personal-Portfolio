// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation (for your contact form)
document.getElementById('contact-form')?.addEventListener('submit', function(event) {
    let name = document.querySelector('input[name="name"]').value.trim();
    let email = document.querySelector('input[name="email"]').value.trim();
    let message = document.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !message) {
        alert("All fields are required.");
        event.preventDefault();
    }
});
