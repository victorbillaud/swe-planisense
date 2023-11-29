import { Controller, Get, Query } from '@nestjs/common';
import { TreeService } from './tree.service';

@Controller('tree')
export class TreeController {
  constructor(private readonly treeService: TreeService) {}

  @Get('districts')
  async getDistricts(
    @Query('order_by') orderBy?: 'count' | 'name',
    @Query('sort_order') sortOrder?: 'asc' | 'desc',
  ) {
    return await this.treeService.getDistricts(orderBy, sortOrder);
  }

  @Get('species')
  async getSpecies(
    @Query('order_by') orderBy?: 'count' | 'name',
    @Query('sort_order') sortOrder?: 'asc' | 'desc',
  ) {
    return await this.treeService.getSpecies(orderBy, sortOrder);
  }
}
