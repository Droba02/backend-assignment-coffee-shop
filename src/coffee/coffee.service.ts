import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from './coffee.entity';



@Injectable()
export class CoffeeSerivce {
    constructor(@InjectRepository(Coffee)
    private coffeeRepository: Repository<Coffee>) { }



    async findOne(id: number): Promise<Coffee | null> {
        const coffee = await this.coffeeRepository.findOneBy({ id });
        
        return coffee;
    }

    findAll(): Promise<Coffee[]> {
        return this.coffeeRepository.find();
      }

      async remove(id: number): Promise<void> {
        await this.coffeeRepository.delete(id);

      }

    
}