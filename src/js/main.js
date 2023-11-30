document.documentElement.classList.add('js-enabled');

const hoverEffect = {
    init() {
        this.titleStr = document.querySelector('.jump').textContent;
        this.title = document.querySelector('.jump');
        this.hover();
    },
    hover() {
        this.title.textContent = '';

        for (let i = 0; i < this.titleStr.length; i++) {
            if (this.titleStr.charAt(i) === ' ') {
                this.title.insertAdjacentHTML('beforeend', `<span>\u00A0</span>`);
            }
            this.title.insertAdjacentHTML('beforeend', `<span>${this.titleStr.charAt(i)}</span>`)
        }
    },
};

hoverEffect.init();