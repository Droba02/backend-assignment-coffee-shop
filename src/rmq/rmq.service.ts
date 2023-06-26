import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientProxy, RmqOptions, Transport } from "@nestjs/microservices";
import { MakeOrderEvent } from "src/barmen/make-order.event";


@Injectable()
export class RmqService{
    constructor(@Inject('ORDERS') private readonly client: ClientProxy){
    }

    public send(pattern: string, data : MakeOrderEvent){
            return this.client.emit(pattern, data)
    }
}