import emailsPreview from '../cmps/emails-preview.cmp.js'

export default {
    props: ['emails'],
    template: `
    <section class="email-list">
        <ul>


            <li v-for="email in emails" :key="email.id" :class="{isRead : email.isRead}" class="email-preview-container">
                    <emails-preview :email="email" @click.native="openEmail(email.id)" ></emails-preview>
                    <i @click="remove(email.id)" class="far fa-trash-alt"></i>
            </li>
        </ul>
    </section>
    `,



    methods: {
        openEmail(emailId) {
            this.$emit('emailIsRead', emailId)
            this.$router.push('/email/' + emailId);
        },
        remove(emailId) {
            this.$emit('remove', emailId);
        },

    },


    components: {
        emailsPreview
    }
}