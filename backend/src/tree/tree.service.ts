import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TreeService {
  constructor(private prisma: PrismaService) {}

  async getDistricts(orderBy: 'count' | 'name' = 'name') {
    return await this.prisma.treeLocation.groupBy({
      by: ['arrondissement'],
      _count: true,
      orderBy:
        orderBy === 'count'
          ? { _count: { arrondissement: 'asc' } }
          : { arrondissement: 'asc' },
    });
  }

  async getSpecies(orderBy: 'count' | 'name' = 'name') {
    return await this.prisma.treeLocation.groupBy({
      by: ['genre'],
      _count: {
        genre: true,
      },
      orderBy:
        orderBy === 'count' ? { _count: { genre: 'asc' } } : { genre: 'asc' },
    });
  }
}
