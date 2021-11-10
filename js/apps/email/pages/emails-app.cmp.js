import { emailService } from '../../../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js'


export default {
    template: `
        <section class="emails-app">
            <email-list @emailIsRead="emailIsRead" :emails="emails"/>
        </section>
    `,

    data() {
        return {
            emails: null,
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
        },

        emailIsRead(email){
            console.log(this.emails[email])
        }

    
    },

    components: {
        emailList
    }
}