import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'snowdenmoses@gmail.com', description: 'unique username of the user' })
    @IsEmail()
    @IsNotEmpty()
    username: string;

    @ApiProperty({ example: '123456', description: 'users password before it gets hashed' })
    @IsNotEmpty()
    @Length(5, 20)
    password: string
}
