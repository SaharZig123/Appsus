import { emailService } from '../../../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js'


export default {
    template: `
        <section class="emails-app">
            <email-list :emails="emails"/>
        </section>
    `,

    data() {
        return {
            emails: [],
        }
    },

    created() {
        this.loadEmails()
    },

    methods: {
        loadEmails() {
            emailService.query()
            .then(emails => {
                this.emails = emails
                console.log(this.emails)
            })
        }
    },

    components: {
        emailList
    }
}