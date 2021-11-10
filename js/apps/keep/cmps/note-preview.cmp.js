import { eventBus } from '../../../services/event-bus-service.js';
import { noteService } from '../../../services/note-service.cmp.js';

export default {
    props: ['note'],
    template: `
        <div class="note-preview" :style="{backgroundColor: note.style.color}">
            <p v-if="note.info.txt">{{note.info.txt}}</p>
            <div class="actions">
            <input type=color @input="changeColor()" v-model="currNote.color">
            </div>
        </div>
    `,
    data() {
        return {
            currNote: this.note.style.color
            }
        
    },
    
    methods: {
       changeColor() {
        eventBus.$emit('changeColor', this.currNote );
       }
    },
    components: {
    }
    

}