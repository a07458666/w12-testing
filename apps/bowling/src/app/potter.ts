export class Potter {
    private bookBuyCount: number[] = [0, 0, 0, 0, 0, 0];
    private bookSize = 5;
    private bookPrice = 8;
    private discount = [1, 0.95, 0.9, 0.8, 0.75];
    
    buy(id: number, count: number) {
        this.bookBuyCount[id] += count;
    }

    combine(books: number[]){
        const sum = books.reduce((partialSum, a) => partialSum + a, 0);
        var bestPrice = 99999;
        if (sum == 0) return 0;
        books.sort().reverse();
        
        for (var i = 0; i < this.bookSize; ++i)
        {
            var setPrice = 0;
            var otherPrice = 0;
            if (books[i] > 0)
            {
                books[i]--;
                setPrice = ((i + 1) * this.bookPrice) * this.discount[i];
                otherPrice = this.combine(Array.from(books));
                bestPrice = Math.min(otherPrice + setPrice, bestPrice);
            }
            else{
                break;
            }
        }
        return bestPrice;
    }

    get price() {
        let price = 0;
        price = this.combine(Array.from(this.bookBuyCount));
        return price;
    }
}
