import { Inject, Injectable, Logger } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { MakeOrderEvent } from "./make-order.event";
import { OnEvent } from "@nestjs/event-emitter";
import { SendResponseEvent } from "./send-response.event";
import { RmqService } from "src/rmq/rmq.service";

@Injectable()
export class BarmenService {

    constructor(private readonly rmqService: RmqService){}

    public orders = []



    sendTableOrder(order: { amount: number, time: number, orderNumber: number }) {

       this.rmqService.send('table-order', new MakeOrderEvent(order));
    }


   

}

