import { router } from './routes.js';
import appHeader from './cmps/app-header.cmp.js';
import appFooter from './cmps/app-footer.cmp.js';


const options = {
    el: '#app',
    router,
    template: `
        <section>
            <app-header />
            <router-view />
            <app-footer />
        </section>
    `,
    components: {
        appHeader,
        appFooter
    }
};

new Vue(options);
