
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    const numberOfStars = 15; 
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;

      
        const randomSize = Math.random() * 2 + 1; 

    
        star.style.left = randomX + 'vw';
        star.style.top = randomY + 'vh';
        star.style.width = randomSize + 'px';
        star.style.height = randomSize + 'px';

        container.appendChild(star);
    }
});



