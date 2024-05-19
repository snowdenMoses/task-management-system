import { Task } from "src/tasks/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "users"})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: false})
    username: string

    @Column({nullable: false})
    password: string;

    @OneToMany(()=> Task, task=> task.assignedTo)
    tasks: User;
}
