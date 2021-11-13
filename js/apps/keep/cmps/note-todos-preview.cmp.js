import editNote from './edit-note.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';


export default {
    name: 'note-todos-preview',
    props: ['note','todos'],
    template: `
        <div class="note-todos-preview note-preview " :style="{backgroundColor: currNote.note.style.color}">
            <section v-if="note.info">
            <h5 contenteditable>{{note.info.label}}</h5>
                <ul v-for="(todo,idx) in todos">
                    <li> 
                        <p :class="isDoneTodo" contenteditable v-model="currTodo" >{{todo.txt}}</p>
                        <button class="note-delete-btn" @click="markDoneTodo(idx)">X</button>
                        <br>
                        <span v-if="todo.doneAt">Done at: {{todo.doneAt}}</span>
                    </li>
                </ul>
            </section>
            <edit-note :note="note"></edit-note>

        </div>
    `,
    data() {
        return {
            currNote: {
                note: this.note,
            },
            currTodo: {
                txt: currTodo.innerText,
                isDone: false
            }
            }
        
    },

    watch: {
        'currTodo.txt'(newVal, oldVal) {
            console.log('txt has changed!');
            console.log('was', oldVal, 'now is', newVal);
        },
    },
    
    methods: {
      
       markDoneTodo(idx) {
        this.currTodo.isDone=!this.currTodo.isDone;
            if (this.currNote.isDone) this.currNote.note.info.todos[idx].doneAt = this.getDate();
            else this.currNote.note.info.todos[idx].doneAt = null;
            console.log(this.note);
           eventBus.$emit('markDone', this.currNote.note);
       },
       getDate() {
           let currDate = new Date().toString().split(' ')[1] + ' ' + 
                        new Date().toString().split(' ')[2] + ' ' +
                            new Date().toString().split(' ')[3];
            return currDate;
       }
    },
    computed: {
        isDoneTodo() {
            return {active: !this.currTodo.isDone, done: this.currTodo.isDone}
        }
    },
    components: {
        editNote
    }
    

}