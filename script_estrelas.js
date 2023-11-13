const stars = document.querySelectorAll('.estrela-avaliacao .estrela');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach((otherStar, otherIndex) => {
            if (otherIndex <= index) {
                otherStar.classList.add('selecionada');
            } else {
                otherStar.classList.remove('selecionada');
            }
        });
    });
});