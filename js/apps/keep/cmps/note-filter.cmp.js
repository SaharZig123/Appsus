export default {
    template: `
        <div class="note-filter">
            <label>Find your notes:</label>
            <input @input="filter" v-model="filterBy.txt" type="text" placeholder="Find a note...">
            <button @click="filter"> Filter </button>
        </div>
    `,
    data() {
        return {
            filterBy: {
                txt: ''
            }
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', { ...this.filterBy });
        
        }
    }
}