import emailsPreview from '../cmps/emails-preview.cmp.js'

export default {
    props: ['emails'],
    template: `
    <section class="email-list">
        <ul>
            <li v-for="email in emails" :key="email.id" class="email-preview-container">
                <input type="checkbox">
                <section  @click="openEmail(email)">
                    <emails-preview :email="email"  ></emails-preview>
                </section>
            </li>
        </ul>
    </section>
    `,


    methods:{
        openEmail(email){
            this.$emit('emailIsRead',email)
            this.$router.push('/email/'+email.id);
        }
    },


    components: {
        emailsPreview
    }
}