export function carousel () {
    const swiper = new Swiper('#carousel', {
        grabCursor: true,

        slidesPerView: 'auto',
        speed: 300
    });

    const gallery = new Swiper('#gallery', {
        loop: true,
        grabCursor: true,
        pagination: {
            enabled: true,
            el: '.swiper-pagination',
            type: 'bullets',
            dynamicBullets: true
        },
    });



}





