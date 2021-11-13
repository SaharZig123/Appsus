import editNote from './edit-note.cmp.js'


export default {
    name: 'note-img-preview',
    props: ['note'],
    template: `
        <div class="note-img-preview note-preview" :style="{backgroundColor: currNote.style.color}">
            <section v-if="note.info">
                <img :src="note.info.url">
                <h2 contenteditable @blur="saveTitle($event.target)"> {{note.info.label}} </h2>
            </section>
            <edit-note :note="note"></edit-note>
        </div>
    `,
    data() {
        return {
            currNote: this.note
        }
    },

    methods: {
        saveTitle(ev) {
            this.currNote.info.label = ev.innerText;
        }
    },

    components: {
        editNote
    }


}