document.addEventListener('DOMContentLoaded', () => {
    const targetDate = new Date('August 3, 2024 00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});


document.addEventListener('DOMContentLoaded', function() {
    const timelineEvents = document.querySelectorAll('.timeline-event');

    window.addEventListener('scroll', function() {
        let top = window.scrollY + (window.innerHeight / 2); // Posición del scroll más la mitad de la ventana

        timelineEvents.forEach(function(event) {
            if (top > event.offsetTop) {
                event.classList.add('active');
            } else {
                event.classList.remove('active');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const stopBtn = document.getElementById('stop-btn');

    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = 'Parar';
        } else {
            audio.pause();
            playPauseBtn.textContent = 'Reproducir';
        }
    });

    stopBtn.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
        playPauseBtn.textContent = 'Play';
    });
});