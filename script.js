// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Initialize intersection observer for animations
    initializeAnimations();
});

// Mobile menu functionality
let mobileMenuOpen = false;

function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    if (mobileMenuOpen) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = 64; // header height
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
        toggleMobileMenu();
    }
}

// FAQ functionality
function toggleFaq(button) {
    const faqItem = button.parentElement;
    const faqAnswer = faqItem.querySelector('.faq-answer');
    const faqIcon = button.querySelector('.faq-icon');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
            item.querySelector('.faq-answer').classList.remove('open');
        }
    });
    
    // Toggle current FAQ item
    faqItem.classList.toggle('active');
    faqAnswer.classList.toggle('open');
}

// Form submission
async function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('.form-submit');
    const submitText = submitBtn.querySelector('.submit-text');
    const submitLoading = submitBtn.querySelector('.submit-loading');
    
    // Get form values
    const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        service: formData.get('service'),
        message: formData.get('message'),
        consent: formData.get('consent') === 'on'
    };
    
    // Basic validation
    if (!data.firstName || data.firstName.length < 2) {
        showToast('Ad en az 2 karakter olmalıdır', 'error');
        return;
    }
    
    if (!data.lastName || data.lastName.length < 2) {
        showToast('Soyad en az 2 karakter olmalıdır', 'error');
        return;
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        showToast('Geçerli bir e-posta adresi giriniz', 'error');
        return;
    }
    
    if (!data.message || data.message.length < 10) {
        showToast('Mesaj en az 10 karakter olmalıdır', 'error');
        return;
    }
    
    if (!data.service) {
        showToast('Lütfen bir hizmet seçiniz', 'error');
        return;
    }
    
    if (!data.consent) {
        showToast('Kişisel verilerin işlenmesini kabul etmelisiniz', 'error');
        return;
    }
    
    // Show loading state
    submitBtn.disabled = true;
    submitText.classList.add('hidden');
    submitLoading.classList.remove('hidden');
    
    try {
        // Simulate API call (replace with actual endpoint)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Success
        showToast('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.', 'success');
        form.reset();
        
    } catch (error) {
        // Error
        showToast('Mesajınız gönderilemedi. Lütfen tekrar deneyiniz.', 'error');
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitText.classList.remove('hidden');
        submitLoading.classList.add('hidden');
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    const toastIcon = toast.querySelector('.toast-icon');
    
    // Set message
    toastMessage.textContent = message;
    
    // Set icon based on type
    if (type === 'error') {
        toast.style.backgroundColor = '#ef4444';
        toastIcon.setAttribute('data-lucide', 'x-circle');
    } else {
        toast.style.backgroundColor = '#10b981';
        toastIcon.setAttribute('data-lucide', 'check-circle');
    }
    
    // Recreate icons
    lucide.createIcons();
    
    // Show toast
    toast.classList.remove('hidden');
    
    // Hide after 5 seconds
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 5000);
}

// Initialize animations with Intersection Observer
function initializeAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe service cards and package cards
    const elementsToAnimate = document.querySelectorAll('.service-card, .package-card');
    elementsToAnimate.forEach((element) => observer.observe(element));
}

// Package selection
function selectPackage(packageName) {
    // Scroll to contact form
    scrollToSection('contact');
    
    // Pre-fill service field
    const serviceSelect = document.getElementById('service');
    serviceSelect.value = 'web-tasarim'; // Default to web design
    
    // Pre-fill message with package info
    const messageTextarea = document.getElementById('message');
    messageTextarea.value = `Merhaba, ${packageName} paketi hakkında bilgi almak istiyorum.`;
    
    // Show toast
    showToast(`${packageName} paketi seçildi. Lütfen iletişim formunu doldurun.`, 'success');
}

// Add package selection to buttons
document.addEventListener('DOMContentLoaded', function() {
    const packageButtons = document.querySelectorAll('.package-btn');
    packageButtons.forEach((button, index) => {
        const packageNames = ['Başlangıç', 'Profesyonel', 'Kurumsal'];
        button.addEventListener('click', () => {
            selectPackage(packageNames[index]);
        });
    });
});

// Hide floating shapes on mobile
function checkMobile() {
    const floatingShapes = document.querySelector('.floating-shapes');
    if (window.innerWidth <= 768) {
        floatingShapes.style.display = 'none';
    } else {
        floatingShapes.style.display = 'block';
    }
}

// Check on load and resize
window.addEventListener('load', checkMobile);
window.addEventListener('resize', checkMobile);

// Smooth scroll for all internal links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        scrollToSection(targetId);
    }
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    }
});

// Form field focus effects
document.addEventListener('DOMContentLoaded', function() {
    const formFields = document.querySelectorAll('.form-field input, .form-field textarea, .form-field select');
    
    formFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        field.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
});

// Keyboard navigation for FAQ
document.addEventListener('keydown', function(e) {
    if (e.target.classList.contains('faq-question')) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleFaq(e.target);
        }
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenuOpen && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        toggleMobileMenu();
    }
});

// Service card gradient effects based on data attributes
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        const gradient = card.getAttribute('data-gradient');
        if (gradient) {
            // Expecting format like "from-blue-500 to-green-500"
            const fromMatch = gradient.match(/from-([^\s]+)/);
            const toMatch = gradient.match(/to-([^\s]+)/);
            if (fromMatch && toMatch) {
                const fromColor = fromMatch[1];
                const toColor = toMatch[1];
                card.style.background = `linear-gradient(135deg, var(--${fromColor}), var(--${toColor}))`;
            }
        }
    });
});

// Add loading animation to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add click effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });
});

// Preload critical images
document.addEventListener('DOMContentLoaded', function() {
    const criticalImages = [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Service worker registration for PWA features (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}