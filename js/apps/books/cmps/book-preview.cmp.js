
export default {
    props: ['book'],
    template: `
        <div class="book-preview">
            <p>Title: {{book.title}}</p>
            <p>Price: {{book.listPrice.amount}}<span> {{priceCurrency}}</span></p>
            <img :src="book.thumbnail"/>

        </div>
    `,
    data() {
        return {
            currency: this.book.listPrice.currencyCode
        }
    },
    computed: {
        priceCurrency() {
            let currCurrency = '';
            if (this.currency === 'EUR') currCurrency = '€';
            else if (this.currency === 'USD') currCurrency = '$';
            else if (this.currency === 'ILS') currCurrency = '₪';
            return currCurrency;
        }
    }
}