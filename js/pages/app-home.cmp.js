export default {
    template: `
        <section class="app-home app-main">
          
               <h1><strong> Welcome to Appsus</strong></h1> 
                <div class="links">
                    <strong>
                        <router-link :to="'/about'">About us</router-link>
                        <router-link :to="'/email'">Email</router-link>
                        <router-link :to="'/note'">Keep</router-link>
                        <router-link :to="'/book'">Books</router-link>
                    </strong>
                </div>
        </section>
    `
}