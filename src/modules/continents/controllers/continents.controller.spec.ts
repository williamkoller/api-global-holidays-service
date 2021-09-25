import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';
import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AddContinentService } from '../services/add-continent/add-continent.service';
import { LoadAllContinentsService } from '../services/load-all-continents/load-all-continents.service';
import { ContinentsController } from './continents.controller';

describe('ContinentsController', () => {
  let controller: ContinentsController;
  let addContinentService: AddContinentService;
  let loadAllContinentsService: LoadAllContinentsService;
  let mockInvalid;
  let mockData: ContinentEntity;
  let mockDataArray;

  beforeEach(async () => {
    const mockService = {
      addContinent: jest.fn(),
      loadAll: jest.fn(),
    };

    mockInvalid = {
      name: 'INVALID',
    };

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

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AddContinentService,
          useFactory: () => mockService,
        },
        {
          provide: LoadAllContinentsService,
          useFactory: () => mockService,
        },
      ],
      controllers: [ContinentsController],
    }).compile();

    controller = module.get<ContinentsController>(ContinentsController);
    addContinentService = module.get<AddContinentService>(AddContinentService);
    loadAllContinentsService = module.get<LoadAllContinentsService>(
      LoadAllContinentsService,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('addContinent()', () => {
    it('should be throw when service throw', async () => {
      (addContinentService.addContinent as jest.Mock).mockRejectedValue(
        new BadRequestException(),
      );
      await expect(controller.addContinent(mockInvalid)).rejects.toThrow(
        new BadRequestException(),
      );
    });

    it('should be called service with correct params', async () => {
      controller.addContinent(mockData);
      expect(addContinentService.addContinent).toBeCalledWith(mockData);
    });

    it('should be returns when service returns', async () => {
      (addContinentService.addContinent as jest.Mock).mockReturnValue(mockData);
      expect(await controller.addContinent(mockData)).toEqual(mockData);
    });

    describe('loadAll()', () => {
      it('should be returns loadAll', async () => {
        (loadAllContinentsService.loadAll as jest.Mock).mockReturnValue(
          mockDataArray,
        );
        expect(await controller.loadAll()).toEqual(mockDataArray);
      });
    });
  });
});
