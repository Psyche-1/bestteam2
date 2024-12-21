document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.covers-img');
    const marqueeContainer = document.querySelector('.marquee-container');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                images.forEach(image => {
                    image.style.animationPlayState = 'running';
                });
            } else {
                images.forEach(image => {
                    image.style.animationPlayState = 'paused';
                });
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(marqueeContainer);

    function stopImages(event) {
        if (event.target.nodeName !== 'IMG') {
            return;
        }

        const rowClicked = event.target.parentElement;

        const marqueeRows = document.querySelectorAll('.marquee-row');

        if (event.target.style.animationPlayState === 'paused') {
            Array.from(rowClicked.children).forEach(child => {
                child.style.animationPlayState = 'running';
            });
        } else {
            Array.from(rowClicked.children).forEach(child => {
                child.style.animationPlayState = 'paused';
            });
            marqueeRows.forEach(row => {
                if (row !== rowClicked) {
                    Array.from(row.children).forEach(child => {
                        if (child.style.animationPlayState === 'paused') {
                            child.style.animationPlayState = 'running';
                        }
                    });
                }
            });
        }
    }

    document.querySelector('.marquee-container').addEventListener('click', stopImages);
});