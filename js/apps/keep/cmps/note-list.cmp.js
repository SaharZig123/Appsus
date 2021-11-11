import noteTxtPreview from './note-txt-preview.cmp.js';
import noteImgPreview from './note-img-preview.cmp.js';
import noteVideoPreview from './note-video-preview.cmp.js';
import noteTodosPreview from './note-todos-preview.cmp.js';
// import noteDynamicPreview from './note-dynamic-preview.cmp.js';

export default {
    name: 'note-list',
    props: ['notes'],
    template: `
        <ul class="note-list">
            <li v-for="note in notes" :key="note.id" class="note-preview" >
                <!-- <router-link :to="'/note/'+note.id" ></router-link>   -->
                <note-txt-preview v-if="note.type==='note-txt'":note="note"/> 
                <note-img-preview v-if="note.type==='note-img'" :note="note"/> 
                <note-video-preview v-if="note.type==='note-video'" :note="note"/> 
                <note-todos-preview v-if="note.type==='note-todos'" :note="note" :todos="note.info.todos"/> 
                <!-- <note-dynamic-preview :note="note" :todos="note.info.todos" /> -->
            </li>
        </ul>
    `,

    components: {
        noteTxtPreview,
        noteImgPreview,
        noteVideoPreview,
        noteTodosPreview,
        // noteDynamicPreview
    }
};