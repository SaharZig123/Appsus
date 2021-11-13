
export default {
    props: ['emails'],
    template: `
<section class="unread-counter">
<h2>Unread: <span>{{unreadCount}}</span></h2>
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
            this.emails.forEach(email => {
                if (!email.isRead) this.unreadCount++
            })
        },      
    },

    watch:{
        emails: function() { 
            this.unreadCount=0
            this.unreadCounter()
          }
    }
}



