import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ContinentsRepository } from '../../repositories/continents.repository';
import { AddContinentService } from './add-continent.service';

describe('AddContinentService', () => {
  let addContinentService: AddContinentService;
  let continentsRepository: ContinentsRepository;
  let mockInvalid;
  let mockData: ContinentEntity;

  beforeEach(async () => {
    const continentsRepositoryMock = {
      addContinent: jest.fn(),
      loadByName: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AddContinentService,
        {
          provide: ContinentsRepository,
          useFactory: () => continentsRepositoryMock,
        },
      ],
    }).compile();

    mockInvalid = {
      name: 'INVALID',
    };

    mockData = {
      name: 'America',
      territorialExtension: 30198835,
      totalCountries: 53,
      population: 1100000000,
      demographicDensity: 34,
      urbanPopulation: 40,
    } as ContinentEntity;

    addContinentService = module.get<AddContinentService>(AddContinentService);
    continentsRepository =
      module.get<ContinentsRepository>(ContinentsRepository);
  });

  it('should be defined', () => {
    expect(addContinentService).toBeDefined();
  });

  describe('addContinent()', () => {
    it('should be throw if repository throw', async () => {
      (continentsRepository.addContinent as jest.Mock).mockRejectedValue(
        new InternalServerErrorException(),
      );
      await expect(
        addContinentService.addContinent(mockInvalid),
      ).rejects.toThrow(new InternalServerErrorException());
    });

    it('should be called continentsRepository with correct params', async () => {
      await addContinentService.addContinent(mockData);
      expect(continentsRepository.addContinent).toBeCalledWith(mockData);
    });

    it('should be throw if name already exists', async () => {
      (continentsRepository.loadByName as jest.Mock).mockRejectedValue(
        new ConflictException(),
      );
      await expect(
        addContinentService.addContinent(mockInvalid),
      ).rejects.toThrow(new ConflictException());
    });

    it('should be return when repository return', async () => {
      (continentsRepository.addContinent as jest.Mock).mockReturnValue(
        mockData,
      );
      expect(await addContinentService.addContinent(mockData)).toEqual(
        mockData,
      );
    });
  });
});
