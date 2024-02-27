        const images = [
            '1.jpg', 
            '2.jpg',
            '3.jpg'
        ];

        const imageContainer = document.querySelector('.image-container');
        let currentIndex = 0;

        function changeImage() {
            currentIndex = (currentIndex + 1) % images.length;
            imageContainer.style.backgroundImage = `url(${images[currentIndex]})`;
        }

        setInterval(changeImage, 50000);