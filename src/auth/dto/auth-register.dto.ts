import { IsDateString, IsEmail, IsOptional, IsString, IsStrongPassword, MinLength } from "class-validator";


export class AuthRegisterDto {
    @IsString()
    name: string;
  
    @IsEmail()
    email: string;
  
    @IsStrongPassword({
      minLength: 6,
      minUppercase: 1,
      minSymbols: 1,
    })
    password: string;
  
    @IsOptional()
    @IsDateString()
    birthDate: string;
  }
