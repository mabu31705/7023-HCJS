const images = document.querySelectorAll('.tagged');

images.forEach(img => {
    const description = img.getAttribute('data-description');

    img.addEventListener('mouseover', () => {
        const descriptionElement = img.querySelector('.description');
        descriptionElement.style.display = 'block';
    });

    img.addEventListener('mouseout', () => {
        const descriptionElement = img.querySelector('.description');
        descriptionElement.style.display = 'none';
    });
});