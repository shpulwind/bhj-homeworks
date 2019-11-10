const timer = document.getElementById('timer');

const interval = setInterval(()=> {
    if (timer.textContent == 0) {
        clearInterval(interval);
        alert('Вы победили! Вот вам бесплатный Punto Switcher!');
        document.location.assign('https://yandex.ru/soft/punto/download/?os=win')
    }
    timer.textContent--;
}, 1000);