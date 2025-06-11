// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const header = document.getElementById('header');
const backToTopBtn = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');

// Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Header scroll effect
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Back to top button
    if (scrollTop > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
    
    lastScrollTop = scrollTop;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Back to top button
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Form handling
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone') || '',
        projectType: formData.get('projectType'),
        projectDetails: formData.get('projectDetails')
    };
    
    // Validate required fields
    if (!data.name || !data.email || !data.projectType || !data.projectDetails) {
        showNotification('Lütfen tüm zorunlu alanları doldurun.', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Gönderiliyor...';
    submitBtn.disabled = true;
    
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            showNotification('Mesajınız başarıyla gönderildi! En kısa sürede size döneceğiz.', 'success');
            contactForm.reset();
        } else {
            throw new Error('Server error');
        }
    } catch (error) {
        showNotification('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.', 'error');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification__content">
            <div class="notification__icon">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            </div>
            <span class="notification__message">${message}</span>
            <button class="notification__close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        min-width: 300px;
        max-width: 500px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        border-left: 4px solid ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#4F81FF'};
    `;
    
    const content = notification.querySelector('.notification__content');
    content.style.cssText = `
        display: flex;
        align-items: center;
        padding: 16px;
        gap: 12px;
    `;
    
    const icon = notification.querySelector('.notification__icon');
    icon.style.cssText = `
        color: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#4F81FF'};
        font-size: 20px;
    `;
    
    const message_el = notification.querySelector('.notification__message');
    message_el.style.cssText = `
        flex: 1;
        color: #374151;
        font-weight: 500;
    `;
    
    const closeBtn = notification.querySelector('.notification__close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: #9CA3AF;
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
        transition: color 0.2s ease;
    `;
    
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.color = '#6B7280';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.color = '#9CA3AF';
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.service-card, .benefit-item, .testimonial-card, .value-item, .service-feature'
    );
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});

