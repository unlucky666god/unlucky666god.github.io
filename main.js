// Mobile menu toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        document.querySelector('nav ul').classList.remove('show');
    });
});

// Form submission
document.getElementById('consultationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Спасибо за заявку! Наш специалист свяжется с вами в ближайшее время.');
    this.reset();
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        header.style.background = 'white';
    }
});

// Анимация при скролле для преимуществ
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .about-image');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
}

// Инициализация анимаций при загрузке
window.addEventListener('load', function() {
    // Анимация преимуществ при загрузке, если они видны
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, 300 * index);
    });
    
    // Анимация изображения "О нас", если оно видно
    const aboutImage = document.querySelector('.about-image');
    if (aboutImage && aboutImage.getBoundingClientRect().top < window.innerHeight) {
        setTimeout(() => {
            aboutImage.classList.add('visible');
        }, 500);
    }
});

// Слушатель скролла для анимаций
window.addEventListener('scroll', animateOnScroll);

// Повторная проверка при изменении размера окна
window.addEventListener('resize', animateOnScroll);