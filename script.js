document.addEventListener('DOMContentLoaded', function() {

    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
        });
    });

    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            header.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.04)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // --- Lógica do Slide Show ---
    let slideIndex = 0;
    let slideInterval;

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot-slide");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }

    function startSlideShow() {
        showSlides();
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(showSlides, 4000);
    }

    window.currentSlide = function(n) {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot-slide");
        
        if (n > slides.length) {slideIndex = 0}
        if (n < 1) {slideIndex = slides.length}
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        
        slides[n-1].style.display = "block";  
        dots[n-1].className += " active";
        
        startSlideShow();
    }

    startSlideShow();
});