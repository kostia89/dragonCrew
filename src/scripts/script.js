const btn = document.querySelector('.header__btn');
const nav = document.querySelector('.header__nav');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');



btn.addEventListener('click', (el) => {
    if (el.target.dataset.path === "button-el") {
        console.log('hdsfsjfsa');
        // if (nav.classList.contains('disactive') && btn.classList !== 'disactive') {
        nav.classList.toggle('disactive');
        line1.classList.toggle('hide-line');
        line2.classList.toggle('active2');
        line3.classList.toggle('active3');
    }
    // else {
    //     nav.classList.add('disactive');
    //     line1.classList.remove('hide-line');
    //     line2.classList.remove('active2');
    //     line3.classList.remove('active3');
    // }

    window.addEventListener('click', e => {
        // if (!e.target.dataset.path === "button-el" && !e.target.classList.contains(`header__nav__link`)) {
        if (e.target.dataset.path !== "button-el" && e.target.dataset.target !== "nav-el") {
            console.log('problem!!!');
            nav.classList.add('disactive');
            line1.classList.remove('hide-line');
            line2.classList.remove('active2');
            line3.classList.remove('active3');
        }
    })
})




