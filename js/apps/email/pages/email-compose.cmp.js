import { emailService } from '../../../services/email-service.js'
import { eventBus } from '../../../services/event-bus-service.js';

export default {
    template: `
    <section v-if="newEmail" class="new-mail-container">

        <header class="compose-header">
            <h4>New message</h4>
            <button @click="close">X</button>
        </header>
    
        <section   class="new-email">

                <input v-model="newEmail.to" type="email" class="to" placeholder="To">  
                <input v-model="newEmail.subject" type="text" class="subject" placeholder="Subject">  

                <textarea v-model="newEmail.body" cols="40" rows="10"> </textarea>
                <section class="tools">
                  <button @click="send" class="send">Send</button>
                </section>
        </section>


    


    </section>

    `,

    data() {
        return {
            newEmail: null,
            composeShowen:true
        }
    },

    created() {
        this.newEmail = emailService.getEmptyEmail()
    },

    methods: {
        send() {
            this.newEmail.sentAt = new Date().toDateString()
            emailService.save(this.newEmail)
                .then(newEmail => {
                    this.$router.push('/email')
                    eventBus.$emit('loadIncoming')
                });
        },

        close(){
            this.$router.push('/email')
            eventBus.$emit('loadIncoming')
        }

    },

}