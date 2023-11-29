import { Controller, Get, Query } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('districts')
  async getDistricts(
    @Query('order_by') orderBy?: 'count' | 'name',
    @Query('sort_order') sortOrder?: 'asc' | 'desc',
  ) {
    return await this.apiService.getDistricts(orderBy, sortOrder);
  }

  @Get('species')
  async getSpecies(
    @Query('order_by') orderBy?: 'count' | 'name',
    @Query('sort_order') sortOrder?: 'asc' | 'desc',
  ) {
    return await this.apiService.getSpecies(orderBy, sortOrder);
  }
}
