import { emailService } from '../../../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js'
import unreadCounter from '../cmps/unread-counter.cmp.js'


export default {
    template: `
        <section class="emails-app">
            <nav>
            <router-link to="/email/new">Compose +</router-link>
            <router-link to="/email/sent">Sent</router-link>
            <unread-counter v-if="emails" :emails="emails"/>
            </nav>
            <email-list v-if="emails"  @emailIsRead="emailIsRead" :emails="emails"/>
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
                .then(emails => this.emails = emails.filter(email => { return !email.sent }))
        },

        emailIsRead(emailId) {
            const idx = this.emails.findIndex(email => email.id === emailId);
            this.emails[idx].isRead = true
            emailService.save(this.emails[idx])
        }


    },

    computed: {

    },

    components: {
        emailList,
        unreadCounter
    }
}