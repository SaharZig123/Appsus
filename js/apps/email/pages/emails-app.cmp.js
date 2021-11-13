import { emailService } from '../../../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js'
import unreadCounter from '../cmps/unread-counter.cmp.js'
import emailFilter from '../cmps/emails-filter.cmp.js'


export default {
    template: `
        <section class="emails-app">
            <nav>
            <router-link to="/email/new">Compose +</router-link>
            <router-link @click.native="showSent" to="/email/sent">Sent</router-link>
            <section class="inbox">
                <router-link @click.native="showIncoming" to="/email">Incoming</router-link>
                <unread-counter v-show="!sentFolder"  v-if="emails" :emails="emails"/>
            </section>
            </nav>
            <section v-if="!sentFolder" class="inbox">
            <email-filter @filtered="setFilter" />
            <email-list @remove="deleteEmail" v-if="emails"   @emailIsRead="emailIsRead" :emails="emailsToShow"/>
            </section>
            <router-view></router-view>
        </section>
    `,

    data() {
        return {
            emails: this.showIncoming(),
            filterBy: null,
            sentFolder:false
        }
    },

    created() {
    },

    methods: {
        showIncoming() {
            this.sentFolder=false
            emailService.query()
                .then(emails => this.emails = emails.filter(email => { return !email.sent }))
        },

        emailIsRead(emailId) {
            const idx = this.emails.findIndex(email => email.id === emailId);
            if(this.emails[idx].sent) return
            this.emails[idx].isRead = true
            emailService.save(this.emails[idx])
        },

        deleteEmail(emailId) {
            emailService.remove(emailId)
                .then(() => this.showIncoming())

        },

        setFilter(filterBy) {
            this.filterBy = filterBy
        },

        showSent(){
            this.sentFolder=true
        },







    },

    computed: {
        emailsToShow() {
            if (!this.filterBy) return this.emails;
            const searchStr = this.filterBy.txt.toLowerCase();
            let emailsToShow = this.emails.filter(email => {
                return email.from.toLowerCase().includes(searchStr) ||
                       email.subject.toLowerCase().includes(searchStr)||
                       email.body.toLowerCase().includes(searchStr)
            });

            if(this.filterBy.filterOption==='all') return emailsToShow

            if(this.filterBy.filterOption==='read'){
                emailsToShow=emailsToShow.filter(email=>{
                    return email.isRead
                })
                return emailsToShow
            }
            
            if(this.filterBy.filterOption==='unRead'){
                emailsToShow=emailsToShow.filter(email=>{      
                    return !email.isRead
                })
                return emailsToShow
            }
            return emailsToShow
        
        }
    },

    components: {
        emailList,
        unreadCounter,
        emailFilter
    }
}