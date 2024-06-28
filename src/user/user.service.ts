import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";



@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async create({email,name,password} : CreateUserDto){
        
        return await this.prisma.users.create({
            data:{
                name,
                email,
                password
            },
            select:{
                id:true,
                name:true
            }
        });
    }

}