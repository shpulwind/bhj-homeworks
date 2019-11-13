const tabs = document.querySelectorAll('.tab'),
    tab_content = document.querySelectorAll('.tab__content');

function clearClass() {
    for(let c = 0; c < tabs.length; c++) {
        tabs[c].classList.remove('tab_active');
        tab_content[c].classList.remove('tab__content_active');
    }
}

for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
        clearClass();
        tabs[i].classList.add('tab_active');
        tab_content[i].classList.add('tab__content_active')
    })
} 
