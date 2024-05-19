
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
    @ApiProperty({ example: 'Design enterprise application database architecture', description: 'description of task' })
    @IsString()
    @IsNotEmpty()
    description: string;


    @ApiProperty({ example: 'false', description: 'the task status' })
    @IsBoolean()
    @IsNotEmpty()
    completed: boolean;


    @ApiProperty({ example: '3', description: 'UserId that the task is assigned to' })
    @IsNotEmpty()
    @IsNumber()
    assignedToId: number
}
