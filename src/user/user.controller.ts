import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdatePatchUserDto } from './dto/update-patch-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService){

  }


  @Post()
  async create(@Body() data: CreateUserDto) {
    return await this.userService.create(data);
  }

  //all users
  @Get()
  async list() {
    return await this.userService.list();
  }

  //oneUser
  @Get(':id')
  async show(@Param('id', ParseIntPipe) id:number) {
    return this.userService.show(id);
  }

  @Put(':id')
    async update(@Body() data:UpdateUserDto, @Param('id', ParseIntPipe) id:number) {
        return this.userService.update(id, data);
    }

    @Patch(':id')
    async updatePartial(@Body() data: UpdatePatchUserDto, @Param('id', ParseIntPipe) id:number) {
        return this.userService.updatePartial(id, data)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id:number) {
      return this.userService.delete(id);
    }
}
