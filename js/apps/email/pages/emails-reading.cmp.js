import { emailService } from '../../../services/email-service.js'


export default {
    template: `
    <section v-if="email" class="email-container">

    <router-link to="/email">X</router-link>

    


       <div class="subject-container">
         <h3 class="email-subject">{{email.subject}}</h3>
       </div>

       <div class="email-details">
           <h4 class="from">{{email.from}}</h4>
           <p class="date">{{email.sentAt}}</p>
       </div>

       <div class="email-body-container">
           <p class="email-body">{{email.body}}</p>
       </div>

    </section>
    `,

    data() {
        return {
            email: null,
            // nextEmailId: null
        }
    },

    methods: {


    },

    created() {

    },

    watch: {
        '$route.params.emailId': {
            handler() {
                const { emailId } = this.$route.params;
                emailService.getById(emailId)
                    .then(email => {
                        this.email = email
                    });
            },
            immediate: true
        }
    }
}
