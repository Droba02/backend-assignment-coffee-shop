import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from './coffee.entity';



@Injectable()
export class CoffeeSerivce{
    constructor(@InjectRepositoty(Coffee))
}