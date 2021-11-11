

export default {
    props: ['emails'],
    template: `
<section class="unread-counter">
<h2>{{unreadCount}}</h2>
</section>
`,

    data() {
        return {
            unreadCount: 0,
        }
    },

    created() {
        this.unreadCounter()
    },

    methods: {
        unreadCounter() {

            console.log(this.emails)
            for (let i = 0; i < this.emails.length; i++) {
                if (!this.emails[i].isRead) this.unreadCount++
            }
        }
    }



}