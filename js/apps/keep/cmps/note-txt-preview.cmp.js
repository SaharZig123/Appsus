import { eventBus } from '../../../services/event-bus-service.js';
import editNote from './edit-note.cmp.js'

export default {
    name: 'note-txt-preview',
    props: ['note'],
    template: `
        <div class="note-txt-preview note-preview" :style="{backgroundColor: currNote.style.color}">
            <p v-if="note.info.txt" contenteditable @blur="save($event.target)" >{{note.info.txt}}</p>
            <edit-note :note="note"></edit-note>
        </div>
    `,
    data() {
        return {
            currNote: this.note,
        }
    },

    components: {
        editNote
    },
    methods: {
        save(ev) {
            this.currNote.info.txt = ev.innerText;
        }
    }

}