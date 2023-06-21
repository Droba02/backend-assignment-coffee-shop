import { Controller, Logger } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";
import { SendResponseEvent } from "./send-response.event";
import { SuccessfulOrderEvent } from "./successful-order.event";
import { EventEmitter2 } from "@nestjs/event-emitter";


@Controller()
export class BarmenController{

    constructor(private eventEmitter: EventEmitter2){}
    @EventPattern('successful-order')
    successfulOrder(data: SuccessfulOrderEvent){
        Logger.log(`Barista finished the order number ${data.orderNumber}`)
    }
        
    @EventPattern('send-response')
    recieveResponse(data: SendResponseEvent){
        this.eventEmitter.emit('recieve-response', data);
    }

}