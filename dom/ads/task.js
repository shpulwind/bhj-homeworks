const rotator_case = document.querySelectorAll('.rotator__case');
let timer = 1000,
    counter = 0;

setInterval( () => {
    rotator_case.forEach((element)=> element.classList.remove('rotator__case_active'));
    rotator_case[counter].classList.add('rotator__case_active');
    counter++;
    if(counter == rotator_case.length) counter = 0;
}, timer)