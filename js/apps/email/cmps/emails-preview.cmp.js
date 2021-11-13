

export default {
    props: ['email'],
    template: `
        <section class="email-preview">
           <p class="preview-to-from bold" v-if="email.sent">{{email.to}}</p>
           <p class="preview-to-from bold" v-else>{{email.from}}</p>
           <p class="preview-subject bold">{{email.subject}}</p>
           <p class="preview-body">{{previewBody}}</p>
           <p class="preview-sent-at">{{email.sentAt}}</p>
        </section>
    `,

    data(){
        return{
            previewBody:''
        }
    },

    created(){
        this.getPreviewBody()

    },

    methods:{
        getPreviewBody(){
            this.previewBody=this.email.body.slice(0,20)
        }
    }


}