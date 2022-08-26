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
import { CreateUserDto, UserUpdateDto } from './dtos';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async getAllUsers() {
    return await this.service.users({}).catch(() => {
      throw new BadRequestException();
    });
  }

  @Get(':user_id')
  async getUserById(@Param('user_id', new ParseIntPipe()) user_id) {
    const condition = { id: user_id };
    return await this.service.user(condition).catch(() => {
      throw new BadRequestException();
    });
  }

  @Post()
  async createUser(@Body() params: CreateUserDto) {
    return await this.service.create({ ...params }).catch(() => {
      throw new BadRequestException();
    });
  }

  @Put()
  async updateUser(@Body() params: UserUpdateDto) {
    const { id, email, name, password } = params;

    const where = { id };
    const data = { email, name, password };

    return await this.service.updateUser({ where, data }).catch(() => {
      throw new BadRequestException();
    });
  }

  @Delete(':user_id')
  async deleteUser(@Param('user_id', new ParseIntPipe()) user_id) {
    const condition = { id: user_id };
    return this.service.deleteUser(condition).catch(() => {
      throw new BadRequestException();
    });
  }
}
