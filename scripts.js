

document.addEventListener("DOMContentLoaded", function() {
    const headline = document.getElementById("headline");
    const words = ["Style.","Elegance.", "Minimalism.", "Comfort."];
    let currentWordIndex = 0;
    let letterIndex = 0;
    let intervalId = null;

    function updateHeadline() {
        const firstLine = `Let's Elevate Your Ride Experience With Rhyno <br> Where Superiority Meets `;
        const secondLine = ` ${words[currentWordIndex].slice(0, letterIndex)}`;
        headline.innerHTML = `${firstLine}${secondLine}`;

        letterIndex++;
        if (letterIndex > words[currentWordIndex].length) {
            letterIndex = 0;
            currentWordIndex = (currentWordIndex + 1) % words.length;
        }
    }

    function startInterval() {
        intervalId = setInterval(updateHeadline, 300); 
    }

    function stopInterval() {
        clearInterval(intervalId);
    }

    startInterval(); 
    
    headline.addEventListener("mouseenter", stopInterval);
    headline.addEventListener("mouseleave", startInterval);
});

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image-item');
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('image-visible');
                observer.unobserve(entry.target); 
            }
        });
    };

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.5 
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    images.forEach(img => {
        observer.observe(img);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll('.carousal-item');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.5 
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    carouselItems.forEach(item => {
        observer.observe(item);
    });
});

