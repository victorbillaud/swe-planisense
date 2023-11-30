import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../src/prisma.service';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';

describe('DatabaseController', () => {
  let controller: DatabaseController;
  let service: DatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatabaseController],
      providers: [DatabaseService, PrismaService],
    }).compile();

    controller = module.get<DatabaseController>(DatabaseController);
    service = module.get<DatabaseService>(DatabaseService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });
});
