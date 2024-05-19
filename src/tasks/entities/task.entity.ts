import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tasks"})
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "text", nullable: false})
    description: string

    @Column({type: "boolean", nullable: false, default: false})
    completed: boolean

    @ManyToOne(()=>User, user => user.tasks, {eager: true})
    assignedTo: User;
}
