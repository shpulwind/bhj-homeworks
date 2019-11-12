window.onload = function() {
    slider_dots[num].classList.add('slider__dot_active'); 
}

let num = 0;

const slider_prev = document.querySelector('.slider__arrow_prev'),
    slider_next = document.querySelector('.slider__arrow_next'),
    slider_item = document.querySelectorAll('.slider__item'),
    slider_dots = document.querySelectorAll('.slider__dot');

function removeMarks(element, dots) {
    for(let i = 0; i < element.length; i++) {
            element[i].classList.remove('slider__item_active');
            dots[i].classList.remove('slider__dot_active');
    }
}

slider_next.addEventListener('click', function() {   
    if(num < slider_item.length-1) {
        removeMarks(slider_item, slider_dots);
        slider_item[num += 1].classList.add('slider__item_active');
    } else if(num === slider_item.length - 1) {
        removeMarks(slider_item, slider_dots);
        num = 0;
        slider_item[num].classList.add('slider__item_active');
    }
    slider_dots[num].classList.add('slider__dot_active');
})

slider_prev.addEventListener('click', function() {   
    if (num > 0) {
        removeMarks(slider_item, slider_dots);
        slider_item[num -= 1].classList.add('slider__item_active');

    } else if(num == 0) {
        removeMarks(slider_item, slider_dots);
        num = slider_item.length - 1;      
        slider_item[num].classList.add('slider__item_active');
    }
    slider_dots[num].classList.add('slider__dot_active');
})

for(let i = 0; i < slider_dots.length; i++) {
    slider_dots[i].addEventListener('click', function() {
        num = i;
        removeMarks(slider_item, slider_dots);
        slider_item[i].classList.add('slider__item_active');
        slider_dots[num].classList.add('slider__dot_active');
    })
}