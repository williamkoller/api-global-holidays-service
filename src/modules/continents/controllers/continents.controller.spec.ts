import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AddContinentService } from '../services/add-continent/add-continent.service';
import { ContinentsController } from './continents.controller';

describe('ContinentsController', () => {
  let controller: ContinentsController;
  let service: AddContinentService;

  beforeEach(async () => {
    const mockService = {
      addContinent: jest.fn(),
    };

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
      await expect(controller.addContinent).rejects.toThrow(
        new BadRequestException(),
      );
    });
  });
});
