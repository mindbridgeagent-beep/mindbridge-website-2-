document.addEventListener('DOMContentLoaded', () => {

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');

            // Animate hamburger bars (simple class toggle for now)
            const bars = document.querySelectorAll('.bar');
            if (mobileMenu.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const bars = document.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });

    // Smooth Scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close menu if open (redundant safety)
            if (mobileMenu) mobileMenu.classList.remove('active');

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for sticky header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Effect for Header (optional polish)
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
            header.style.background = 'rgba(15, 17, 21, 0.98)';
        } else {
            header.style.boxShadow = 'none';
            header.style.background = 'rgba(15, 17, 21, 0.95)';
        }
    });

    // Animation on Scroll (Basic Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once visible
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Fade-up effect class to elements we want to animate
    // For now, let's just apply a simple opacity transition in CSS if elements had a class
    // But since the user wants smooth animations, let's add a quick dynamic class to main sections
    document.querySelectorAll('section h2, .service-card, .process-steps').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Add logic to handle the intersection changes
    const handleScrollAnimations = () => {
        document.querySelectorAll('section h2, .service-card, .process-steps').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations(); // Trigger once on load
});
