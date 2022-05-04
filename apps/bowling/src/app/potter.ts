export class Potter {
    private bookBuyCount: number[] = [0, 0, 0, 0, 0, 0];
    private bookSize = 5;
    private bookPrice = 8;
    buy(id: number, count: number) {
        this.bookBuyCount[id] += count;
    }

    get price() {
        let price = 0;
        for (let idx = 0; idx < this.bookSize; idx++)
        {
            price += (this.bookPrice * this.bookBuyCount[idx])
        }
        return price;
    }
}
