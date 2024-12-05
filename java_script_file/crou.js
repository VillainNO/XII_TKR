function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');

    if (navbar && hamburger) {
        navbar.classList.toggle('active');
    } else {
        console.error('Element navbar or hamburger not found!');
    }
}