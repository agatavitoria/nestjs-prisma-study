import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dtos';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async getAllUsers() {
    return await this.service.getUsers().catch(() => {
      throw new BadRequestException();
    });
  }

  @Get(':user_id')
  async getUserById(@Param('user_id', new ParseIntPipe()) userId) {
    return await this.service.getUser(userId).catch(() => {
      throw new BadRequestException();
    });
  }

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return await this.service.createUser(user).catch(() => {
      throw new BadRequestException();
    });
  }

  @Put()
  async updateUser(@Body() user: UpdateUserDto) {
    return await this.service.updateUser(user).catch((err) => {
      console.log(err);
      throw new BadRequestException();
    });
  }

  @Delete(':user_id')
  async deleteUser(@Param('user_id', new ParseIntPipe()) userId) {
    return this.service.deleteUser(userId).catch(() => {
      throw new BadRequestException();
    });
  }
}
