// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Testimonials Carousel
    const reviews = document.querySelectorAll('.review');
    let currentReview = 0;

    function showReview(index) {
        reviews.forEach((review, i) => {
            if (i === index) {
                review.classList.add('active');
            } else {
                review.classList.remove('active');
            }
        });
    }

    function nextReview() {
        currentReview = (currentReview + 1) % reviews.length;
        showReview(currentReview);
    }

    // Initialize first review
    showReview(currentReview);

    // Change review every 10 seconds
    setInterval(nextReview, 10000);

    // Newsletter Form Handling
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            // Here you can add AJAX request to your backend or a service like Mailchimp
            alert(`Thank you for subscribing with ${email}!`);
            newsletterForm.reset();
        });
    }

    // Smooth Scrolling for Navigation Links (Optional)
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default if linking to a section
            if (this.hash !== "") {
                e.preventDefault();
                const hash = this.hash;
                const target = document.querySelector(hash);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80, // Adjust for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
