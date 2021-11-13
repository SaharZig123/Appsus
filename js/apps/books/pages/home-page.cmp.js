export default {
    template: `
        <section class="home-page app-main">
          
               <h1><strong> Welcome to our Books Shop</strong></h1> 
                <div class="links">
                    <strong>
                        <router-link :to="'/about'">About us </rauter-link>|<router-link :to="'/book'">Book list </rauter-link>
                    </strong>
                </div>
        </section>
    `
}