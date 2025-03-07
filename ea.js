// script.js
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Jika digulir lebih dari 50px
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; // Warna solid
        navbar.style.backdropFilter = 'blur(5px)'; // Efek blur lebih kecil
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // Kembali transparan
        navbar.style.backdropFilter = 'blur(10px)'; // Efek blur lebih besar
    }
});