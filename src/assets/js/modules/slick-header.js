export function slickHeader() {
    const header = document.querySelector('.header');
    const wrapper = document.querySelector('.wrapper');
    document.addEventListener('scroll', event => {

        if (scrollY > 300) {
            header.classList.add('fixed');
            wrapper.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
            wrapper.classList.remove('fixed');
        }
    })
}