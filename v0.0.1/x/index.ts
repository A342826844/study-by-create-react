class X {
    constructor() {

    }

    /**
     * 
     * @param template 模板字符串
     * @param renderEl 渲染doom
     */
    render(template: string, renderEl: HTMLElement | null) {
        if (!renderEl || !(renderEl instanceof HTMLElement)) {
            throw new Error(`renderEl: ${renderEl} 不是HTMLElement`)
        }
        const $el = document.createElement('div');
        $el.innerHTML = template;
        renderEl.append($el);

        console.log(renderEl)
    }
}

export default X;
