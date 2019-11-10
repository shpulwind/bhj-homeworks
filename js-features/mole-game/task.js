const dead = document.getElementById('dead'),
    lost = document.getElementById('lost');

for(let i = 1; i < 10; i++) {
    
    document.getElementById('hole'+i).onclick = ()=> {
        if (+dead.textContent == 9 ) { 
            alert('Победа!');
            clearState(); 
        }
        else if (+lost.textContent == 4) { 
            alert('Ну, не сегодня...'); 
            clearState();
        }
        else if (document.getElementById('hole'+i).classList.contains('hole_has-mole')) {
            dead.textContent++
        }
        else lost.textContent++
    }
}

function clearState() {
    dead.textContent = 0;
    lost.textContent = 0;
}