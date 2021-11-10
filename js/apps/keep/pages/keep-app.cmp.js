import { noteService } from '../../../services/note-service.cmp.js'
import noteList from '../cmps/note-list.cmp.js';
import noteFilter from '../cmps/note-filter.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';


export default {
    template: `
        <section class="keep-app">
            <h1>Keep App!</h1>
            <note-filter @filtered="setFilter" />
            <note-list :notes="notesToShow"></note-list>
        </section>
    `,
    data() {
        return {
            notes: noteService.query(),
            filterBy: null,
            selectedNote: null
            // noteColor: ''
        };
    },
    created() {
        this.loadNotes()
        eventBus.$on('changeColor', this.changeColor)
        
    },

    methods: {
        loadNotes() {
            noteService.query()
                .then(notes => {
                    this.notes = notes
                    console.log(this.notes);
                })
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        changeColor(note) {
            noteService.changeNoteColor(note)
        }


    },
    
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes;
            const { txt } = this.filterBy;
            const searchStr = txt.toLowerCase();
            const notesToShow = this.notes.filter(note => {
                return note.info.txt.toLowerCase().includes(searchStr)
            });
            return notesToShow;
        }

    },
    
    components: {
        noteList,
        noteFilter
    }
};




