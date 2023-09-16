import { IsEmail, IsString } from "class-validator";

export class UserDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    phoneNumber: string;

    @IsEmail()
    email: string;

    @IsString()
    role: string

};
