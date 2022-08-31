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
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { BadRequestDto, UnauthorizedRequestDto } from 'src/common/dtos';
import {
  CreateUserRequestDTO,
  UpdateUserRequestDTO,
  UserResponseDTO,
} from './dtos';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  @ApiOkResponse({ type: [UserResponseDTO] })
  @ApiUnauthorizedResponse({ type: UnauthorizedRequestDto })
  @ApiBadRequestResponse({ type: BadRequestDto })
  async getAllUsers(): Promise<UserResponseDTO[]> {
    return await this.service.getUsers().catch(() => {
      throw new BadRequestException();
    });
  }

  @ApiOkResponse({ type: UserResponseDTO })
  @ApiUnauthorizedResponse({ type: UnauthorizedRequestDto })
  @ApiBadRequestResponse({ type: BadRequestDto })
  @Get(':user_id')
  async getUserById(
    @Param('user_id', new ParseIntPipe()) userId,
  ): Promise<UserResponseDTO> {
    return await this.service.getUser(userId).catch(() => {
      throw new BadRequestException();
    });
  }

  @ApiOkResponse({ type: UserResponseDTO })
  @ApiUnauthorizedResponse({ type: UnauthorizedRequestDto })
  @ApiBadRequestResponse({ type: BadRequestDto })
  @Post()
  async createUser(
    @Body() user: CreateUserRequestDTO,
  ): Promise<UserResponseDTO> {
    return await this.service.createUser(user).catch(() => {
      throw new BadRequestException();
    });
  }

  @ApiOkResponse({ type: UserResponseDTO })
  @ApiUnauthorizedResponse({ type: UnauthorizedRequestDto })
  @ApiBadRequestResponse({ type: BadRequestDto })
  @Put()
  async updateUser(
    @Body() user: UpdateUserRequestDTO,
  ): Promise<UserResponseDTO> {
    return await this.service.updateUser(user).catch(() => {
      throw new BadRequestException();
    });
  }

  @ApiOkResponse({ type: UserResponseDTO })
  @ApiUnauthorizedResponse({ type: UnauthorizedRequestDto })
  @ApiBadRequestResponse({ type: BadRequestDto })
  @Delete(':user_id')
  async deleteUser(
    @Param('user_id', new ParseIntPipe()) userId,
  ): Promise<UserResponseDTO> {
    return this.service.deleteUser(userId).catch(() => {
      throw new BadRequestException();
    });
  }
}
