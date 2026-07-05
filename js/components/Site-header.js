class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="page-header">
            <div class="logo">
                <img src="./assets/images/logo.png" alt="Logo">
                <h2>Poke<span>Weather</span></h2>
            </div>

            <nav class="nav-header">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Biomas</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>

            <div class="user">
                <button class="btn secondary">Sign-in</button>
                <button class="btn highlight">Login</button>
            </div>
        </header>`
        ;
    }
}

customElements.define('site-header', SiteHeader)