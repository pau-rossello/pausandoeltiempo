document.addEventListener('DOMContentLoaded', () => {
    // Header elements
    const header = document.getElementById('main-header');
    const headerContainer = document.getElementById('header-container');
    const headerLogo = document.getElementById('header-logo');
    const headerNav = document.getElementById('header-nav');
    const heroImage = document.querySelector('.animate-slow-zoom');

    // Header transition & Parallax on scroll
    window.addEventListener('scroll', () => {
        const isHomePage = window.location.pathname.endsWith('index.html') || 
                           window.location.pathname === '/' || 
                           window.location.pathname.includes('index.html');
        
        // Parallax Effect for Hero
        if (heroImage) {
            let scrollValue = window.scrollY;
            heroImage.style.transform = `scale(1.1) translateY(${scrollValue * 0.3}px)`;
        }

        // Header Background & Colors
        if (window.scrollY > 50) {
            header.classList.remove('bg-transparent', 'py-4', 'md:py-6');
            header.classList.add('bg-white', 'py-2', 'md:py-4', 'shadow-md');
            if (headerContainer) headerContainer.classList.replace('border-white/20', 'border-zen-grey');
            if (headerLogo) headerLogo.src = 'images/logo_black.png';
            if (headerNav) headerNav.classList.replace('text-white', 'text-zen-dark');
        } else {
            if (isHomePage) {
                header.classList.add('bg-transparent', 'py-4', 'md:py-6');
                header.classList.remove('bg-white', 'py-2', 'md:py-4', 'shadow-md');
                if (headerContainer) headerContainer.classList.replace('border-zen-grey', 'border-white/20');
                if (headerLogo) headerLogo.src = 'images/logo_white.png';
                if (headerNav) headerNav.classList.replace('text-zen-dark', 'text-white');
            }
        }
    });

    // Reveal animations on scroll (Intersection Observer)
    const revealElements = document.querySelectorAll('.fade-in');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target); // Only reveal once
            }
        });
    }, { threshold: 0.01, rootMargin: '0px' });

    revealElements.forEach(el => revealObserver.observe(el));
    
    // Immediate reveal for elements already in viewport
    const revealIfInView = () => {
        revealElements.forEach(el => {
            if (!el.classList.contains('visible')) {
                const rect = el.getBoundingClientRect();
                // Elements that are even partially in view should reveal
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    el.classList.add('visible');
                    revealObserver.unobserve(el);
                }
            }
        });
    };
    
    // Run once on load and after a small delay to catch layout shifts
    revealIfInView();
    setTimeout(revealIfInView, 500);

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileNav = document.getElementById('mobile-nav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.remove('translate-x-full');
        });
        menuClose.addEventListener('click', () => {
            mobileNav.classList.add('translate-x-full');
        });
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.add('translate-x-full');
            });
        });
    }

    // Lightbox Logic
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
    const lightboxClose = lightbox ? lightbox.querySelector('button') : null;

    if (galleryItems.length > 0 && lightbox && lightboxImg) {
        // Ensure lightbox is hidden initially via style
        lightbox.style.display = 'none';
        lightbox.classList.remove('hidden'); // Remove Tailwind's hidden to avoid conflicts

        galleryItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const img = item.querySelector('img');
                if (img && img.src) {
                    lightboxImg.src = img.src;
                    lightbox.style.display = 'flex';
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        const closeLightbox = () => {
            lightbox.style.display = 'none';
            document.body.style.overflow = '';
            lightboxImg.src = ''; // Clear src
            lightboxImg.classList.remove('zoomed'); // Reset zoom
        };

        // Zoom toggle
        lightboxImg.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent background click from closing
            lightboxImg.classList.toggle('zoomed');
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target === lightboxClose || e.target.tagName === 'BUTTON') {
                closeLightbox();
            }
        });

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.style.display === 'flex') {
                closeLightbox();
            }
        });
    }

    // Logo Carousel: Removed automatic highlighting logic as per user request.
    // Interaction is now handled purely via CSS hover effects.

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Philosophy Section (Detroit Paris Style) ---
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);



        // Floating Images Animation
        const phiPhotos = document.querySelectorAll('.phi-photo');
        
        ScrollTrigger.matchMedia({
            // Desktop
            "(min-width: 768px)": function() {
                phiPhotos.forEach((photo) => {
                    const speed = parseFloat(photo.dataset.speed) || 0.2;
                    gsap.fromTo(photo, { opacity: 0, filter: "blur(10px)", y: 100 }, {
                        scrollTrigger: {
                            trigger: "#philosophy",
                            start: "top center",
                            end: "bottom center",
                            scrub: 2,
                        },
                        opacity: 0.4,
                        filter: "blur(2px)",
                        y: -100 * speed * 5,
                        ease: "power2.out"
                    });
                });
            },
            // Mobile
            "(max-width: 767px)": function() {
                // Swap to vertical-specific images
                const originalSrcs = Array.from(phiPhotos).map(img => img.src);
                if (phiPhotos[0]) phiPhotos[0].src = 'images/efecto/vertical/efecto_vertical_01.jpg';
                if (phiPhotos[2]) phiPhotos[2].src = 'images/efecto/vertical/efecto_vertical_02.jpg';
                if (phiPhotos[5]) phiPhotos[5].src = 'images/efecto/vertical/efecto_vertical_03.jpg';

                phiPhotos.forEach((photo) => {
                    const speed = parseFloat(photo.dataset.speed) || 0.2;
                    gsap.fromTo(photo, { opacity: 0, filter: "blur(10px)", y: 100 }, {
                        scrollTrigger: {
                            trigger: "#philosophy",
                            start: "top top",
                            end: "bottom bottom",
                            scrub: 2,
                        },
                        opacity: 0.4,
                        filter: "blur(2px)",
                        y: -150 * speed,
                        ease: "none"
                    });
                });

                return () => {
                    // Revert to original images when leaving mobile breakpoint
                    phiPhotos.forEach((img, i) => img.src = originalSrcs[i]);
                };
            }
        });
    }
    // --- Logo Carousel Mobile (Infinite Loop) ---
    const logoTrack = document.getElementById('logo-track');
    if (logoTrack && typeof gsap !== 'undefined') {
        ScrollTrigger.matchMedia({
            "(max-width: 767px)": function() {
                // Clone logos for seamless loop
                const logos = logoTrack.querySelectorAll('.logo-item');
                logos.forEach(logo => {
                    const clone = logo.cloneNode(true);
                    logoTrack.appendChild(clone);
                });

                // Animate the track
                // 4 logos * 33.333vw = 133.332vw
                gsap.to(logoTrack, {
                    x: "-133.332vw",
                    duration: 20,
                    ease: "none",
                    repeat: -1
                });
            }
        });
    }
    // --- Contact Form Handling ---
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    if (contactForm && successMessage && errorMessage) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Manual Validation
            const formData = new FormData(contactForm);
            const isComplete = Array.from(formData.values()).every(value => value.trim() !== '');

            if (!isComplete) {
                // Show error message
                errorMessage.classList.remove('hidden');
                errorMessage.classList.add('opacity-100');
                
                // Optional: shake effect or just highlight
                setTimeout(() => {
                    errorMessage.classList.add('opacity-0');
                    setTimeout(() => {
                        errorMessage.classList.add('hidden');
                        errorMessage.classList.remove('opacity-0', 'opacity-100');
                    }, 300);
                }, 4000);
                return;
            }

            // If complete, proceed to success
            errorMessage.classList.add('hidden');
            
            // Show success message
            successMessage.classList.remove('hidden');
            successMessage.classList.add('opacity-100');
            
            // Clear the form
            contactForm.reset();
            
            // Optional: Hide success message after a while
            setTimeout(() => {
                successMessage.classList.add('opacity-0');
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                    successMessage.classList.remove('opacity-0', 'opacity-100');
                }, 500);
            }, 6000);
        });
    }
});
