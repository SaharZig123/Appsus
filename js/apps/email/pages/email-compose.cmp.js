import { emailService } from '../../../services/email-service.js'

export default {
    template: `
    <section v-if="newEmail" class="new-mail-container">

        <header class="compose-header">
            <h4>New message</h4>
            <router-link to="/email">X</router-link>
        </header>
    
        <section   class="new-email">


                <input v-model="newEmail.to" type="email" class="to" placeholder="To">  
                <input v-model="newEmail.subject" type="text" class="subject" placeholder="Subject">  

            <textarea v-model="newEmail.body" cols="40" rows="10"></textarea>
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