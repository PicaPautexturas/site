document.addEventListener('DOMContentLoaded', function() {
    // Slider para o banner superior
    let slideIndexTop = 0;
    showSlidesTop();

    function showSlidesTop() {
        let slidesTop = document.querySelectorAll('.slider .slides .slide');
        for (let i = 0; i < slidesTop.length; i++) {
            slidesTop[i].style.display = 'none';  
        }
        slideIndexTop++;
        if (slideIndexTop > slidesTop.length) {slideIndexTop = 1}    
        slidesTop[slideIndexTop-1].style.display = 'block';  
        setTimeout(showSlidesTop, 3000); // Muda a imagem a cada 3 segundos
    }

    // Sliders para os banners inferiores
    let banners = document.querySelectorAll('.product-banners .banner');

    banners.forEach(function(banner) {
        let slideIndex = 0;
        showSlidesBanner();

        function showSlidesBanner() {
            let slides = banner.querySelectorAll('.slides .slide');
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';  
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            slides[slideIndex-1].style.display = 'block';  
            setTimeout(showSlidesBanner, 3000); // Muda a imagem a cada 3 segundos
        }
    });
});
