document.addEventListener("DOMContentLoaded", () => {
    const skillCards = document.querySelectorAll('.skill-card');
    const projectCards = document.querySelectorAll('.project-card');
    const contactCard = document.querySelector('.contact-card');

    // Combine all relevant NodeLists
    const cards = [...skillCards, ...projectCards, contactCard];

    cards.forEach(card => {
        card.addEventListener('click', () => {
            alert(`You clicked on ${card.textContent}`);
        });
    });

    const options = {
        root: null,
        threshold: 0.1
    };

    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    cards.forEach(card => {
        observer.observe(card);
    });
});
