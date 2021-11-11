export default {
    name: 'new-note',
    template: `
        <section class="new-note">
            <h3>Add a new note:</h3>
            <form>
                <select v-model="newNote.type" >
                    <option value="note-txt">Text</option>
                    <option value="note-img">Image</option>
                    <option value="note-video">Video</option>
                    <option value="note-todos">To Do List</option>
                </select>
                
                <input v-if="newNote.type === 'note-txt'" v-model="newNote.info.txt" type="txt" placeholder="Write your note...">
                <input v-if="newNote.type === 'note-img'" v-model="newNote.info.title" type="txt" placeholder="Give a title to your photo...">
                <input v-if="newNote.type === 'note-img'" v-model="newNote.info.URL" type="txt" placeholder="Enter image URL...">
                <input v-if="newNote.type === 'note-video'" v-model="newNote.info.URL" type="txt" placeholder="Enter video URL...">
                <input v-if="newNote.type === 'note-todos'" v-model="newNote.info.txt" type="txt" placeholder="Enter comma separated list...">
                <button>Save</button>
            </form>
        </section>
    `,
    data() {
        return {
            newNote: {
                type: this.newNote.type
            },
        };
    },
    created() {
    }
};