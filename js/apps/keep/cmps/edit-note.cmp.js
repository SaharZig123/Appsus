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
                <i class="fas fa-thumbtack"></i>
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

     },
     watch: {
        'currNote.info': {
            handler() {
                console.log('currNote has changed!');
                eventBus.$emit('updateTxt', this.currNote);

            },
            deep: true
        },
    },

}