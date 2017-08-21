export class Task {

    constructor (public name: string,public qty : number,public price:number) {}
    toString () {
        return `Name: ${this.name}  Quantity:  ${this.qty}  Price:  ${this.price} Sum: ${this.qty*this.price}`
    }
    
    getName(){
        return this.name;
    }
     getQty(){
        return this.qty;
    }
    getPrice(){
        return this.price;
    }
   
   
}