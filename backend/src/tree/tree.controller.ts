import { Controller, Get, Query } from '@nestjs/common';
import { TreeService } from './tree.service';

@Controller('tree')
export class TreeController {
  constructor(private readonly treeService: TreeService) {}

  @Get('districts')
  async getDistricts(@Query('order_by') orderBy?: 'count' | 'name') {
    return await this.treeService.getDistricts(orderBy);
  }

  @Get('species')
  async getSpecies(@Query('order_by') orderBy?: 'count' | 'name') {
    return await this.treeService.getSpecies(orderBy);
  }
}
