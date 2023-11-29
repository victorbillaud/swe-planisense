import { Controller, Get, Query } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get('districts')
  async getDistricts(
    @Query('order_by') orderBy?: 'count' | 'name',
    @Query('sort_order') sortOrder?: 'asc' | 'desc',
  ) {
    return await this.databaseService.getDistricts(orderBy, sortOrder);
  }

  @Get('species')
  async getSpecies(
    @Query('order_by') orderBy?: 'count' | 'name',
    @Query('sort_order') sortOrder?: 'asc' | 'desc',
  ) {
    return await this.databaseService.getSpecies(orderBy, sortOrder);
  }
}
