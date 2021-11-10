import emailsPreview from '../cmps/emails-preview.cmp'

export default {
    props:['emails'],
    template:`
    <section class="email-list">
        <h2>Emails</h2>
        <ul>
            <li v-for="email in emails" :key="email.id" class="email-preview-container">
               <emails-preview :email="email"></emails-preview>
            </li>
        </ul>
    </section>
    `
}