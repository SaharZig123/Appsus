import { eventBus } from '../../../services/event-bus-service.js';

export default {
    name: 'note-video-preview',
    props: ['note'],
    template: `
        <div class="note-video-preview note-preview" :style="{backgroundColor: currNote.style.color}">
            <section v-if="note.info">
                <div class="video-player">
                    <iframe width="300" height="250" :src="note.info.URL">
                    </iframe>
                </div>
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