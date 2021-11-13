import { bookService } from '../../../services/books.service.js'
import bookFilter from '../cmps/book-filter.cmp.js';
import bookList from '../cmps/book-list.cmp.js'



export default {
    template: `
        <section class="book-app">
            <book-filter @filtered="setFilter" />
            <book-list :books="booksToShow"></book-list>

        </section>
    `,
    data() {
        return {
            books: bookService.query(),
            filterBy: null,
            selectedBook: null
        };
    },
    created() {
        this.loadBooks()
    },
      
    methods: {
        loadBooks() {
            bookService.query()
                .then(books => this.books = books)
                console.log(this.books);
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },

        closeDetails() {
            this.selectedBook = null;
        },
  
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            const {title, fromPrice, toPrice} = this.filterBy;
            const searchStr = title.toLowerCase();
            const booksToShow = this.books.filter(book => {
                return book.title.toLowerCase().includes(searchStr) &&
                book.listPrice.amount >= fromPrice &&
                book.listPrice.amount <= toPrice || !toPrice;
            });
            return booksToShow;
        }
   
    },
    components: {
       bookFilter,
       bookList

    }
};





