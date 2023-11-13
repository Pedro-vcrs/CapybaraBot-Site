document.getElementById('botao-de-audio').addEventListener('click', function () {
    var audio = document.getElementById('meu-audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});