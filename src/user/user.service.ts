import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdatePatchUserDto } from './dto/update-patch-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async exists(id:number) {
    if(!(await this.show(id))) {
      throw new NotFoundException(
        `O usuário ${id} não existe na aplicação.`
      );
    }
  }

  async create(data: CreateUserDto) {
    return await this.prisma.users.create({
      data,
      select: {
        id: true,
        name: true,
        email: true,

      },
    });
  }

  async list() {
    return await this.prisma.users.findMany();
  }

  async show(id: number) {
    return await this.prisma.users.findUnique({
        where:{
            id
        }
    });
  }

  async update(id:number, data:UpdateUserDto) {
    await this.exists(id);

    const updateData = {
      ...data,
      birthDate: data.birthDate ? new Date(data.birthDate).toISOString() : null
    }
    return await this.prisma.users.update({
      data:updateData,
      where:{
        id
      }
    });
  }

  async updatePartial(id:number, data:UpdatePatchUserDto) {

    await this.exists(id);
    const updateData = {
      ...data,
      birthDate: data.birthDate ? new Date(data.birthDate).toISOString() : null
    }
    return await this.prisma.users.update({
      data:updateData,
      where:{
        id
      }
    });
  }

  async delete(id:number){

    await this.exists(id);

    return this.prisma.users.delete({
      where:{
        id
      }
    })
  }
  
}
