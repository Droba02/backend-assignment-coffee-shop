import { Inject, Injectable, Logger } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { MakeOrderEvent } from "./make-order.event";
import { OnEvent } from "@nestjs/event-emitter";
import { SendResponseEvent } from "./send-response.event";

@Injectable()
export class BarmenService {

    constructor(
        @Inject('BARISTA') private barista: ClientProxy
    ) { }

    public orders = []



    sendTableOrder(order: { amount: number, time: number, orderNumber: number }) {

        this.orders.push(order);
        this.barista.emit('make-order', new MakeOrderEvent(this.orders[0]))
    }


    @OnEvent('recieve-response')
    handleResponse(data: SendResponseEvent) {
        if (data.succesful) {
            Logger.log('Barista recieved order!')
            this.orders.shift()
        }else{
            Logger.log(`Barista is currently busy.`)
        }
    }
    @OnEvent('next-order')
    sendNextOrder(){
        if(this.orders.length > 0){
            this.barista.emit('make-order', new MakeOrderEvent(this.orders[0]))
            Logger.log('Sending next order!')
        }else{
            Logger.log('All orders are complete!')
        }
    }

}

