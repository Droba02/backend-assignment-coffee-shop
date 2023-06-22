import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amountSum: number;

    @Column()
    completionTimeAt: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: string;

    @Column({ default: 1 })
    orderNumber: number;

    @Column({type:"tinyint" ,default : 0})
    isCompleted: number
}