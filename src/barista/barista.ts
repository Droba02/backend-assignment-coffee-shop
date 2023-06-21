import { Logger } from "@nestjs/common";

export class Barista{

    public id: number;
    constructor(id: number,public isAvailable = true, public coffeeAmount = 300,public timeBusy = 0){
        this.id = id;
    }

    makeOrder(amount:number, time:number): void{
        this.coffeeAmount -= amount
        this.timeBusy = time*1000;
        this.isAvailable = false;
        Logger.log(`${time} ,  ${this.timeBusy}  time and timebusy`)
        Logger.log(`Barista number ${this.id} making coffee`)

        setTimeout(() =>{
            this.isAvailable = true;
            this.timeBusy = 0;
            Logger.log(`Barista number ${this.id} finished coffee, ${this.coffeeAmount}g left`)
        }, this.timeBusy);
    }

    refillCoffee(){
        this.timeBusy = 2 * 60*1000;
        this.coffeeAmount = 300;
        this.isAvailable = false;

        Logger.log(`Barista number ${this.id} is refilling coffee`)

        setTimeout(() =>{
            this.isAvailable = true;
            this.timeBusy = 0;
            Logger.log(`Barista number ${this.id} finished refilling coffee`)
        }, this.timeBusy);

    }
    

}