
export class Barista{


    constructor(public isAvailable = true, public coffeeAmount = 300,public timeBusy = 0){}

    makeOrder(amount:number, time:number): void{
        this.coffeeAmount -= amount
        this.timeBusy = time;
        this.isAvailable = false;

        setTimeout(() =>{
            this.isAvailable = true;
            this.timeBusy = 0;
        }, time);
    }

    refillCoffee(){
        this.timeBusy = 2 * 60 *1000;
        this.coffeeAmount = 300;
        this.isAvailable = false;

        setTimeout(() =>{
            this.isAvailable = true;
            this.timeBusy = 0;
        }, this.timeBusy);

    }
    

}