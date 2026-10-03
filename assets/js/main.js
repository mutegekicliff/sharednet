// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuOpenBtn = document.getElementById('mobile-menu-open');
    const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
    const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuOpenBtn && mobileMenuCloseBtn && mobileMenu && mobileMenuBackdrop) {
        mobileMenuOpenBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
        });

        const closeMenu = () => {
            mobileMenu.classList.add('hidden');
        };

        mobileMenuCloseBtn.addEventListener('click', closeMenu);
        mobileMenuBackdrop.addEventListener('click', closeMenu);
    }
});
