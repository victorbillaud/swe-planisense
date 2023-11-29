import { Module } from '@nestjs/common';
import { ApiController } from './api/api.controller';
import { ApiService } from './api/api.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseController } from './database/database.controller';
import { DatabaseService } from './database/database.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, ApiController, DatabaseController],
  providers: [AppService, PrismaService, DatabaseService, ApiService],
})
export class AppModule {}
