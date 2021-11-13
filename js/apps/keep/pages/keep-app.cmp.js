import { noteService } from '../../../services/note-service.cmp.js'
import noteList from '../cmps/note-list.cmp.js';
import noteFilter from '../cmps/note-filter.cmp.js';
import newNote from '../cmps/new-note.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';


export default {
    name: 'keep-app',
    template: `
        <section class="keep-app">
            <new-note @newNote="addNote"></new-note>
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
        eventBus.$on('remove', this.removeNote)
        eventBus.$on('duplicate', this.duplicateNote);
        
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
        },
        addNote(newNote) {
            const note = noteService.getEmptyNote(...newNote);
            console.log(note)
            noteService.save(note);
            this.loadNotes();
        },
        removeNote(id) {
            noteService.remove(id)
                .then(() => {
                    const msg = {
                        txt: 'Deleted succesfully',
                        type: 'success'
                    };
                    eventBus.$emit('showMsg', msg);
                    this.notes = this.notes.filter(note => note.id !== id)
                })
                .catch(err => {
                    console.log('err', err);
                    const msg = {
                        txt: 'Error. Please try later',
                        type: 'error'
                    };
                    eventBus.$emit('showMsg', msg);
                });
        },
        duplicateNote(note) {
            this.addNote(note);
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




