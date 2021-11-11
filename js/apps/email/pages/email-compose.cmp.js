import { emailService } from '../../../services/email-service.js'

export default {
    template: `
    <section v-if="newEmail" class="new-mail-container">

        <header>
            <h4>New message</h4>
        </header>
    
        <section   class="new-email">
            <label for="">
                to:
                <input v-model="newEmail.to" type="email" class="to">  
            </label>

            <label >
            subject:
                <input v-model="newEmail.subject" type="text" class="subject">  
            </label>
            <textarea v-model="newEmail.body" name="email-body" id="email-body" cols="40" rows="10"></textarea>
        </section>
    
        <section class="tools">
            <button @click="send" class="send">Send</button>
        </section>

    </section>

    `,

    data() {
        return {
            newEmail: null
        }
    },

    created() {
        this.newEmail = emailService.getEmptyEmail()
        console.log(this.newEmail)
    },

    methods: {
        send() {
            this.newEmail.sentAt = new Date()
            emailService.save(this.newEmail)
                .then(newEmail => {
                    this.$router.push('/email')
                });
        }

    }
}