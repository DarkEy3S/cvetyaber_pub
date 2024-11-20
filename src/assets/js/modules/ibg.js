export default function ibg() {
    let ibg = document.querySelectorAll('.ibg');
    for (const ibgElement of ibg) {
        const img = ibgElement.querySelector('img');
        if (!img) return;
        ibgElement.style.backgroundImage =
            'url(' + ibgElement.querySelector('img').getAttribute('src') + ')';
    }
}
