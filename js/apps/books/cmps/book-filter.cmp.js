export default {
    template: `
        <div class="book-filter">
            <label>Search: </label>
            <input @input="filter" v-model="filterBy.title" type="text" placeholder="Search...">
            <input v-model.number="filterBy.fromPrice" type="number" placeholder="From price">
            <input v-model.number="filterBy.toPrice" type="number" placeholder="To price">
            <button @click="filter"> Filter </button>
        </div>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                fromPrice: '',
                toPrice: ''
            }
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', { ...this.filterBy });
        
        }
    }
}