export default {
    template: `
        <header class="app-header">
            <section class="header-content">
                <div class="logo">
                    <h3>Appsus</h3>
                </div>
                <nav class="main-nav">
                    <router-link to="/" active-class="active-link" exact>Home</router-link> |
                    <router-link :to="'/email'">Email</router-link> |
                    <router-link :to="'/note'">Keep</router-link>|
                    <router-link :to="'/book'">Books</router-link>|
                    <router-link to="/about">About</router-link> 
                </nav>
            </section>
        </header>
    `,
}