import { Injectable } from "@nestjs/common";
import { BarmenService } from "src/barmen/barmen.service";
import { CoffeeSerivce } from "src/coffee/coffee.service";



@Injectable()
export class OrderService{
    constructor(private coffeService : CoffeeSerivce, private barmenService : BarmenService){}

    makeOrderTable(ids:  number[]){
        const orderObj = {
            amount : 0,
            time : 0
        }

        ids.forEach((id) => {
        
            this.coffeService.findOne(id).then(
                (res) =>{
                    orderObj.amount += res.amount
                    orderObj.time += res.time
                }
            )
        })

       return this.barmenService.tableOrder(orderObj);
    }

    makeOrderToGo(ids:  number[]){
        const orderObj = {
            amount : 0,
            time : 0
        }

        ids.forEach((id) => {
        
            this.coffeService.findOne(id).then(
                (res) =>{
                    orderObj.amount += res.amount
                    orderObj.time += res.time
                }
            )
        })

        return this.barmenService.toGoOrder(orderObj);
    }
}