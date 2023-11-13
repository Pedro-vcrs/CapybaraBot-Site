document.addEventListener('DOMContentLoaded', function () {
    const ratingInputs = document.querySelectorAll('input[type="radio"]');

    ratingInputs.forEach(input => {
        input.addEventListener('change', function () {
            const selectedRating = this.value;

            ratingInputs.forEach((input, index) => {
                const label = input.nextElementSibling;

                if (index + 1 <= selectedRating) {
                    label.style.color = '#FFD700'; // Cor das estrelas selecionadas
                } else {
                    label.style.color = '#ddd'; // Cor padrão para estrelas não selecionadas
                }
            });

            console.log('Classificação selecionada:', selectedRating);
        });
    });
});