import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @Length(5, 20)
    password: string
}
