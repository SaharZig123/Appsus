import editNote from './edit-note.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';


export default {
    name: 'note-todos-preview',
    props: ['note', 'todos'],
    template: `
        <div class="note-todos-preview note-preview " :style="{backgroundColor: currNote.style.color}">
            <section v-if="note.info">
            <h5 contenteditable @blur="saveLabel($event.target)" class="editable todo-label">{{note.info.label}}</h5>
                <ul v-for="(todo,idx) in todos">
                    <li> 
                        <section class="todo">
                            <p contenteditable @blur="saveTodo($event.target,idx)" class="editable" :class="{done:todo.doneAt}">{{todo.txt}}</p>
                            <button class="note-delete-btn" @click="markDoneTodo(idx)">X</button>
                        </section>
                        <span class="done-at" v-if="todo.doneAt">Done at: {{todo.doneAt}}</span>
                    </li>
                </ul>
            </section>
            <edit-note :note="note"></edit-note>

        </div>
    `,
    data() {
        return {
            currNote: this.note,

        }
    },

    methods: {

        markDoneTodo(idx) {
            if (!this.currNote.info.todos[idx].doneAt) {
                this.currNote.info.todos[idx].doneAt = this.getDate();
            }
            else {
                this.currNote.info.todos[idx].doneAt = null;
            }
        },
        getDate() {
            let currDate = new Date().toString().split(' ')[1] + ' ' +
                new Date().toString().split(' ')[2] + ' ' +
                new Date().toString().split(' ')[3];
            return currDate;
        },
        saveLabel(ev) {
            this.currNote.info.label = ev.innerText;
        },
        saveTodo(ev, idx) {
            this.currNote.info.todos[idx].txt = ev.innerText;
        }
    },
    
    components: {
        editNote
    }


}