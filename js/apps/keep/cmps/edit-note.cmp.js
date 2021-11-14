import { eventBus } from '../../../services/event-bus-service.js';

export default {
    name: 'edit-note',
    props: ['note'],
    template: `
            <div class="edit-note">
                <hr>
                <input type=color @input="changeColor()" v-model="currNote.style.color">
                <i @click="remove(note.id)" class="far fa-trash-alt"></i>
                <i @click="duplicate(note)" class="fas fa-copy"></i>
                <i @click="pinnedNote(note)" class="fas fa-thumbtack pin" :class="{pinned: note.isPinned}"></i>
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
        pinnedNote(note) {
            eventBus.$emit('pinned', note);
        },

     },
     watch: {
        'currNote.info': {
            handler() {
                eventBus.$emit('updateTxt', this.currNote);

            },
            deep: true
        },
    },

}