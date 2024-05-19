
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    description: string;

    @IsBoolean()
    @IsNotEmpty()
    completed: boolean;

    @IsNotEmpty()
    @IsNumber()
    assignedToId: number
}
