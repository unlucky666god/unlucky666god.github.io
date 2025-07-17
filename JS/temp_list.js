setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'background-heart';
    heart.textContent = '❤️';

    // Случайная позиция по ширине и высоте (от -100 до 0 по Y)
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * -50 + 'px'; // от -50 до 0 (чуть ниже верхней границы)

    // Случайная длительность анимации, чтобы не все летели одинаково
    const duration = 8 + Math.random() * 6; // от 8 до 14 секунд
    heart.style.animationDuration = duration + 's';

    // Случайный начальный поворот
    heart.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(heart);

    // Удаляем через время, чтобы не перегружать DOM
    setTimeout(() => heart.remove(), duration * 1000);
}, 500);