import { noteService } from '../apps/keep/services/note-service.cmp.js'
import noteList from '../apps/keep/cmps/note-list.cmp.js';


export default {
    template: `
        <section class="note-app">
            <!-- <note-filter @filtered="setFilter" /> -->
            <note-list :notes="notes"></book-list>
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
    },
      
    methods: {
        loadNotes() {
            noteService.query()
                .then(notes => this.notes = notes)
                console.log(this.notes);
        },
        // setFilter(filterBy) {
        //     this.filterBy = filterBy;
        // },
       
  
    },
    computed: {
   
    },
    components: {
       noteList
    }
};





