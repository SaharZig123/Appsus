import emailsPreview from '../cmps/emails-preview.cmp.js'
import { emailService } from '../../../services/email-service.js'


export default {
    template: `

    <section  class="sent-email-list">
        <ul>
            <li v-for="email in emailsSent" :key="email.id"  class="email-preview-container">
                    <emails-preview :email="email"  @click.native="openEmail(email.id)" ></emails-preview>
                    <i @click="deleteEmail(email.id)" class="far fa-trash-alt"></i>
            </li>
        </ul>
    </section>
    `,

    data() {
        return {
            emailsSent: null
        }
    },

    created() {
        this.loadEmails()
    },

    methods: {
        openEmail(emailId) {
            this.$emit('emailIsRead', emailId)
            this.$router.push('/email/' + emailId);
        },
        loadEmails() {
            emailService.query()
                .then(emails => {
                    this.emailsSent = emails.filter(email => { return email.sent === true })
                })
        },

        deleteEmail(emailId) {
            emailService.remove(emailId)
                .then(() => this.loadEmails())

        }


    },


    components: {
        emailsPreview,
    }

}

