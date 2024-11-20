export default function ibg() {
    let ibg = document.querySelectorAll('.ibg');
    for (const ibgElement of ibg) {
        const img = ibgElement.querySelector('img');
        const format = img.getAttribute('src').split('.').at(-1)
        const picture = ibgElement.querySelector('picture') ? ibgElement.querySelector('picture') : false;

        if (!img) return;
        if(format === 'svg' || !picture) {
            console.log('test');
            ibgElement.style.backgroundImage =
                'url(' + ibgElement.querySelector('img').getAttribute('src') + ')';
        } else  {
            ibgElement.style.backgroundImage =
                'url(' + ibgElement.querySelector('source').getAttribute('srcset') + ')';
        }

        picture.remove()
    }
}
