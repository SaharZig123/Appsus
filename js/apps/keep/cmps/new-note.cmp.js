export default {
    name: 'new-note',
    template: `
        <section class="new-note">
            <h3>Add a new note:</h3>
            
            <i @click="selectTxtNote()" class="far fa-edit"></i>
            <i @click="selectImgNote()" class="far fa-image"></i>
            <i @click="selectVideoNote()" class="far fa-file-video"></i>
            <i @click="selectTodosNote()" class="far fa-list-alt"></i>


            <form>
                <template  v-if="isTxt">
                     <input type="txt" v-model="txt" placeholder="Write your note...">
                </template>
            
                <template  v-if="isImg">
                    <input type="txt" v-model="img.label" placeholder="Give a title to your photo...">
                    <input type="txt" v-model="img.url" placeholder="Enter image URL...">
                </template>
            
                <template  v-if="isVideo">
                    <input type="txt" v-model="video" placeholder="Enter video URL...">
                </template>
            
                <template v-if="isList">
                    <input type="txt" v-model="list.title" placeholder="Enter list title...">
                    <input type="txt" v-model="list.todos" placeholder="Enter comma separated list...">
                </template>
                
                <i v-if="isTxt||isImg||isVideo||isList" @click="addNote()" @keyup.enter="addNote()" class="far fa-paper-plane"></i>
                <!-- <input v-if="isTxt||isImg||isVideo||isList" type="submit" value="Add!" @click="addNote" @keyup.enter="submit"> -->
            </form>

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
                label:'',
                url:''
            },
            video: '',
            list: {
                label:'',
                todos:''
            }


        };
    },
    methods: {
    selectTxtNote() {
        this.isTxt = true;
        this.isImg = false;
        this.isVideo = false;
        this.isList = false;
    },
    selectImgNote() {
        this.isImg = true;
        this.isTxt = false;
        this.isVideo = false;
        this.isList = false;
    },
    selectVideoNote() {
        this.isVideo = true;
        this.isImg = false;
        this.isTxt = false;
        this.isList = false;
    },
    selectTodosNote() {
        this.isList-true;
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