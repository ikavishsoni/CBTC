document.addEventListener('DOMContentLoaded', () => {
    // Fade-in and slide-in animation for the name
    const nameElement = document.querySelector('.animated-name');
    nameElement.style.opacity = 0;
    nameElement.style.transform = 'translateY(-20px)';
    
    let opacity = 0;
    let translateY = -20;
    const fadeInSlideIn = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.03;
            translateY += 1; // Adjust the increment for smoother animation
            nameElement.style.opacity = opacity;
            nameElement.style.transform = `translateY(${translateY}px)`;
        } else {
            clearInterval(fadeInSlideIn);
        }
    }, 30);

    // Scroll animation for sections
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('hidden');
        revealOnScroll.observe(section);
    });
});
