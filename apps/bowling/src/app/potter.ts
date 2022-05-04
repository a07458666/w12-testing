export class Potter {
    private bookCoubt: number[] = [];

    buy(bookID: number, bookCount: number) {
        this.bookCoubt[bookID] += bookCount;
    }

    get price() {
        let price = 0;
        return price;
      }
}
