export default {
    // props: ['book'],
    template: `
        <div class="review-add">
            <form>
                <input v-ref="fullName" type="text" v-model="full-name" placeholder="Full name">
                <input type="date" placeholder={{Date.now}}>
                <textarea type="text" v-model="reviewTxt"></textarea>
            </form>
        </div>
    `,
    data() {

    },
    mounted() {
        this.$refs.fullName.focus();
    },
    computed: {

    }

}