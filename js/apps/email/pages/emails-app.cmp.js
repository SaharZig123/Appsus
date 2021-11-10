import { emailService } from '../email-service.js'
import emailList from '../cmps/email-list.cmp.js'


export default {
    template: `
        <section class="emails-app">
            <email-list {{emails}}/>
        </section>
    `,

    data() {
        return {
            emails: null,
        }
    },

    created() {
        this.loadEmails
    },

    methods: {
        loadEmails() {
            emailService.query()
            then(emails => this.emails = emails)
        }
    },

    components: {
        emailList
    }
}