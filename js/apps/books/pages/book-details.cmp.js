import longText from '../cmps/long-text.cmp.js';
import { bookService } from '../../../services/books.service.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
    props: ['book'],
    template: `
        <section class="book-details app-main">
            <h3>Book Details:</h3>
            <img class="sale-img" :src="saleSign" v-if="book.listPrice.isOnSale">
            <p>Title : {{book.title}}</p>
            <p :class="priceStyle">Price: {{book.listPrice.amount}}</p>
            <p>Authors : {{...book.authors}}</p>
            <p v-if="lengthMsg"> {{lengthMsg}}</p>
            <p v-if="isNewMsg"> {{isNewMsg}}</p>
            <long-text v-bind:txt="book.description"></long-text>
            <router-link :to="'/book'" >Back to book list</router-link>

        </section>
    `,
    data() {
        return {
            saleSign: 'img/sale.png'
        }
    },
    created() {
        const { bookId } = this.$route.params
        bookService.getById(bookId)
            .then(book => this.book = book)
    },
    computed: {
        lengthMsg() {
            let msg = '';
            if (this.book.pageCount > 500) msg = 'Long reading';
            else if (this.book.pageCount > 200) msg = 'Decent Reading';
            else if (this.book.pageCount < 100) msg = 'Light Reading';
            return msg;
        },
        isNewMsg() {
            let msg = '';
            let currYear = (new Date).getYear()+1900;
            let diff = currYear - this.book.publishedDate;
            if (diff >10) msg = 'Veteran Book';
            else if (diff < 1) msg = 'New!';
            return msg;
        },
        priceStyle() {
            return {
                low: this.book.listPrice.amount <20,
                high: this.book.listPrice.amount >150
            };
        }
    },

    components: {
        longText,
        eventBus
    }
}