import editNote from './edit-note.cmp.js'

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
            <edit-note :note="note"></edit-note>

        </div>
    `,
    data() {
        return {
            currNote: this.note
            }
        
    },
    
    components: {
        editNote
    }
    
}