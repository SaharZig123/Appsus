import { eventBus } from '../../../services/event-bus-service.js';

export default {
    name: 'note-txt-preview',
    props: ['note'],
    template: `
        <div class="note-txt-preview note-preview" :style="{backgroundColor: currNote.style.color}">
            <p v-if="note.info.txt">{{note.info.txt}}</p>
            <div class="actions">
            <input type=color @input="changeColor()" v-model="currNote.style.color">
            </div>
        </div>
    `,
    data() {
        return {
            currNote: this.note
            }
        
    },
    
    methods: {
       changeColor() {
        eventBus.$emit('changeColor', this.currNote );
        console.log(this.currNote.style.color);
       }
    }    

}