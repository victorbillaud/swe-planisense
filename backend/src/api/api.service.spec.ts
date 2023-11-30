import { Test, TestingModule } from '@nestjs/testing';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let controller: ApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiService],
      controllers: [ApiController],
    }).compile();

    service = module.get<ApiService>(ApiService);
    controller = module.get<ApiController>(ApiController);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });

  it('should return an array of districts with count', async () => {
    const res = await service.getDistricts();
    // Res is an array of districts
    expect(res).toBeDefined();
    expect(res.length).toBeGreaterThan(0);

    const firstDistrict = res[0];

    expect(firstDistrict).toBeDefined();
    expect(firstDistrict.arrondissement).toBeDefined();
    expect(firstDistrict._count).toBeDefined();
  });

  it('should return an array of species with count', async () => {
    const res = await service.getSpecies();
    // Res is an array of districts
    expect(res).toBeDefined();
    expect(res.length).toBeGreaterThan(0);

    const firstDistrict = res[0];

    expect(firstDistrict).toBeDefined();
    expect(firstDistrict.genre).toBeDefined();
    expect(firstDistrict._count).toBeDefined();
  });

  it('should order districts by count ascending', async () => {
    const res = await service.getDistricts('count', 'asc');
    // Res is an array of districts
    expect(res).toBeDefined();
    expect(res.length).toBeGreaterThan(0);

    const firstDistrict = res[0];
    const lastDistrict = res[res.length - 1];

    expect(firstDistrict._count).toBeLessThan(lastDistrict._count);
  });

  it('should order species by count descending', async () => {
    const res = await service.getSpecies('count', 'desc');
    // Res is an array of districts
    expect(res).toBeDefined();
    expect(res.length).toBeGreaterThan(0);

    const firstDistrict = res[0];
    const lastDistrict = res[res.length - 1];

    expect(firstDistrict._count).toBeGreaterThan(lastDistrict._count);
  });

  it('should order districts by name ascending', async () => {
    const res = await service.getDistricts('name', 'asc');
    // Res is an array of districts
    expect(res).toBeDefined();
    expect(res.length).toBeGreaterThan(0);

    const firstDistrict = res[0];
    const lastDistrict = res[res.length - 1];

    expect(
      firstDistrict.arrondissement
        .toString()
        .localeCompare(lastDistrict.arrondissement.toString()),
    ).toBeLessThan(0);
  });

  it('should order species by name descending', async () => {
    const res = await service.getSpecies('name', 'desc');
    // Res is an array of districts
    expect(res).toBeDefined();
    expect(res.length).toBeGreaterThan(0);

    const firstDistrict = res[0];
    const lastDistrict = res[res.length - 1];

    expect(
      firstDistrict.genre
        .toString()
        .localeCompare(lastDistrict.genre.toString()),
    ).toBeGreaterThan(0);
  });
});
