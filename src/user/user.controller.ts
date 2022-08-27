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
    return await this.service.users({}).catch(() => {
      throw new BadRequestException();
    });
  }

  @Get(':id')
  async getUserById(@Param('id', new ParseIntPipe()) id) {
    return await this.service.user({ id }).catch(() => {
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
  async updateUser(@Body() params: UpdateUserDto) {
    const { id, email, name, password } = params;

    const where = { id };
    const data = { email, name, password };

    return await this.service.updateUser({ where, data }).catch(() => {
      throw new BadRequestException();
    });
  }

  @Delete(':id')
  async deleteUser(@Param('id', new ParseIntPipe()) id) {
    return this.service.deleteUser({ id }).catch(() => {
      throw new BadRequestException();
    });
  }
}
