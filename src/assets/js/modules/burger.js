let flag = false;
const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

export function burger() {
    const burgerElement = document.querySelector('.header__burger');
    const mobileMenuElement = document.querySelector('.mobile-menu');
    const mobileMenuListElement = document.querySelector('.mobile-menu__list');
    const header = document.querySelector('.header');
    mobileMenuElement.style.display = 'none';
    burgerElement.addEventListener('click', () => {
        burgerElement.classList.toggle('active');
        document.body.classList.toggle('active');
        mobileMenuElement.classList.toggle('active');
        mobileMenuListElement.classList.toggle('active');

        if (!flag) {
            flag = true;
            mobileMenuElement.style.display = '';
            mobileMenuElement.style.paddingRight = scrollbarWidth + 'px';
            document.body.style.paddingRight = scrollbarWidth + 'px';
            if(header.classList.contains('fixed')) {
                console.log('test');
                header.style.paddingRight = scrollbarWidth + 'px';
            } else {
                header.style.paddingRight = '';

            }
        } else {
            document.body.style.paddingRight = '';
            mobileMenuElement.style.paddingRight = '';
            header.style.paddingRight = '';
            flag = false;
            setTimeout(() => {
                mobileMenuElement.style.display = 'none';
            }, 300);
        }
    });

}