// Add CSS for animations
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    .service-card,
    .benefit-item,
    .testimonial-card,
    .value-item,
    .service-feature {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .service-card.animate-in,
    .benefit-item.animate-in,
    .testimonial-card.animate-in,
    .value-item.animate-in,
    .service-feature.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .benefit-item:nth-child(1).animate-in { transition-delay: 0s; }
    .benefit-item:nth-child(2).animate-in { transition-delay: 0.1s; }
    .benefit-item:nth-child(3).animate-in { transition-delay: 0.2s; }
    .benefit-item:nth-child(4).animate-in { transition-delay: 0.3s; }
    
    .service-card:nth-child(1).animate-in { transition-delay: 0s; }
    .service-card:nth-child(2).animate-in { transition-delay: 0.1s; }
    .service-card:nth-child(3).animate-in { transition-delay: 0.2s; }
    .service-card:nth-child(4).animate-in { transition-delay: 0.3s; }
    
    .testimonial-card:nth-child(1).animate-in { transition-delay: 0s; }
    .testimonial-card:nth-child(2).animate-in { transition-delay: 0.1s; }
    .testimonial-card:nth-child(3).animate-in { transition-delay: 0.2s; }
`;
document.head.appendChild(animationStyles);

// Service card detail modals (simple implementation)
document.querySelectorAll('.service-card__btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.service-card');
        const title = card.querySelector('.service-card__title').textContent;
        const price = card.querySelector('.service-card__price').textContent;
        const description = card.querySelector('.service-card__description').textContent;
        const features = Array.from(card.querySelectorAll('.service-card__features li')).map(li => li.textContent);
        
        let featuresHtml = features.map(feature => `<li>${feature}</li>`).join('');
        
        showServiceModal(title, price, description, featuresHtml);
    });
});

function showServiceModal(title, price, description, featuresHtml) {
    // Remove existing modal
    const existingModal = document.querySelector('.service-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modal = document.createElement('div');
    modal.className = 'service-modal';
    modal.innerHTML = `
        <div class="service-modal__backdrop"></div>
        <div class="service-modal__content">
            <div class="service-modal__header">
                <h3>${title}</h3>
                <button class="service-modal__close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="service-modal__body">
                <div class="service-modal__price">${price}</div>
                <p class="service-modal__description">${description}</p>
                <div class="service-modal__features">
                    <h4>Paket İçeriği:</h4>
                    <ul>${featuresHtml}</ul>
                </div>
                <div class="service-modal__actions">
                    <button class="btn btn--primary" onclick="document.querySelector('#iletisim').scrollIntoView({behavior: 'smooth'}); document.querySelector('.service-modal').remove();">
                        Teklif Al
                    </button>
                    <button class="btn btn--outline" onclick="window.open('https://wa.me/905555555555?text=Merhaba, ${title} paketi hakkında bilgi almak istiyorum.', '_blank')">
                        WhatsApp ile İletişim
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    `;
    
    const backdrop = modal.querySelector('.service-modal__backdrop');
    backdrop.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
    `;
    
    const content = modal.querySelector('.service-modal__content');
    content.style.cssText = `
        position: relative;
        background: white;
        border-radius: 12px;
        max-width: 500px;
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    `;
    
    const header = modal.querySelector('.service-modal__header');
    header.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 24px 24px 0;
        border-bottom: 1px solid #E5E7EB;
        margin-bottom: 24px;
    `;
    
    const body = modal.querySelector('.service-modal__body');
    body.style.cssText = `
        padding: 0 24px 24px;
    `;
    
    const price = modal.querySelector('.service-modal__price');
    price.style.cssText = `
        font-size: 2rem;
        font-weight: 800;
        color: #4F81FF;
        margin-bottom: 16px;
        text-align: center;
    `;
    
    const descriptionEl = modal.querySelector('.service-modal__description');
    descriptionEl.style.cssText = `
        color: #6B7280;
        margin-bottom: 24px;
        text-align: center;
    `;
    
    const features = modal.querySelector('.service-modal__features');
    features.style.cssText = `
        margin-bottom: 24px;
    `;
    
    const featuresTitle = features.querySelector('h4');
    featuresTitle.style.cssText = `
        margin-bottom: 12px;
        color: #374151;
    `;
    
    const featuresList = features.querySelector('ul');
    featuresList.style.cssText = `
        list-style: none;
        padding: 0;
    `;
    
    featuresList.querySelectorAll('li').forEach(li => {
        li.style.cssText = `
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            color: #374151;
        `;
        li.innerHTML = `<i class="fas fa-check" style="color: #10B981; margin-right: 8px;"></i>${li.textContent}`;
    });
    
    const actions = modal.querySelector('.service-modal__actions');
    actions.style.cssText = `
        display: flex;
        gap: 12px;
        flex-direction: column;
    `;
    
    const closeBtn = modal.querySelector('.service-modal__close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: #9CA3AF;
        cursor: pointer;
        padding: 8px;
        border-radius: 6px;
        transition: color 0.2s ease;
    `;
    
    closeBtn.addEventListener('click', () => modal.remove());
    backdrop.addEventListener('click', () => modal.remove());
    
    document.body.appendChild(modal);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Re-enable body scroll when modal is removed
    const originalRemove = modal.remove.bind(modal);
    modal.remove = function() {
        document.body.style.overflow = '';
        originalRemove();
    };
}

// Lazy loading for images (if any are added later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Performance optimization - debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler
const debouncedScrollHandler = debounce(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    if (scrollTop > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Initialize tooltips for icons (simple implementation)
document.querySelectorAll('[data-tooltip]').forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'custom-tooltip';
        tooltip.textContent = e.target.dataset.tooltip;
        tooltip.style.cssText = `
            position: absolute;
            background: #1F2937;
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 12px;
            white-space: nowrap;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.2s ease;
            pointer-events: none;
        `;
        
        document.body.appendChild(tooltip);
        
        const rect = e.target.getBoundingClientRect();
        tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + window.scrollY + 'px';
        
        setTimeout(() => tooltip.style.opacity = '1', 10);
        
        e.target.addEventListener('mouseleave', () => {
            tooltip.remove();
        }, { once: true });
    });
});

console.log('Netriva website initialized successfully! 🚀');