import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdatePatchUserDto } from './dto/update-patch-user.dto';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() {email,name,password}: CreateUserDto) {
    return { email,name,password };
  }

  //all users
  @Get()
  async read() {
    return { users: [] };
  }

  //oneUser
  @Get(':id')
  async show(@Param('id', ParseIntPipe) id:number) {
    return { user: {}, id };
  }

  @Put(':id')
    async update(@Body() {name,email,password}:UpdateUserDto, @Param('id', ParseIntPipe) id:number) {
        return {
            method: 'put',
            name,email,password,
            id
        }
    }

    @Patch(':id')
    async updatePartial(@Body() {name,email,password}: UpdatePatchUserDto, @Param('id', ParseIntPipe) id:number) {
        return {
            method: 'patch',
            name,email,password,
            id
        }
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id:number) {
        return {
            method: 'delete',
            id
        }
    }
}
