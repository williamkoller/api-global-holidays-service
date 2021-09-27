import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { AddContinentDto } from '@/modules/continents/dtos/add-continent/add-continent.dto';
import { ContinentsRepository } from './continents.repository';

type mockQueryType = {
  where: {
    id: number;
  };
};

describe('ContinentRepository', () => {
  let continentsRepository: ContinentsRepository;
  let mockData: AddContinentDto;
  let mockQuery: mockQueryType;
  let mockDataArray;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContinentsRepository],
    }).compile();

    continentsRepository =
      module.get<ContinentsRepository>(ContinentsRepository);

    mockData = {
      name: 'America',
      territorialExtension: 30198835,
      numberOfCountries: 53,
      population: 1100000000,
      demographicDensity: 34,
      urbanPopulation: 40,
    } as ContinentEntity;

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

    mockQuery = {
      where: {
        id: 1,
      },
    };

    continentsRepository.save = jest.fn();
    continentsRepository.create = jest.fn();
    continentsRepository.findOne = jest.fn();
    continentsRepository.find = jest.fn();
    continentsRepository.createQueryBuilder = jest.fn().mockReturnValue({
      where: jest.fn().mockReturnThis(),
      getOne: jest.fn().mockResolvedValue('África'),
    });
  });

  it('should be defined', () => {
    expect(continentsRepository).toBeDefined();
  });

  it('should be called save with correct params', async () => {
    continentsRepository.save = jest.fn().mockReturnValue(mockData);
    continentsRepository.create = jest.fn().mockReturnValue(mockData);
    await continentsRepository.addContinent(mockData);
    expect(continentsRepository.save).toBeCalledWith(mockData);
  });

  it('should be returns created data', async () => {
    (continentsRepository.save as jest.Mock).mockReturnValue(mockData);
    expect(await continentsRepository.addContinent(mockData)).toEqual(mockData);
  });

  it('should be called loadByName with correct params', async () => {
    const result = await continentsRepository.loadByName('África');
    expect(result).toEqual('África');
  });

  it('should be called continentsRepository with createQueryBuilder must be true', async () => {
    (continentsRepository.createQueryBuilder as jest.Mock).mockReturnValue(
      'continents',
    );
    expect(continentsRepository.createQueryBuilder).toBeTruthy();
  });

  it('should be called loadById with correct params', async () => {
    continentsRepository.findOne = jest.fn().mockReturnValue(1);
    await continentsRepository.loadById(1);
    expect(continentsRepository.findOne).toBeCalledWith(mockQuery);
  });

  it('should be called loadAll with correct params', async () => {
    continentsRepository.find = jest.fn().mockReturnValue(mockDataArray);
    await continentsRepository.loadAll();
    expect(await continentsRepository.find()).toEqual(mockDataArray);
  });
});
