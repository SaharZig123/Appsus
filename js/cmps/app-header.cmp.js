export default {
    template: `
        <header class="app-header">
            <div class="logo">
                <h3>Appsus</h3>
            </div>
            <nav>
                <router-link to="/" active-class="active-link" exact>Home</router-link> |
                <router-link to="/about">About</router-link>
            </nav>
        </header>
    `,
}