import { Injectable, Logger } from "@nestjs/common";
import { BarmenService } from "src/barmen/barmen.service";
import { CoffeeSerivce } from "src/coffee/coffee.service";



@Injectable()
export class OrderService {
    constructor(private coffeService: CoffeeSerivce, private barmenService: BarmenService) { }

   async makeOrderTable(ids: string[]) {
        let orderObj = {
            "amount": 0,
            "time": 0
        }
        
        let convertedIds = ids.map((id) => Number(id))

        let coffees = await this.coffeService.findCoffees(convertedIds)

        for(let coffee of coffees){
            orderObj.amount += coffee.amount;
            orderObj.time += coffee.time
        }


        return this.barmenService.tableOrder(orderObj);
    }

   async makeOrderToGo(ids: string[]) {
        let orderObj = {
            "amount": 0,
            "time": 0
        }
        
        let convertedIds = ids.map((id) => Number(id))

        let coffees = await this.coffeService.findCoffees(convertedIds)

        for(let coffee of coffees){
            orderObj.amount += coffee.amount;
            orderObj.time += coffee.time
        }

        return this.barmenService.toGoOrder(orderObj);
    }
}