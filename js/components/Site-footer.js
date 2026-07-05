class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="page-footer">
            <p>&copy; PokeWeather - Todos os direitos reservados 2026</p>
        </footer>`
        ;
    }
}

customElements.define("site-footer", SiteFooter)