export default {
    props: ['txt'],
    template: `
        <section class="long-text">
          <p>Book Description:<br>{{txtForDisplay}}</p>
          <button v-if="isLongTxt" @click="isExpand = !isExpand">{{buttonTxt}}</button>
        </section>
    `,
    data() {
        return {
            isExpand: false
        }
    },
    methods: {
      
    },
    computed: {
        txtForDisplay() {
            return this.isExpand ? this.txt : this.txt.slice(0,100);
        },
        buttonTxt() {
            return this.isExpand ? 'Show less' : 'Read more';
        },
        isLongTxt() {   
            return this.txt.length > 100
        }
       
        }



    
}