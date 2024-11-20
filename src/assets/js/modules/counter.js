export function counter() {
    const plus = document.querySelectorAll('.counter__plus');
    const minus = document.querySelectorAll('.counter__minus');

    plus.forEach((el) => {
        el.addEventListener('click', (e) => {
            const target = e.target.closest('.counter__plus')
            if(!target) return
            const input = target.previousElementSibling;
            input.stepUp();
        })
    })

    minus.forEach((el) => {
        el.addEventListener('click', (e) => {
            const target = e.target.closest('.counter__minus')
            if(!target) return
            const input = target.nextElementSibling;
            input.stepDown();
        })
    })

}