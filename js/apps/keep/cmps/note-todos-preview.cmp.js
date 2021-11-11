import { eventBus } from '../../../services/event-bus-service.js';

export default {
    name: 'note-todos-preview',
    props: ['note','todos'],
    template: `
        <div class="note-todos-preview note-preview " :style="{backgroundColor: currNote.style.color}">
            <section v-if="note.info">
            <h5>{{note.info.label}}</h5>
                <ul v-for="todo,idx in todos" key="todoIdx">
                    <li> 
                        <p :class="isDoneTodo">{{todo.txt}}</p>
                        <button class="delete-btn" @click="markDoneTodo(idx)">X</button>
                        <br>
                        <span v-if="todo.doneAt">Done at: {{todo.doneAt}}</span>
                    </li>
                </ul>
            </section>
            <div class="actions">
            <input type=color @input="changeColor()" v-model="currNote.style.color">
            </div>
        </div>
    `,
    data() {
        return {
            currNote: this.note,
            isDone: false
            }
        
    },
    
    methods: {
       changeColor() {
        eventBus.$emit('changeColor', this.currNote );
        console.log(this.currNote.style.color);
       },
       markDoneTodo(idx) {
           console.log(idx)
            this.isDone=!this.isDone;
            if (this.isDone) this.currNote.info.todos[idx].doneAt = new Date();
            else this.currNote.info.todos[idx].doneAt = null;
           eventBus.$emit('markDone', this.currNote);
       }
    },
    computed: {
        isDoneTodo() {
            return {active: !this.isDone, done: this.isDone}
        }
    }
    

}