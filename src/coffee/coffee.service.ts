import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsUtils, FindOptionsWhere, Repository } from 'typeorm';
import { Coffee } from './coffee.entity';



@Injectable()
export class CoffeeSerivce {
    constructor(@InjectRepository(Coffee)
    private coffeeRepository: Repository<Coffee>) { }


    async findCoffees(ids: number[]): Promise<Coffee[] | []> {
      let coffees = [];
      for(const id of ids){
        let coffee = await this.coffeeRepository.findOneBy({ id })
        coffees.push(coffee);
      }   

      return coffees;
    }

  
}