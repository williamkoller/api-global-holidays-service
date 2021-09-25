import { InternalServerErrorException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AddContinentDto } from '../../dtos/add-continent/add-continent.dto';
import { ContinentsRepository } from '../../repositories/continents.repository';
import { LoadAllContinentsService } from './load-all-continents.service';

describe('LoadAllContinents', () => {
  let loadAllContinentsService: LoadAllContinentsService;
  let continentsRepo: ContinentsRepository;
  let mockDataArray: AddContinentDto[];

  beforeEach(async () => {
    const continentsServiceMock = {
      loadAll: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoadAllContinentsService,
        {
          provide: ContinentsRepository,
          useFactory: () => continentsServiceMock,
        },
      ],
    }).compile();

    mockDataArray = [
      {
        name: 'America',
        territorialExtension: 30198835,
        numberOfCountries: 53,
        population: 1100000000,
        demographicDensity: 34,
        urbanPopulation: 40,
      },
    ];

    loadAllContinentsService = module.get<LoadAllContinentsService>(
      LoadAllContinentsService,
    );
    continentsRepo = module.get<ContinentsRepository>(ContinentsRepository);
  });

  it('should be defined', () => {
    expect(loadAllContinentsService).toBeDefined();
  });

  it('should be throw if repository throw', async () => {
    (continentsRepo.loadAll as jest.Mock).mockRejectedValue(
      new InternalServerErrorException(),
    );
    expect(loadAllContinentsService.loadAll()).rejects.toThrow(
      new InternalServerErrorException(),
    );
  });

  it('should be return loadAll', async () => {
    (continentsRepo.loadAll as jest.Mock).mockReturnValue(mockDataArray);
    expect(await loadAllContinentsService.loadAll()).toEqual(mockDataArray);
  });
});
