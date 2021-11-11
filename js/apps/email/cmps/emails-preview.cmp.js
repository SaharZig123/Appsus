

export default {
    props: ['email'],
    template: `
        <section class="email-preview">
           <p v-if="email.sent">{{email.to}}</p>
           <p v-else>{{email.from}}</p>
           <p>{{email.subject}}</p>
           <p>{{email.body}}</p>
        </section>
    `,
}