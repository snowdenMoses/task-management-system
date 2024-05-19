import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashPassword } from 'src/util/hash';
import { SuccessResponseDto } from './dto/success-response.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}
  async create(createUserDto: CreateUserDto): Promise<SuccessResponseDto> {
    const {username, password} = createUserDto;
    const hashedPassword = await hashPassword(password);

    const user = this.userRepository.create({
      username: username,
      password: hashedPassword
    });
    await this.userRepository.save(user);
    return{
      success: true,
      message: "User created successfully"
    }
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<{username: string}> {
    const user = await this.userRepository.findOne({
      where: {id}
    });

    const {username, ...otherAttributes} = user;
    return {username};
  }

  async findByUsername(username: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {username}
    });
  }
}