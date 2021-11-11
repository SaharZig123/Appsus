import { noteService } from '../../../services/note-service.cmp.js'
import noteList from '../cmps/note-list.cmp.js';
import noteFilter from '../cmps/note-filter.cmp.js';
import newNote from '../cmps/new-note.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';


export default {
    name: 'keep-app',
    template: `
        <section class="keep-app">
            <new-note></new-note>
            <note-filter @filtered="setFilter" />
            <note-list :notes="notesToShow"></note-list>
        </section>
    `,
    data() {
        return {
            notes: noteService.query(),
            filterBy: null,
            selectedNote: null
        };
    },
    created() {
        this.loadNotes()
        eventBus.$on('changeColor', this.changeColor)
        eventBus.$on('markDone', this.markDoneTodo)

        
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
        },
        markDone() {
            noteService.markDoneTodo(note)
        }


    },
    
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes;
            const { txt } = this.filterBy;
            const searchStr = txt.toLowerCase();
            const notesToShow = this.notes.filter(note => {
                return note.info.txt.toLowerCase().includes(searchStr) || 
                        note.info.label.toLowerCase().includes(searchStr) 
                        // || note.info.todos.toLowerCase().includes(searchStr) 
            });
            return notesToShow;
        }

    },
    
    components: {
        noteList,
        noteFilter,
        newNote
    }
};




