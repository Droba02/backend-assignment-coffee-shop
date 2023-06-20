import { Injectable } from "@nestjs/common";
import { BarmenService } from "src/barmen/barmen.service";
import { CoffeeSerivce } from "src/coffee/coffee.service";



@Injectable()
export class OrderService{
    constructor(private coffeService : CoffeeSerivce, private barmenService : BarmenService){}

    makeOrderTable(ids:  number[]){
        const order = {
            amount : 0,
            time : 0
        }

        ids.forEach((id) => {
        
            this.coffeService.findOne(id).then(
                (res) =>{
                    order.amount += res.amount
                    order.time += res.time
                }
            )
        })

        this.barmenService.order(order);
    }
}