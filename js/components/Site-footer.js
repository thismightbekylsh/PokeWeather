class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="page-footer">
            <p>&copy; PokeWeather - Todos os direitos reservados 2026</p>
            <p>Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a></p>
        </footer>`
        ;
    }
}

customElements.define("site-footer", SiteFooter)