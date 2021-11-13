import { eventBus } from '../../../services/event-bus-service.js';

export default {
    name: 'edit-note',
    props: ['note'],
    template: `
            <div class="actions">
                <input type=color @input="changeColor()" v-model="currNote.style.color">
                <button @click="remove(note.id)" >X</button>
                <button @click="duplicate(note)" >Duplicate</button>
            </div>
    `,

    data() {
        return {
            currNote: this.note,
        }
    },
    methods: {
        changeColor() {
            eventBus.$emit('changeColor', this.currNote);
        },
        remove(noteId) {
            eventBus.$emit('remove', noteId);
        },
        duplicate(note) {
            eventBus.$emit('duplicate', note);
        },

     }

}