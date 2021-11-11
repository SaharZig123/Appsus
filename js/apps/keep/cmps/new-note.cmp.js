export default {
    name: 'new-note',
    template: `
        <section class="new-note">
            <h3>Add a new note:</h3>
            
            <button @click="selectTxtNote()">TEXT</button>
            <template  v-if="isTxt">
                 <input type="txt" v-model="txt" placeholder="Write your note...">
            </template>
            
            <button @click="selectImgNote()">IMAGE</button>
            <template  v-if="isImg">
                 <input type="txt" v-model="img.title" placeholder="Give a title to your photo...">
                 <input type="txt" v-model="img.url" placeholder="Enter image URL...">
            </template>
            
            <button @click="selectVideoNote()">VIDEO</button>
            <template  v-if="isVideo">
                 <input type="txt" v-model="video" placeholder="Enter video URL...">
            </template>
            
            <button @click="selectTodosNote()">TO-DO-LIST</button>
            <template v-if="isList">
                 <input type="txt" v-model="list.title" placeholder="Enter list title...">
                 <input type="txt" v-model="list.todos" placeholder="Enter comma separated list...">
            </template>
           
            <button @click="addNote">Add!</button>

        </section>
    `,
    data() {
        return {
            isTxt: false,
            isImg: false,
            isVideo: false,
            isList: false,
            txt: '',
            img: {
                title:'',
                url:''
            },
            video: '',
            list: {
                title:'',
                todos:''
            }


        };
    },
    methods: {
    selectTxtNote() {
        this.isTxt = true;
        console.log('texttttt')
        this.isImg = false;
        this.isVideo = false;
        this.isList = false;
    },
    selectImgNote() {
        this.isImg = true;
        console.log('image new')
        this.isTxt = false;
        this.isVideo = false;
        this.isList = false;
    },
    selectVideoNote() {
        this.isVideo = true;
        console.log('video new')
        this.isImg = false;
        this.isTxt = false;
        this.isList = false;
    },
    selectTodosNote() {
        this.isList-true;
        console.log('list new')
        this.isImg = false;
        this.isVideo = false;
        this.isTxt = false;

    },
    addNote() {
        if (this.isTxt) {
            console.log(this.txt)
            this.isTxt=false;
            const newNote = ['note-txt', this.txt]
            this.$emit('newNote',newNote)

        }
        else if (this.isImg) {
            this.isImg = false;
            const newNote = ['note-img', this.img]
            this.$emit('newNote',newNote)

        }
        else if (this.isVideo) {
            this.isVideo = false;
            const newNote = ['note-video', this.video]
            this.$emit('newNote',newNote)

        }
        else if (this.isList) {
            this.isList = false;
            const newNote = ['note-todos', this.list]
            this.$emit('newNote',newNote)

        }
        
    }
}

};