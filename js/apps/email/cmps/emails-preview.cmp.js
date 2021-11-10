

export default {
    props: ['email'],
    template: `
        <section class="email-preview">
           <p>{{email.to}}</p>
           <p>{{email.subject}}</p>
           <p>{{email.body}}</p>
        </section>
    `,
}