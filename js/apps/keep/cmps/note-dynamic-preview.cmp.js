// import noteTxtPreview from './note-txt-preview.cmp.js';
// import noteImgPreview from './note-img-preview.cmp.js';
// import noteVideoPreview from './note-video-preview.cmp.js';
// import noteTodosPreview from './note-todos-preview.cmp.js';

// export default {
//     props: ['note','todos'],
//     template: `
//     <section class="note-dynamic-preview">
//         <h1>dynamic-test</h1>

//         <section>
//             <component v-for="(currCmp, idx) in cmps" 
//                         :is="currCmp.type"
//                         :props="currProps" 
//                         :data="currCmp.data" >
//             </component>
//         </section>

//     </section> 
//     `,
//     data() {
//         return {
//             cmps: [
//                 {
//                     type: 'note-txt-preview',
//                     data: {
//                         note: this.note
//                     }
//                 },
//                 {
//                     type: 'note-img-preview',
//                     data: {
//                         note: this.note
//                     }
//                 },
//                 {
//                     type: 'note-video-preview',
//                     data: {
//                         note: this.note
//                     }
//                 },
//                 {
//                     type: 'note-todos-preview',
//                     data: {
//                         note: this.note,
//                         todos: this.todos
//                     }
//                 }
//             ],
//         };
//     },
//     methods: {
  
//     },
//     created() {

//     },
//     computed: {
//         currProps() {
//             return {note: this.note, todos: this.todos};
//         }

//     },
//     watch: {

//     },
//     components: {
//         noteTxtPreview,
//         noteImgPreview,
//         noteVideoPreview,
//         noteTodosPreview
//     }
// }