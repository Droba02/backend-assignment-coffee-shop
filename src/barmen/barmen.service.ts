import { Injectable, Logger } from "@nestjs/common";
import { Barista } from "src/barista/barista";

@Injectable()
export class BarmenService{

    public baristas=[new Barista(1), new Barista(2), new Barista(3)]
    public orders = []
    public minInterval:number = 0


    addBarista(barista: Barista){
        this.baristas.push(barista);
    }

    getBarista( order: {amount: number, time : number}){
        
        for(let i = 0; i < this.baristas.length ; i++){
            let barista = this.baristas[i];
            if( barista.isAvailable){
                if(barista.coffeeAmount < order.amount){
                    barista.refillCoffee()
                    
                    continue
                }

                barista.makeOrder(order.amount, order.time)
                
                return true
            }
        }

        return false
    }

   getMinTime(){
        let minTime = this.baristas[0].timeBusy;
        this.baristas.forEach(barista => {
            if(barista.timeBusy < minTime){
                minTime = barista.timeBusy;
            }
        })

        return minTime;
    }

    tableOrder(order: {amount: number, time : number}){

        let res = this.getBarista(order);

        if(!res){
            this.orders.push(order);
            Logger.log("No baristas available, putting in que")
        }

        setTimeout(() =>{
            if(this.orders.length != 0){
                Logger.log("Barista became available, giving him the order")
                if(this.getBarista(this.orders[0])){
                    this.orders.shift()
                }else{
                    Logger.log("still waiting!")
                }
            }
        }, this.getMinTime())

    }

    toGoOrder(order: {amount: number, time : number}){
        let res = this.getBarista(order);
        if(!res){

            if(this.orders.length < 5) {
                Logger.log("No baristas available, putting in que")
                this.orders.push(order);
            }
        }

        setTimeout(() =>{
            if(this.orders.length != 0){
                Logger.log("Barista became available, giving him the order")
                if(this.getBarista(this.orders[0])){
                    this.orders.shift()
                }else{
                    Logger.log("still waiting!")
                }
            }
        }, this.getMinTime())

    }


}

