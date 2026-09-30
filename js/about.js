function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let count = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    let cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.innerText = count;
    }
}

function revealStorySections() {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observerInstance.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.about-container').forEach((section) => {
        section.classList.add('is-reveal-ready');
        observer.observe(section);
    });
}

updateCartCount();
revealStorySections();
