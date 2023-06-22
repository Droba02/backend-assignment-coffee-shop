import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BarmenService } from "src/barmen/barmen.service";
import { CoffeeSerivce } from "src/coffee/coffee.service";
import { Repository } from "typeorm";
import { Order } from "./order.entity";



@Injectable()
export class OrderService {
    constructor(private coffeService: CoffeeSerivce, private barmenService: BarmenService,
        /*@InjectRepository(Order)
    private orderRepository: Repository<Order>*/) { }
    public orderNumber = 0;

   async makeOrderTable(ids: string[]) {
        this.orderNumber ++;
        let orderObj = {
            "amount": 0,
            "time": 0,
            "orderNumber" : this.orderNumber
        }
        
        let convertedIds = ids.map((id) => Number(id))

        let coffees = await this.coffeService.findCoffees(convertedIds)

        for(let coffee of coffees){
            orderObj.amount += coffee.amount;
            orderObj.time += coffee.time
        }

        Logger.log("Order recieved by barmen!");
        this.barmenService.sendTableOrder(orderObj);
    }

   /*async makeOrderToGo(ids: string[]) {
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
    }*/

    
    /*async createOrder(order: {amount : number, time: number, orderNumber: number}){
        try{
            const newOrder = this.orderRepository.create({
                amountSum: order.amount,
                completionTimeAt : order.time,
                orderNumber : order.orderNumber,
                isCompleted : 0  
            })

            return await this.orderRepository.save(newOrder);
        }catch(err){
            return err;
        }
        
    }*/

}