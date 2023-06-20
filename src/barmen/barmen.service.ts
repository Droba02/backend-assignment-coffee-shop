import { Injectable } from "@nestjs/common";

@Injectable()
export class BarmenService{

    public baristas: Barista[]=[]
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
        let minTime = 15000000;
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
        }

        setInterval(() =>{
            if(this.orders.length != 0){
                this.getBarista(this.orders[0])
                this.orders.shift
            }
        }, this.getMinTime())

        return 1
    }

    toGoOrder(order: {amount: number, time : number}){
        let res = this.getBarista(order);
        if(!res){

            if(this.orders.length < 5) this.orders.push(order);
            else{
                 return -1;
            }
        }

        setInterval(() =>{
            if(this.orders.length != 0){
                this.getBarista(this.orders[0])
                this.orders.shift
            }
        }, this.getMinTime())

        return 1
    }


}

