import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto, UpdateUserDto } from './dtos';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUser(userId: number): Promise<User | null> {
    return this.userRepository.user({
      id: userId,
    });
  }

  async userExists(userId: number): Promise<boolean> {
    const user = await this.getUser(userId);
    return !!user;
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.users({});
  }

  async createUser(user: CreateUserDto): Promise<User> {
    return this.userRepository.create(user);
  }

  async updateUser(user: UpdateUserDto): Promise<User | null> {
    if (!(await this.userExists(user.id))) {
      return null;
    }

    const { id, email, name, password } = user;

    return this.userRepository.update({
      where: { id },
      data: { email, name, password },
    });
  }

  async deleteUser(userId: number): Promise<User> {
    if (!(await this.userExists(userId))) {
      return null;
    }

    return this.userRepository.delete({ id: userId });
  }
}
