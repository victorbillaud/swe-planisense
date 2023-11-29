import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TreeService {
  constructor(private prisma: PrismaService) {}

  async getDistricts(
    orderBy: 'count' | 'name' = 'name',
    sortOrder: 'asc' | 'desc' = 'asc',
  ) {
    return await this.prisma.treeLocation.groupBy({
      by: ['arrondissement'],
      _count: true,
      orderBy:
        orderBy === 'count'
          ? { _count: { arrondissement: sortOrder } }
          : { arrondissement: sortOrder },
    });
  }

  async getSpecies(
    orderBy: 'count' | 'name' = 'name',
    sortOrder: 'asc' | 'desc' = 'asc',
  ) {
    return await this.prisma.treeLocation.groupBy({
      by: ['genre'],
      _count: true,
      orderBy:
        orderBy === 'count'
          ? { _count: { genre: sortOrder } }
          : { genre: sortOrder },
    });
  }
}
