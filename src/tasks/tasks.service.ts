import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { SuccessResponseDto } from '../users/dto/success-response.dto';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,

    private readonly usersService: UsersService
  ){}

  async create(createTaskDto: CreateTaskDto): Promise<SuccessResponseDto> {
    const {description, completed, assignedToId} = createTaskDto
    const user = await this.usersService.findOne(assignedToId);
    const task = this.taskRepository.create({description:"Write code", completed: false, assignedTo: user});
    await this.taskRepository.save(task);
    return {
      success: true,
      message: "Task created successfully"
    }

  }

  async findAll(): Promise<Task[]> {
    const tasks = await this.taskRepository.find();
    return tasks.map(task => {
      const user = task?.assignedTo;
      delete user?.password
      delete user?.id
      return task
    });
  }

  async findOne(id: number): Promise<Task> {
    const task = await this.taskRepository.findOne({
      where: {id}
    });
    const user = task?.assignedTo;
    delete user?.password
      delete user?.id
      return task
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.findOne(id);
    if(!task){
      throw new NotFoundException("Task does not exist");
    }

    Object.assign(task, updateTaskDto);
    return await this.taskRepository.save(task);
  }

  async remove(id: number): Promise<SuccessResponseDto> {
    const task = await this.findOne(id);
    if(!task){
      throw new NotFoundException("Task does not exist");
    }
    await this.taskRepository.remove(task);
    return {
      success: true,
      message: "Deleted"
    };
  }
}
