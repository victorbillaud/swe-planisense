import { Module } from '@nestjs/common';
import { PrismaService } from '../../src/prisma.service';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';

@Module({
  imports: [],
  controllers: [DatabaseController],
  providers: [DatabaseService, PrismaService],
})
export class DatabaseModule {}
