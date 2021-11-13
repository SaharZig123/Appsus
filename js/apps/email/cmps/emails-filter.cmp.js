

export default {
    template: `
        <div class="email-filter">
            <label>
                Search:
                <input @input="filter"  v-model="filterBy.txt" type="text" placeholder="Search...">
            </label>
            <label>
                Filter by
                <select @change="filter" v-model="filterBy.filterOption" >
                <option value="read">Read</option>
                <option value="unRead">Unread</option>
                <option value="all"  >All</option>
            </select>
            </label>

        </div>
    `,
    data() {
        return {
            filterBy: {
                txt: '',
                filterOption: 'all'
            }
        }
    },
    methods: {
        filter() {
            this.$emit('filtered', { ...this.filterBy })
        }
    }
}