import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'src/common/service';
import { UserRepository } from './user.repository';


const dependencies = [
  UserService,
  PrismaService,
  UserRepository
]

@Module({
  controllers: [UserController],
  providers: dependencies
})
export class UserModule {}
