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
        console.log("books o", books);
        console.log("sum ", sum); // 6
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
                console.log("iiiii --",sum, i);
                set_price = ((i + 1) * this.bookPrice) * this.discount[i];
                console.log("books be", books);
                other_price = this.combine(Array.from(books));
                console.log("best_price old", best_price);
                best_price = Math.min(other_price + set_price);
                console.log("set_price ", set_price);
                console.log("other_price ", other_price);
                console.log("best_price ", best_price);
                console.log("books af", books);
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
        console.log(this.bookBuyCount);
        price = this.combine(Array.from(this.bookBuyCount));
        // for (let idx = 0; idx < this.bookSize; idx++)
        // {
        //     price += (this.bookPrice * this.bookBuyCount[idx])
        // }
        return price;
    }
}
