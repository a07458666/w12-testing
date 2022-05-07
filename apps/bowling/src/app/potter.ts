export class Potter {
    private bookBuyCount: number[] = [0, 0, 0, 0, 0, 0];
    private bookSize = 5;
    private bookPrice = 8;
    private discount = [1, 0.95, 0.9, 0.8, 0.75];
    
    buy(id: number, count: number) {
        this.bookBuyCount[id] += count;
    }

    combine(books: number[]){
        books.sort().reverse();
        const sum = books.reduce((partialSum, a) => partialSum + a, 0);
        if (sum == 0)
        {
            return 0;
        }
        var best_price = 99999;
        for (var i = 0; i < this.bookSize; ++i)
        {
            var set_price = 0;
            var other_price = 0;
            if (books[i] > 0)
            {
                books[i]--;
                set_price = ((i + 1) * this.bookPrice) * this.discount[i];
                other_price = this.combine(Array.from(books));
                best_price = Math.min(other_price + set_price, best_price);
            }
            else{
                break;
            }
        }
        return best_price;
    }

    get price() {
        let price = 0;
        this.bookBuyCount.sort().reverse();
        price = this.combine(Array.from(this.bookBuyCount));
        return price;
    }
}
