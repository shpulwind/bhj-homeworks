const banners = document.querySelectorAll('.reveal');

document.addEventListener('scroll', () => {
    for (let banner of banners) {
        if (
          banner.getBoundingClientRect().top < window.innerHeight &&
          banner.getBoundingClientRect().bottom > 0
        ) banner.classList.add('reveal_active');
        else banner.classList.remove('reveal_active');
    }
});