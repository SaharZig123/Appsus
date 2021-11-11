import { eventBus } from '../../../services/event-bus-service.js';

export default {
    name: 'note-img-preview',
    props: ['note'],
    template: `
        <div class="note-img-preview note-preview" :style="{backgroundColor: currNote.style.color}">
            <section v-if="note.info">
                <img :src="note.info.URL">
                <h2> {{note.info.txt}} </h2>
            </section>
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