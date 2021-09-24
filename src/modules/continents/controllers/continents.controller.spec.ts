import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';
import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AddContinentService } from '../services/add-continent/add-continent.service';
import { ContinentsController } from './continents.controller';

describe('ContinentsController', () => {
  let controller: ContinentsController;
  let service: AddContinentService;
  let mockInvalid;
  let mockData: ContinentEntity;

  beforeEach(async () => {
    const mockService = {
      addContinent: jest.fn(),
    };

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

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AddContinentService,
          useFactory: () => mockService,
        },
      ],
      controllers: [ContinentsController],
    }).compile();

    controller = module.get<ContinentsController>(ContinentsController);
    service = module.get<AddContinentService>(AddContinentService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('addContinent()', () => {
    it('should be throw when service throw', async () => {
      (service.addContinent as jest.Mock).mockRejectedValue(
        new BadRequestException(),
      );
      await expect(controller.addContinent(mockInvalid)).rejects.toThrow(
        new BadRequestException(),
      );
    });

    it('should be called service with correct params', async () => {
      controller.addContinent(mockData);
      expect(service.addContinent).toBeCalledWith(mockData);
    });
  });
});
