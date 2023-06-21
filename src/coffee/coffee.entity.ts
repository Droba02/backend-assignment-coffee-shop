import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  amount: number;

  @Column({type: "decimal", precision: 10, scale: 2})
  price: number;
  
  @Column()
  time: number;

}