import { Test } from '@nestjs/testing';
import { PrismaService } from '../common/service';
import { UserRepository } from './user.repository';

describe('UserRepository', () => {
  let prismaService: PrismaService;
  let userRepository: UserRepository;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          provide: PrismaService,
          useValue: { },
        },
        UserRepository,
      ],
    }).compile();

    prismaService = module.get<PrismaService>(PrismaService);
    userRepository = module.get<UserRepository>(UserRepository);
  });

  it('should be defined', () => {
    expect(prismaService).toBeDefined();
    expect(userRepository).toBeDefined();
  });
});
