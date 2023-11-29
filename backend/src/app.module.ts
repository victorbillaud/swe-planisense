import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { TreeController } from './tree/tree.controller';
import { TreeService } from './tree/tree.service';

@Module({
  imports: [],
  controllers: [AppController, TreeController],
  providers: [AppService, PrismaService, TreeService],
})
export class AppModule {}
