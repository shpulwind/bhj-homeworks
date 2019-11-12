const links = document.querySelectorAll('.menu__link'),
    menu = document.querySelectorAll('.menu');

for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
        let element = this.nextElementSibling;
        if(!element) return
        else {
            event.preventDefault();
            if(!element.classList.contains('menu_active')) {
                for(let b = 0; b < menu.length; b++) {
                    menu[b].classList.remove('menu_active');
                }
            }
            element.classList.toggle('menu_active')
        }
    })
}