import notePreview from './note-preview.cmp.js';

export default {
    props: ['notes'],
    template: `
        <ul class="note-list">
            <li v-for="note in notes" :key="note.id" class="note-preview" >
            <router-link :to="'/note/'+note.id" >
                <note-preview :note="note" @click.native="select(note)"/> 
            </router-link>  
            </li>
        </ul>
    `,
   
    components: {
        notePreview
    }
};